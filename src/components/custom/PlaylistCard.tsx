import Link from "next/link";

export function PlaylistCard({
  src,
  songName,
  playlistId,
}: {
  src: string;
  songName: string;
  playlistId: string;
}) {
  return (
    // Standardized width/height: w-40 (10rem) and h-48 (12rem) work great for playlists
    <div className="w-40 group cursor-pointer">
      <Link href={`playlist/${playlistId}`}>
        <div className="relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300">
          <img
            src={src}
            alt={songName}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />

          {/* Overlay: Darkens slightly on hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            {/* Play Button Icon (Optional but recommended for Playlists) */}
            <div className="bg-green-500 rounded-full p-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
              <svg
                className="w-6 h-6 text-white fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Playlist Info: Usually looks better outside the image for readability */}
        <div className="mt-3">
          <h3 className="text-white font-semibold text-sm truncate leading-tight">
            {songName}
          </h3>
          <p className="text-zinc-400 text-xs mt-1 line-clamp-1">
            Playlist • Updated today
          </p>
        </div>
      </Link>
    </div>
  );
}
