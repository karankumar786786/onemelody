import ArtistList from '@/components/custom/AtistList';
import React from 'react'

function Page() {
  const artistData = [
    { name: "The Weeknd", bio: "Canadian singer-songwriter known for his sonic versatility and dark lyricism." },
    { name: "Arctic Monkeys", bio: "English rock band formed in Sheffield in 2002. Leading the indie rock revival." },
    { name: "Daft Punk", bio: "Legendary electronic music duo known for their influence on house and synth-pop." },
    { name: "Lana Del Rey", bio: "Known for her cinematic quality and exploration of tragic romance and melancholia." },
  ];

  return (
    <div className="h-screen bg-black overflow-y-auto no-scrollbar">
      <div className="p-8 max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-black text-white tracking-tighter">Top Artists</h1>
          <span className="text-zinc-500 font-medium">{artistData.length} Results</span>
        </div>

        {/* List Layout (One artist per row) */}
        <div className="flex flex-col space-y-2">
          {artistData.map((artist, index) => (
            <ArtistList
              key={index} 
              name={artist.name} 
              bio={artist.bio}
              src="https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png"
              artistId={`${index}`} 
            />
          ))}
        </div>
        
        {/* Bottom Spacer */}
        <div className="h-32" />
      </div>
    </div>
  )
}

export default Page