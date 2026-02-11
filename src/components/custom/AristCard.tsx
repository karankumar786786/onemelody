export function ArtistCard({src, songName}: {src: string, songName: string}) {
  return (
    // Changed w-35 (non-standard) to w-32 and added aspect-square to ensure a perfect circle
    <div className="w-32 aspect-square group cursor-pointer">
      <div className="relative h-full w-full overflow-hidden rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">
        <img 
          src={src} 
          alt={songName}
          // rounded-full ensures the image itself clips correctly
          className="rounded-full w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay - also needs to be rounded-full if it has a background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Text Container */}
        <div className="absolute inset-0 flex items-center justify-center p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white font-medium text-xs text-center line-clamp-2 drop-shadow-lg">
            {songName}
          </p>
        </div>
      </div>
    </div>
  )
}