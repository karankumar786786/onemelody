import { Hero } from "@/components/custom/Hero";
import { Card } from "@/components/custom/Card";

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <Hero />

      {/* Artists Section */}
      <section className="bg-[#2C5F7C] border-2 border-cyan-400 rounded-2xl p-6">
        <h3 className="text-yellow-400 text-lg font-semibold mb-4">Artistts</h3>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          <Card title="Artist 1" subtitle="Genre" />
          <Card title="Artist 2" subtitle="Genre" />
          <Card title="Artist 3" subtitle="Genre" />
          <Card title="Artist 4" subtitle="Genre" />
          <Card title="Artist 5" subtitle="Genre" />
        </div>
      </section>

      {/* Playlists Section */}
      <section className="bg-[#2C5F7C] border-2 border-cyan-400 rounded-2xl p-6">
        <h3 className="text-yellow-400 text-lg font-semibold mb-4">
          Playlists
        </h3>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          <Card title="Playlist 1" subtitle="50 songs" />
          <Card title="Playlist 2" subtitle="32 songs" />
          <Card title="Playlist 3" subtitle="45 songs" />
          <Card title="Playlist 4" subtitle="28 songs" />
          <Card title="Playlist 5" subtitle="67 songs" />
        </div>
      </section>

      {/* Songs Section */}
      <section className="bg-[#2C5F7C] border-2 border-cyan-400 rounded-2xl p-6">
        <h3 className="text-yellow-400 text-lg font-semibold mb-4">Songs</h3>
        <div className="grid grid-cols-4 gap-4">
          <Card title="Song 1" subtitle="Artist Name" />
          <Card title="Song 2" subtitle="Artist Name" />
          <Card title="Song 3" subtitle="Artist Name" />
          <Card title="Song 4" subtitle="Artist Name" />
          <Card title="Song 5" subtitle="Artist Name" />
          <Card title="Song 6" subtitle="Artist Name" />
          <Card title="Song 7" subtitle="Artist Name" />
          <Card title="Song 8" subtitle="Artist Name" />
          <Card title="Song 9" subtitle="Artist Name" />
          <Card title="Song 10" subtitle="Artist Name" />
          <Card title="Song 11" subtitle="Artist Name" />
          <Card title="Song 12" subtitle="Artist Name" />
        </div>
      </section>
    </div>
  );
}
