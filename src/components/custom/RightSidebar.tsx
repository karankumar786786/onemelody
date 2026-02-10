import React from "react";

export function RightSidebar() {
  return (
    <div className="bg-[#5C3A3D] border-2 border-cyan-400 rounded-2xl p-6 m-3 h-[calc(100vh-7rem)] flex flex-col gap-4">
      {/* Song Cover Image */}
      <div className="bg-[#1a5f1a] border-2 border-yellow-400 rounded-xl p-4 h-40 flex items-center justify-center">
        <span className="text-yellow-400 text-sm">Song coverImage</span>
      </div>

      {/* Lyrics Section */}
      <div className="bg-[#1a5f1a] border-2 border-yellow-400 rounded-xl p-4 flex-1 overflow-y-auto">
        <span className="text-yellow-400 text-sm">Lyrics</span>
      </div>

      {/* Song Name */}
      <div className="text-yellow-400 text-sm text-center">Name</div>

      {/* Player */}
      <div className="bg-[#1a5f1a] border-2 border-yellow-400 rounded-xl p-4 h-20 flex items-center justify-center">
        <span className="text-yellow-400 text-sm">Player</span>
      </div>
    </div>
  );
}
