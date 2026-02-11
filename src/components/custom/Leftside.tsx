import React from "react";
import Link from "next/link";
import { House, History, Heart, Music, ListMusic } from "lucide-react";

function Leftside() {
  const menuItems = [
    {
      label: "Home",
      icon: House,
      href: "/",
    },
    {
      label: "Artist",
      icon: Music, // Using Music icon for Artist as a placeholder
      href: "/artist",
    },
    {
      label: "Playlist",
      icon: ListMusic, // Using ListMusic for Playlist
      href: "/playlist",
    },
    {
      label: "Favourites",
      icon: Heart,
      href: "/favourites",
    },
    {
      label: "History",
      icon: History,
      href: "/history",
    },
  ];

  return (
    <div className=" h-full w-[17%]  border-zinc-800 flex flex-col">
      <div className="flex flex-col p-4 h-full">
        <div className="mb-8 mt-4 px-4">
          {/* Find a better place for Username or keep it if intended */}
          <h2 className="text-2xl font-bold tracking-tight">Music App</h2>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-4 px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors group"
            >
              <item.icon className="w-6 h-6 group-hover:scale-105 transition-transform" />
              <span className="font-medium text-lg">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Leftside;
