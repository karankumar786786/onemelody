"use client";

import SongHeader from "@/components/custom/SongList";
import SongItem from "@/components/custom/SongItem";
import React from "react";
import { useParams } from "next/navigation";
import { useAllUserPlaylistSongsStore } from "@/Store/UserPlaylistSongs";
import { useAllUserPlaylistStore } from "@/Store/AllUserPlaylistStore";
import { useShallow } from "zustand/react/shallow";

function Playlist() {
  const { userplaylistId } = useParams();
  const userPlaylistSongs = useAllUserPlaylistSongsStore(
    useShallow(
      (state) => state.userPlaylistSongs[userplaylistId as string] || [],
    ),
  );
  const userPlaylists = useAllUserPlaylistStore((state) => state.userPlaylists);
  const playlist = userPlaylists.find((p) => p.id === userplaylistId);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Content Section */}
      <div className="px-8 py-8 ">
        <div className="max-w-4xl">
          <h1 className="text-2xl font-bold mb-4 text-zinc-300">
            {playlist?.name || "User Playlist"}
          </h1>
        </div>

        <div className="mt-12">
          <div className="w-full select-none">
            <SongHeader />
            <div className="flex flex-col space-y-1">
              {userPlaylistSongs.map((song, index) => (
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
