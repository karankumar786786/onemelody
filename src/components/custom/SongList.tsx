import React from "react";
import { Clock3, Play } from "lucide-react";

interface Song {
  id: string | number;
  title: string;
  duration: string;
  coverImageUrl: string;
}

function SongList({ songs }: { songs: Song[] }) {
  return (
    <div className="w-full select-none">
      {/* Table Header */}
      <div className="grid grid-cols-[16px_48px_1fr_80px] gap-4 px-4 py-2 border-b border-zinc-800/50 text-zinc-500 text-xs uppercase tracking-wider mb-2">
        <div className="flex justify-center">#</div>
        <div>{/* Space for Image */}</div>
        <div>Title</div>
        <div className="flex justify-end">
          <Clock3 size={16} />
        </div>
      </div>

      {/* Song Rows */}
      <div className="flex flex-col space-y-1">
        {songs.map((song, index) => (
          <div
            key={song.id}
            className="grid grid-cols-[16px_48px_1fr_80px] gap-4 px-4 py-2 rounded-md hover:bg-white/10 group transition-all cursor-pointer items-center"
          >
            {/* Number / Play Toggle */}
            <div className="flex items-center justify-center text-zinc-500 text-sm">
              <span className="group-hover:hidden">{index + 1}</span>
              <Play
                className="hidden group-hover:block text-white fill-white"
                size={14}
              />
            </div>

            {/* Cover Image */}
            <div className="relative w-10 h-10">
              <img
                src={song.coverImageUrl}
                alt={song.title}
                className="rounded object-cover w-full h-full shadow-lg"
              />
            </div>

            {/* Title & Artist */}
            <div className="flex flex-col min-w-0">
              <span className="text-white font-medium text-sm truncate group-hover:text-green-400 transition-colors">
                {song.title}
              </span>
              <span className="text-zinc-400 text-xs truncate">ArtistName</span>
            </div>

            {/* Duration */}
            <div className="text-zinc-400 text-sm flex justify-end font-mono">
              {song.duration}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SongList;
