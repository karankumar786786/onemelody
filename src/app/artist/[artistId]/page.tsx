import SongList from '@/components/custom/SongList';
import React from 'react';
import { Play, Shuffle } from 'lucide-react';

function Artist() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Header Section */}
      <div className="relative h-[40vh] w-full overflow-hidden group">
        <img 
          src="https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png" 
          alt="Artist photo" 
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        {/* Artist Info Overlay */}
        <div className="absolute bottom-0 left-0 p-8 w-full">
          <div className="flex items-center gap-4">
             <button className="bg-green-500 hover:bg-white text-black p-4 rounded-full transition-transform active:scale-95">
                <Play fill="black" size={24} />
             </button>
             <button className="border border-zinc-700 hover:border-white p-3 rounded-full transition-colors">
                <Shuffle size={20} />
             </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-8 py-8 bg-gradient-to-b from-zinc-900/50 to-black">
        <div className="max-w-4xl">
          <h1 className="text-2xl font-bold mb-4 text-zinc-300">Artist name</h1>
          <h2 className="text-md font-bold mb-4 text-zinc-300">About the Artist</h2>
          <p className="text-zinc-400 leading-relaxed max-w-2xl text-sm md:text-base">
            This is the bio of the artist. A masterful storyteller blending modern 
            rhythms with soulful melodies. Known for their unique sound and 
            captivating live performances.
          </p>
        </div>

        <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Popular Tracks</h2>
            <SongList />
        </div>
      </div>
    </div>
  );
}

export default Artist;