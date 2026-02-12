import React from 'react'
import { CheckCircle2 } from 'lucide-react'

interface ArtistProps {
  name: string;
  src: string;
  bio?: string;
}

function ArtistList({ name, src, bio = "Artist • Verified" }: ArtistProps) {
  return (
    // Container: flex-row, larger padding (p-5), and rounded corners
    <div className="group flex items-center gap-6 p-5 rounded-xl hover:bg-zinc-800/40 transition-all duration-300 cursor-pointer border-b border-zinc-900/50">
      
      {/* Left Side: Circular Artist Image (Scaled up 30%) */}
      <div className="relative h-24 w-24 flex-shrink-0 shadow-2xl">
        <img 
          src={src} 
          alt={name}
          className="rounded-full object-cover w-full h-full border-2 border-transparent group-hover:border-green-500 transition-all duration-500"
        />
      </div>

      {/* Right Side: Artist Info */}
      <div className="flex flex-col justify-center min-w-0 space-y-1.5">
        <div className="flex items-center gap-2">
          <h3 className="text-white font-bold text-xl truncate tracking-tight group-hover:text-green-400 transition-colors">
            {name}
          </h3>
        </div>

        {/* Bio / Description */}
        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2 max-w-md group-hover:text-zinc-300 transition-colors">
          {bio}
        </p>
      </div>
    </div>
  )
}

export default ArtistList