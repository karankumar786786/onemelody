"use client";
import Link from "next/link";
import {
  House,
  History,
  Heart,
  Music,
  ListMusic,
  PlusSquare,
} from "lucide-react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "../ui/popover";
import { Field, FieldGroup } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function Leftside() {
  const { user, isLoaded } = useUser();

  const menuItems = [
    { label: "Home", icon: House, href: "/" },
    { label: "Artist", icon: Music, href: "/artist" },
    { label: "Playlist", icon: ListMusic, href: "/playlist" },
    { label: "Favourites", icon: Heart, href: "/favourites" },
    { label: "History", icon: History, href: "/history" },
  ];

  // Mock data - replace with your actual DB fetch later
  const userPlaylists = [
    { id: 1, name: "Chill Lo-fi Beats" },
    { id: 2, name: "Workout Energy" },
    { id: 3, name: "Late Night Drive" },
    { id: 4, name: "Coding Focus" },
  ];

  return (
    <div className="h-full w-[17%]  border-zinc-800 flex flex-col bg-black">
      {/* Logo and Brand Name */}
      <div className="flex items-center gap-3 px-6 py-6">
        <Image
          src={"/image.png"}
          width={40}
          height={40}
          alt="One Melody Logo"
        />
        <div className="text-lg font-bold tracking-tighter text-white">
          ONE MELODY
        </div>
      </div>

      <div className="flex flex-col px-3 h-full overflow-y-auto">
        {/* User Greeting */}
        <div className="mb-6 px-3">
          <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mb-1">
            Welcome back,
          </p>
          <h2 className="text-lg font-semibold text-white truncate">
            {user?.fullName || "Guest"}
          </h2>
        </div>

        {/* Main Navigation */}
        <nav className="space-y-1 mb-8">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-4 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-md transition-all group"
            >
              <item.icon className="w-5 h-5 group-hover:text-white transition-colors" />
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* User Playlists Section */}
        <div className="flex flex-col flex-1">
          <div className="flex items-center justify-between px-3 mb-4">
            <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              Your Playlists
            </h3>
            <Popover>
              <PopoverTrigger asChild>
                <PlusSquare className="w-4 h-4 text-zinc-500 hover:text-white cursor-pointer transition-colors" />
              </PopoverTrigger>
              <PopoverContent className="w-80" align="start">
                <PopoverHeader>
                  <PopoverTitle>Create your playlist</PopoverTitle>
                  <PopoverDescription>
                    For uninturupted favourite songs
                  </PopoverDescription>
                </PopoverHeader>
                <form
                  action="submit"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <FieldGroup className="gap-4">
                    <Field>playlist name</Field>
                    <Input />
                    <Button>Submit</Button>
                  </FieldGroup>
                </form>
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-1 overflow-y-auto max-h-[40vh] scrollbar-hide">
            {userPlaylists.map((playlist) => (
              <Link
                key={playlist.id}
                href={`/playlist/${playlist.id}`}
                className="block px-3 py-1.5 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-md transition-colors truncate"
              >
                {playlist.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftside;
