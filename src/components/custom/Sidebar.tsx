import React from "react";
import Link from "next/link";

export function Sidebar() {
  return (
    <div className="bg-[#5C3A3D] border-2 border-cyan-400 rounded-2xl p-6 m-3 h-[calc(100vh-7rem)]">
      {/* Username Section */}
      <div className="text-gray-300 text-lg font-semibold mb-6 pb-4 border-b border-cyan-400/30">
        Username
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-3 mb-8">
        <Link
          href="/"
          className="block text-gray-300 hover:text-yellow-400 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/artist"
          className="block text-gray-300 hover:text-yellow-400 transition-colors"
        >
          Artist
        </Link>
        <Link
          href="/playlists"
          className="block text-gray-300 hover:text-yellow-400 transition-colors"
        >
          Playlists
        </Link>
        <Link
          href="/favourites"
          className="block text-gray-300 hover:text-yellow-400 transition-colors"
        >
          Favourites
        </Link>
      </nav>

      {/* Your Playlists Section */}
      <div className="mt-8">
        <h3 className="text-yellow-400 text-sm font-semibold mb-4">
          your Playlists
        </h3>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li className="hover:text-gray-300 cursor-pointer transition-colors">
            Playlist 1
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition-colors">
            Playlist 2
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition-colors">
            Playlist 3
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition-colors">
            ....so on
          </li>
        </ul>
      </div>
    </div>
  );
}
