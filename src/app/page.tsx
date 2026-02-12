import { ArtistCard } from "@/components/custom/ArtistCard";
import { CardImage } from "@/components/custom/Card";
import { HeroCard } from "@/components/custom/HeroCard";
import { PlaylistCard } from "@/components/custom/PlaylistCard";
import { SongCard } from "@/components/custom/SongCard";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-4 space-y-6 bg-black">
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center">
        <HeroCard
          items={[
            {
              src: "https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png",
              songName: "Bohemian Rhapsody",
            },
            {
              src: "https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png",
              songName: "Stairway to Heaven",
            },
            {
              src: "https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png",
              songName: "Hotel California",
            },
          ]}
        />
      </div>

      {/* Artists Section */}
      <div className="space-y-4">
        {/* <h2 className="text-xl font-bold px-1 tracking-tight">Artists</h2> */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 p-1">
          <ArtistCard
            src="https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/system-playlists-user_39QysGaWaslkGGJlmYOrHFreGO5-1770748000382-Screenshot+2026-02-10+at+11.23.02%E2%80%AFPM.png"
            songName="Uchiya Lambiya"
          />
          <ArtistCard
            src="https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png"
            songName="Arijit Singh"
          />
          <ArtistCard
            src="https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png"
            songName="Shreya Ghoshal"
          />
          <ArtistCard
            src="https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png"
            songName="Atif Aslam"
          />
          <ArtistCard
            src="https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png"
            songName="Jubin Nautiyal"
          />
          <ArtistCard
            src="https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png"
            songName="Pritam"
          />
          <ArtistCard
            src="https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png"
            songName="Badshah"
          />
        </div>
      </div>

      {/* Playlist Section */}
      <div className="space-y-3">
        {/* <h2 className="text-xl font-semibold">Playlist</h2> */}
        <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2">
          {[...Array(11)].map((_, index) => (
            <div key={index}>
              <PlaylistCard
                src="https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png"
                songName="uchiya lambiya"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Songs Grid Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold px-1 tracking-tight text-white">Suggested Songs</h2>
        
        {/* Grid Layout:
            - grid-cols-2 (mobile) to grid-cols-5 (large screens)
            - max-h-[500px] + overflow-y-auto creates the vertical scroll area
            - pr-2 prevents the scrollbar from overlapping cards
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 no-scrollbar lg:grid-cols-4 xl:grid-cols-4 gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
          {[...Array(20)].map((_, index) => (
            <div key={index} className="flex justify-center">
              <SongCard
                src="https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png"
                songName={`Song Title ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
