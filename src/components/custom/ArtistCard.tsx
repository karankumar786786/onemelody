export function ArtistCard({
  src,
  songName,
}: {
  src: string;
  songName: string;
}) {
  return (
    <div className="shrink-0 group cursor-pointer flex flex-col items-center w-24 sm:w-32">
      {/* Container with forced square dimensions and rounded-full */}
      <div className="relative w-full aspect-square overflow-hidden rounded-full shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:ring-2 ring-zinc-700 bg-zinc-800">
        <img
          src={src}
          alt={songName}
          className="h-full w-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
        />

        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Label section below the circle */}
      <div className="mt-3 text-center w-full px-2">
        <p className="text-white font-medium text-xs sm:text-sm truncate">
          {songName}
        </p>
        <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-1">
          Artist
        </p>
      </div>
    </div>
  );
}
