import { ArtistCard } from "@/components/custom/ArtistCard";
import { HeroCard } from "@/components/custom/HeroCard";
import { PlaylistCard } from "@/components/custom/PlaylistCard";
import { SongCard } from "@/components/custom/SongCard";

export default function Home() {
  return (
    <div className="p-4 space-y-6 bg-black">
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center">
        <HeroCard
          items={[
            {
              src: "https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/1770968250600-Screenshot+2026-02-12+at+11.55.19%E2%80%AFPM.png",
              songName: "Bohemian Rhapsody",
              songBaseUrl:
                "https://musicstreamingprod.s3.ap-south-1.amazonaws.com/Aayega-Maza-Ab-Barsaat-Ka--Andaaz---Akshay-Kumar---Priyanka-Chopra---Lara-Dutta---Romantic-Hindi--HD",
              songId: "1899",
            },
            {
              src: "https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/1770968250600-Screenshot+2026-02-12+at+11.55.19%E2%80%AFPM.png",
              songName: "Stairway to Heaven",
              songBaseUrl:
                "https://musicstreamingprod.s3.ap-south-1.amazonaws.com/Aayega-Maza-Ab-Barsaat-Ka--Andaaz---Akshay-Kumar---Priyanka-Chopra---Lara-Dutta---Romantic-Hindi--HD",
              songId: "1899",
            },
            {
              src: "https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/1770968250600-Screenshot+2026-02-12+at+11.55.19%E2%80%AFPM.png",
              songName: "Hotel California",
              songBaseUrl:
                "https://musicstreamingprod.s3.ap-south-1.amazonaws.com/Aayega-Maza-Ab-Barsaat-Ka--Andaaz---Akshay-Kumar---Priyanka-Chopra---Lara-Dutta---Romantic-Hindi--HD",
              songId: "1899",
            },
          ]}
        />
      </div>

      {/* Artists Section */}
      <div className="space-y-4">
        {/* <h2 className="text-xl font-bold px-1 tracking-tight">Artists</h2> */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 p-1">
          {[...Array(11)].map((_, index) => (
            <ArtistCard
              key={index}
              src="https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/1770968250600-Screenshot+2026-02-12+at+11.55.19%E2%80%AFPM.png"
              songBaseUrl="https://musicstreamingprod.s3.ap-south-1.amazonaws.com/Aayega-Maza-Ab-Barsaat-Ka--Andaaz---Akshay-Kumar---Priyanka-Chopra---Lara-Dutta---Romantic-Hindi--HD"
              artistId={`${index}`}
              songName="Uchiya Lambiya"
            />
          ))}
        </div>
      </div>

      {/* Playlist Section */}
      <div className="space-y-3">
        {/* <h2 className="text-xl font-semibold">Playlist</h2> */}
        <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2">
          {[...Array(11)].map((_, index) => (
            <div key={index}>
              <PlaylistCard
                playlistId={`${index}`}
                src="https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/1770968250600-Screenshot+2026-02-12+at+11.55.19%E2%80%AFPM.png"
                songName="uchiya lambiya"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Songs Grid Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold px-1 tracking-tight text-white">
          Suggested Songs
        </h2>

        {/* Grid Layout:
            - grid-cols-2 (mobile) to grid-cols-5 (large screens)
            - max-h-[500px] + overflow-y-auto creates the vertical scroll area
            - pr-2 prevents the scrollbar from overlapping cards
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 no-scrollbar lg:grid-cols-4 xl:grid-cols-4 gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
          {[...Array(20)].map((_, index) => (
            <div key={index} className="flex justify-center">
              <SongCard
                src="https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/1770968250600-Screenshot+2026-02-12+at+11.55.19%E2%80%AFPM.png"
                songBaseUrl="https://musicstreamingprod.s3.ap-south-1.amazonaws.com/Aayega-Maza-Ab-Barsaat-Ka--Andaaz---Akshay-Kumar---Priyanka-Chopra---Lara-Dutta---Romantic-Hindi--HD"
                songId={`${index}`}
                songName={`Song Title ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
