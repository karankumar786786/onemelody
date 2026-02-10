import React from "react";

export function Hero() {
  return (
    <div className="bg-linear-to-r from-orange-500 to-orange-600 border-2 border-cyan-400 rounded-2xl p-8 mb-6 h-64 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-700 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10">
        <h2 className="text-white text-4xl font-bold mb-2">Hero section</h2>
        <p className="text-orange-100 text-lg">Discover your favorite music</p>
      </div>
    </div>
  );
}
