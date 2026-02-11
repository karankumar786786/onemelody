"use client";
import { ArtistCard } from "@/components/custom/AristCard";
import { CardImage } from "@/components/custom/Card";
import { HeroCard } from "@/components/custom/HeroCard";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-4 space-y-6">
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
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Artists</h2>
        <div className="flex no-scrollbar gap-6">

        
        <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2">
          <ArtistCard
            src="https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png"
            songName="uchiya lambiya"
          />
        </div>
        <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2">
          <ArtistCard
            src="https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png"
            songName="uchiya lambiya"
          />
        </div>
        <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2">
          <ArtistCard
            src="https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png"
            songName="uchiya lambiya"
          />
        </div>
        <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2">
          <ArtistCard
            src="https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png"
            songName="uchiya lambiya"
          />
        </div>
        <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2">
          <ArtistCard
            src="https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png"
            songName="uchiya lambiya"
          />
        </div>
        <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2">
          <ArtistCard
            src="https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png"
            songName="uchiya lambiya"
          />
        </div>
        <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2">
          <ArtistCard
            src="https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png"
            songName="uchiya lambiya"
          />
        </div>
        </div>
      </div>

      {/* Playlist Section */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Playlist</h2>
        <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2">
          {[...Array(11)].map((_, index) => (
            <div key={index}>
              <CardImage
                src="https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png"
                songName="uchiya lambiya"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}