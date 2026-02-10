import { UserButton } from "@clerk/nextjs";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-[#5C3A3D] border-2 border-cyan-400 rounded-2xl mx-3 mt-3 h-[8vh] flex justify-between items-center px-8">
      {/* Logo */}
      <div className="text-orange-400 text-xl font-bold">Log</div>

      {/* Search Box */}
      <div className="flex-1 max-w-2xl mx-8">
        <input
          type="text"
          placeholder="searchbox"
          className="w-full bg-[#4A2F32] border border-cyan-400/30 rounded-lg px-4 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
        />
      </div>

      {/* User Logo */}
      <div className="text-orange-400 text-sm">
        <UserButton />
      </div>
    </nav>
  );
}

export { Navbar };
