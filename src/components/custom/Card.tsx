import React from "react";

interface CardProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
}

export function Card({
  title = "Item",
  subtitle = "Artist",
  imageUrl,
}: CardProps) {
  return (
    <div className="bg-[#5C3A3D] border-2 border-cyan-400/50 rounded-xl p-3 hover:border-cyan-400 transition-all hover:scale-105 cursor-pointer min-w-[140px]">
      {/* Card Image */}
      <div className="bg-[#4A2F32] rounded-lg aspect-square mb-3 flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-orange-500/20 to-orange-700/20"></div>
        )}
      </div>

      {/* Card Info */}
      <div className="text-sm">
        <h4 className="text-white font-medium truncate">{title}</h4>
        <p className="text-gray-400 text-xs truncate">{subtitle}</p>
      </div>
    </div>
  );
}
