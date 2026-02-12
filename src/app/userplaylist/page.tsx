import PlaylistList from '@/components/custom/PlaylistList'
import React from 'react'

function Page() {
  return (
    // Fixed height (h-screen) + overflow-y-auto enables the scroll
    <div className="h-screen bg-black overflow-y-auto no-scrollbar">
      <div className="p-8">
        <h1 className="text-3xl font-bold text-white mb-6 tracking-tight">Your Playlists</h1>
        
        {/* List Container */}
        <div className="flex flex-col border-zinc-800">
          {/* Mocking 20 items to demonstrate scrolling */}
          {Array.from({ length: 20 }).map((_, index) => (
            <PlaylistList 
              key={index} 
              name={`My Awesome Playlist #${index + 1}`} 
              count={Math.floor(Math.random() * 100)} 
              src='https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/Screenshot+2026-02-12+at+12.32.36%E2%80%AFAM.png'
              playlistId={`${index}`}
            />
          ))}
          
          {/* Bottom padding so the last item isn't cut off */}
          <div className="h-24" />
        </div>
      </div>
    </div>
  )
}

export default Page