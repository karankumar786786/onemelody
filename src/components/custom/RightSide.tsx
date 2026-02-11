"use client";

import { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Heart,
  Volume2,
  VolumeX,
  ChevronDown,
} from "lucide-react";
import Hls from "hls.js";

interface LyricCue {
  start: number;
  end: number;
  text: string;
}

interface QualityLevel {
  bitrate: number;
  width?: number;
  height?: number;
}

interface QualityMeta {
  label: string;
  desc: string;
  icon: string;
}

function RightSide() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const lyricsContainerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(100);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [lyrics, setLyrics] = useState<LyricCue[]>([]);
  const [currentCueIndex, setCurrentCueIndex] = useState<number>(-1);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [qualityLevels, setQualityLevels] = useState<QualityLevel[]>([]);
  const [currentQuality, setCurrentQuality] = useState<number>(-1); // -1 = Auto
  const [showQualityMenu, setShowQualityMenu] = useState<boolean>(false);
  const [currentBitrate, setCurrentBitrate] = useState<number | null>(null);
  const [status, setStatus] = useState<string>("Initializing...");

  // Configuration
  const baseUrl =
    "https://musicstreamingprod.s3.ap-south-1.amazonaws.com/Aayega-Maza-Ab-Barsaat-Ka--Andaaz---Akshay-Kumar---Priyanka-Chopra---Lara-Dutta---Romantic-Hindi--HD";
  const streamUrl = `${baseUrl}/master.m3u8`;
  const captionUrl = `${baseUrl}/captions.vtt`;
  const albumArt =
    "https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png";

  const songInfo = {
    title: "Aayega Maza Ab Barsaat Ka",
    artist: "Andaaz • Akshay Kumar, Priyanka Chopra",
  };

  // Initialize HLS player
  useEffect(() => {
    const initHLS = () => {
      if (!audioRef.current) return;

      if (Hls.isSupported()) {
        const hls = new Hls({
          enableWorker: true,
          lowLatencyMode: false,
        });

        hlsRef.current = hls;

        hls.loadSource(streamUrl);
        hls.attachMedia(audioRef.current);

        hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
          console.log("✓ HLS loaded, quality levels:", data.levels.length);
          setQualityLevels(hls.levels as QualityLevel[]);
          setStatus("Ready");
        });

        // Track real-time bitrate
        hls.on(Hls.Events.FRAG_CHANGED, (event, data) => {
          const level = hls.levels[data.frag.level];
          if (level) {
            setCurrentBitrate(Math.round(level.bitrate / 1000));
          }
        });

        hls.on(Hls.Events.ERROR, (event, data) => {
          if (data.fatal) {
            console.error("HLS Error:", data);
            setStatus("Error");

            // Attempt recovery
            if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
              console.log("Attempting network recovery...");
              hls.startLoad();
            } else if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
              console.log("Attempting media recovery...");
              hls.recoverMediaError();
            }
          }
        });
      } else if (
        audioRef.current.canPlayType("application/vnd.apple.mpegurl")
      ) {
        // Safari native HLS
        audioRef.current.src = streamUrl;
        setStatus("Ready (Native HLS)");
      } else {
        setStatus("Unsupported");
      }
    };

    initHLS();

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, [streamUrl]);

  // Load captions/lyrics
  useEffect(() => {
    const loadLyrics = async () => {
      try {
        const response = await fetch(captionUrl);

        if (!response.ok) {
          throw new Error("Captions not found");
        }

        const vttText = await response.text();

        if (!vttText.trim().startsWith("WEBVTT")) {
          throw new Error("Invalid VTT format");
        }

        const lines = vttText.split("\n");
        const parsedCues = [];
        let tempCue = null;

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();

          if (!line || line === "WEBVTT") continue;

          if (line.includes("-->")) {
            const [start, end] = line.split("-->").map((t) => t.trim());
            tempCue = {
              start: parseTimestamp(start),
              end: parseTimestamp(end),
              text: "",
            };
          } else if (tempCue && line) {
            tempCue.text = line;
            parsedCues.push(tempCue);
            tempCue = null;
          }
        }

        setLyrics(parsedCues);
      } catch (error) {
        console.warn("Lyrics error:", error);
      }
    };

    loadLyrics();
  }, [captionUrl]);

  const parseTimestamp = (timestamp: string): number => {
    const parts = timestamp.split(":");
    const hours = parseInt(parts[0]);
    const minutes = parseInt(parts[1]);
    const seconds = parseFloat(parts[2]);
    return hours * 3600 + minutes * 60 + seconds;
  };

  // Update current time and lyrics sync
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);

      // Update active lyric
      if (lyrics.length > 0) {
        let newCueIndex = -1;
        for (let i = 0; i < lyrics.length; i++) {
          if (
            audio.currentTime >= lyrics[i].start &&
            audio.currentTime <= lyrics[i].end
          ) {
            newCueIndex = i;
            break;
          }
        }

        if (newCueIndex !== currentCueIndex) {
          setCurrentCueIndex(newCueIndex);

          // Auto-scroll to active lyric
          if (newCueIndex !== -1 && lyricsContainerRef.current) {
            const activeLine = lyricsContainerRef.current.querySelector(
              `[data-index="${newCueIndex}"]`,
            );
            if (activeLine) {
              activeLine.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }
          }
        }
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, [lyrics, currentCueIndex]);

  // Handle play/pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  // Handle seek
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Handle volume
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
      setIsMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume / 100;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  // Skip forward/backward
  const skip = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += seconds;
    }
  };

  // Quality selection
  const getQualityMeta = (bitrate: number): QualityMeta => {
    const kbps = Math.round(bitrate / 1000);
    if (kbps >= 100)
      return { label: "High", desc: `${kbps} kbps • Best quality`, icon: "HQ" };
    if (kbps >= 28)
      return { label: "Medium", desc: `${kbps} kbps • Balanced`, icon: "MQ" };
    return { label: "Low", desc: `${kbps} kbps • Data saver`, icon: "LQ" };
  };

  const setQuality = (levelIndex: number) => {
    if (!hlsRef.current) return;

    setCurrentQuality(levelIndex);
    hlsRef.current.currentLevel = levelIndex; // -1 = auto
    setShowQualityMenu(false);
  };

  const handleLyricClick = (startTime: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = startTime;
    }
  };

  // Format time helper
  const formatTime = (seconds: number): string => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getQualityDisplay = (): string => {
    if (currentQuality === -1) return "Auto";
    if (qualityLevels[currentQuality]) {
      return getQualityMeta(qualityLevels[currentQuality].bitrate).icon;
    }
    return "AUTO";
  };

  return (
    <div className=" pl-4 w-[25%]  flex flex-col  h-full overflow-hidden">
      {/* Hidden audio element */}
      <audio ref={audioRef} preload="metadata" />

      {/* Album Art */}
      <div className="w-[94%] mx-auto mt-4 h-[20%] shadow-2xl rounded-2xl overflow-hidden relative group">
        <img
          src={albumArt}
          alt="Album Art"
          className="h-full w-full object-cover"
        />
        {/* <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white/80">
          {status}
        </div> */}
      </div>
      {/* Lyrics Section */}
      <div className="m-3 h-[40%] rounded-2xl p-4 shadow-lg overflow-y-auto   backdrop-blur-sm relative">
        {/* <div className="sticky top-0 bg-gray-900/80 backdrop-blur-md px-2 py-2 mb-4 rounded-lg z-10">
          <h3 className="text-white font-semibold text-sm">Lyrics</h3>
          <p className="text-white/50 text-xs">
            {lyrics.length > 0
              ? `${lyrics.length} lines`
              : "No lyrics available"}
          </p>
        </div> */}

        <div ref={lyricsContainerRef} className="space-y-4">
          {lyrics.length > 0 ? (
            lyrics.map((cue, index) => (
              <div
                key={index}
                data-index={index}
                onClick={() => handleLyricClick(cue.start)}
                className={`text-2xl font-bold leading-relaxed cursor-pointer transition-all duration-300 px-2 py-1 rounded-lg relative ${
                  index === currentCueIndex
                    ? "text-white scale-105 bg-white/5"
                    : index < currentCueIndex
                      ? "text-gray-600"
                      : "text-gray-500"
                }`}
              >
                {index === currentCueIndex && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3/4 bg-green-500 rounded-r-full" />
                )}
                {cue.text}
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-12">
              <div className="text-6xl mb-4">🎤</div>
              <p className="text-lg">No lyrics available</p>
            </div>
          )}
        </div>
      </div>

      {/* Player Controls */}
      <div className="mt-auto">
        {/* Song Info */}
        <div className="px-4">
          <div className="text-white font-semibold text-lg tracking-wide truncate">
            {songInfo.title}
          </div>
          <div className="text-white/60 text-sm truncate">
            {songInfo.artist}
          </div>
        </div>

        {/* Time and Seekbar */}
        <div className="px-4 mt-2">
          <div className="flex justify-between text-white/60 text-xs mb-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md hover:[&::-webkit-slider-thumb]:scale-110 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:shadow-md"
          />
        </div>

        {/* Bitrate indicator */}
        {currentBitrate && (
          <div className="px-4 mt-2 flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-white/50 text-xs">
              Streaming at {currentBitrate} kbps
            </span>
          </div>
        )}

        {/* Quality Selector */}
        {qualityLevels.length > 0 && (
          <div className="px-4 mt-3 relative">
            <div
              onClick={() => setShowQualityMenu(!showQualityMenu)}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-4 py-2.5 cursor-pointer hover:bg-white/15 transition-all"
            >
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-black font-bold text-xs">
                {getQualityDisplay()}
              </div>
              <div className="flex-1">
                <div className="text-white text-sm font-semibold">
                  {currentQuality === -1
                    ? "Auto Quality"
                    : `${getQualityMeta(qualityLevels[currentQuality].bitrate).label} Quality`}
                </div>
                <div className="text-white/50 text-xs">
                  {currentQuality === -1
                    ? "Best for your connection"
                    : getQualityMeta(qualityLevels[currentQuality].bitrate)
                        .desc}
                </div>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-white/50 transition-transform ${
                  showQualityMenu ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Quality Dropdown */}
            {showQualityMenu && (
              <div className="absolute bottom-full left-4 right-4 mb-2 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                <div
                  onClick={() => setQuality(-1)}
                  className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-white/5 transition-all ${
                    currentQuality === -1
                      ? "bg-green-500/10 border-l-4 border-green-500"
                      : ""
                  }`}
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full border-2 ${
                      currentQuality === -1
                        ? "border-green-500 bg-green-500"
                        : "border-white/30"
                    }`}
                  />
                  <div className="flex-1">
                    <div
                      className={`text-sm font-semibold ${currentQuality === -1 ? "text-green-500" : "text-white"}`}
                    >
                      Auto
                    </div>
                    <div className="text-white/40 text-xs">
                      Best for your connection
                    </div>
                  </div>
                  <div
                    className={`text-xs font-bold px-2 py-1 rounded ${currentQuality === -1 ? "bg-green-500/20 text-green-500" : "bg-white/5 text-white/40"}`}
                  >
                    AUTO
                  </div>
                </div>

                {qualityLevels
                  .map((level, index) => ({ ...level, index }))
                  .sort((a, b) => b.bitrate - a.bitrate)
                  .map((level) => {
                    const meta = getQualityMeta(level.bitrate);
                    return (
                      <div
                        key={level.index}
                        onClick={() => setQuality(level.index)}
                        className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-white/5 transition-all ${
                          currentQuality === level.index
                            ? "bg-green-500/10 border-l-4 border-green-500"
                            : ""
                        }`}
                      >
                        <div
                          className={`w-2.5 h-2.5 rounded-full border-2 ${
                            currentQuality === level.index
                              ? "border-green-500 bg-green-500"
                              : "border-white/30"
                          }`}
                        />
                        <div className="flex-1">
                          <div
                            className={`text-sm font-semibold ${currentQuality === level.index ? "text-green-500" : "text-white"}`}
                          >
                            {meta.label}
                          </div>
                          <div className="text-white/40 text-xs">
                            {meta.desc}
                          </div>
                        </div>
                        <div
                          className={`text-xs font-bold px-2 py-1 rounded ${currentQuality === level.index ? "bg-green-500/20 text-green-500" : "bg-white/5 text-white/40"}`}
                        >
                          {meta.icon}
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        )}

        {/* Playback Controls */}
        <div className="flex gap-6 items-center justify-center py-4 text-white">
          <SkipBack
            onClick={() => skip(-10)}
            className="w-5 h-5 cursor-pointer hover:text-green-400 transition-colors"
          />
          <div
            onClick={togglePlay}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-black" fill="black" />
            ) : (
              <Play className="w-6 h-6 text-black ml-0.5" fill="black" />
            )}
          </div>
          <SkipForward
            onClick={() => skip(10)}
            className="w-5 h-5 cursor-pointer hover:text-green-400 transition-colors"
          />
          <Heart
            onClick={() => setIsLiked(!isLiked)}
            className={`w-5 h-5 cursor-pointer transition-all ${
              isLiked
                ? "text-red-500 fill-red-500"
                : "hover:text-red-500 hover:fill-red-500"
            }`}
          />
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-2 px-4 pb-4">
          <input
            type="range"
            min="0"
            max="100"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="flex-1 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md hover:[&::-webkit-slider-thumb]:scale-110 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:shadow-md"
          />
          {isMuted || volume === 0 ? (
            <VolumeX
              onClick={toggleMute}
              className="w-5 h-5 text-white cursor-pointer hover:text-green-400 transition-colors"
            />
          ) : (
            <Volume2
              onClick={toggleMute}
              className="w-5 h-5 text-white cursor-pointer hover:text-green-400 transition-colors"
            />
          )}
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: transparent;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}

export default RightSide;
