import SongHeader from "@/components/custom/SongList";
import SongItem from "@/components/custom/SongItem";
import React from "react";

function Playlist() {
  const songs = [
    {
      id: 1,
      title: "Midnight City",
      duration: "3:45",
      coverImageUrl:
        "https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png",
         songBaseUrl:"https://musicstreamingprod.s3.ap-south-1.amazonaws.com/Aayega-Maza-Ab-Barsaat-Ka--Andaaz---Akshay-Kumar---Priyanka-Chopra---Lara-Dutta---Romantic-Hindi--HD",
        songId:"1234"
    },
    {
      id: 2,
      title: "Electric Feel",
      duration: "4:12",
      coverImageUrl:
        "https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png",
         songBaseUrl:"https://musicstreamingprod.s3.ap-south-1.amazonaws.com/Aayega-Maza-Ab-Barsaat-Ka--Andaaz---Akshay-Kumar---Priyanka-Chopra---Lara-Dutta---Romantic-Hindi--HD",
        songId:"1234"
    },
    {
      id: 3,
      title: "Starlight",
      duration: "3:20",
      coverImageUrl:
        "https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png",
         songBaseUrl:"https://musicstreamingprod.s3.ap-south-1.amazonaws.com/Aayega-Maza-Ab-Barsaat-Ka--Andaaz---Akshay-Kumar---Priyanka-Chopra---Lara-Dutta---Romantic-Hindi--HD",
        songId:"1234"
    },
    {
      id: 4,
      title: "The Weekend",
      duration: "2:58",
      coverImageUrl:
        "https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png",
         songBaseUrl:"https://musicstreamingprod.s3.ap-south-1.amazonaws.com/Aayega-Maza-Ab-Barsaat-Ka--Andaaz---Akshay-Kumar---Priyanka-Chopra---Lara-Dutta---Romantic-Hindi--HD",
        songId:"1234"
    },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Content Section */}
      <div className="px-8 py-8 ">
        <div className="max-w-4xl">
          <h1 className="text-2xl font-bold mb-4 text-zinc-300">History</h1>
        </div>

        <div className="mt-12">
          <div className="w-full select-none">
            <SongHeader />
            <div className="flex flex-col space-y-1">
              {songs.map((song, index) => (
                <SongItem key={song.id} song={song} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playlist;
