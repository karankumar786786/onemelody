"use client";

import { useEffect } from "react";
import { useAllSongsStore } from "@/Store/AllSongsStore";
import { useAllPlaylistStore } from "@/Store/AllPlaylistStore";
import { useAllArtistsStore } from "@/Store/AllArtistsStore";
import { useArtistSongsStore } from "@/Store/ArtistSongs";
import { useAllPlaylistSongsStore } from "@/Store/PlaylistSongs";
import { useAllUserPlaylistStore } from "@/Store/AllUserPlaylistStore";
import { useAllUserPlaylistSongsStore } from "@/Store/UserPlaylistSongs";
import { useUserFavouriteSongsStore } from "@/Store/UserFavouriteSongsStore";
import { useUserHistorySongsStore } from "@/Store/UserHistorySongsStore";
import { useUserStore } from "@/Store/UserStore";
import { Artist, Playlist, Song } from "@/types";

export function StoreInitializer() {
  const setSongs = useAllSongsStore((state) => state.setSongs);
  const setPlaylists = useAllPlaylistStore((state) => state.setPlaylists);
  const setArtists = useAllArtistsStore((state) => state.setArtists);
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    // Mock User
    setUser({
      id: "user_1",
      name: "John Doe",
      email: "john@example.com",
    });

    // Mock Artists
    const mockArtists: Artist[] = [
      {
        id: "artist_1",
        artistName: "Akshay Kumar",
        coverImageUrl:
          "https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/1770968250600-Screenshot+2026-02-12+at+11.55.19%E2%80%AFPM.png",
      },
      {
        id: "artist_2",
        artistName: "Priyanka Chopra",
        coverImageUrl:
          "https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/1770968250600-Screenshot+2026-02-12+at+11.55.19%E2%80%AFPM.png",
      },
      {
        id: "artist_3",
        artistName: "Udit Narayan",
        coverImageUrl:
          "https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/1770968250600-Screenshot+2026-02-12+at+11.55.19%E2%80%AFPM.png",
      },
    ];
    setArtists(mockArtists);

    // Mock Playlists
    const mockPlaylists: Playlist[] = [
      {
        id: "playlist_1",
        name: "90s Hits",
        count: 12,
        coverImageUrl:
          "https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/1770968250600-Screenshot+2026-02-12+at+11.55.19%E2%80%AFPM.png",
      },
      {
        id: "playlist_2",
        name: "Romantic Melodies",
        count: 8,
        coverImageUrl:
          "https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/1770968250600-Screenshot+2026-02-12+at+11.55.19%E2%80%AFPM.png",
      },
    ];
    setPlaylists(mockPlaylists);

    // Mock Songs
    const mockSongs: Song[] = [
      {
        id: "song_1",
        title: "Aayega Maza Ab Barsaat Ka",
        artist: "Akshay Kumar, Priyanka Chopra",
        coverImageUrl:
          "https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/1770968250600-Screenshot+2026-02-12+at+11.55.19%E2%80%AFPM.png",
        songBaseUrl:
          "https://musicstreamingprod.s3.ap-south-1.amazonaws.com/555cd279-546f-4833-8a4f-57662d46853b-hassena",
      },
      {
        id: "song_2",
        title: "Barsaat Ke Din Aaye",
        artist: "Udit Narayan, Alka Yagnik",
        coverImageUrl:
          "https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/1770968250600-Screenshot+2026-02-12+at+11.55.19%E2%80%AFPM.png",
        songBaseUrl:
          "https://musicstreamingprod.s3.ap-south-1.amazonaws.com/555cd279-546f-4833-8a4f-57662d46853b-hassena",
      },
    ];
    setSongs(mockSongs);

    // Mock Artist Songs
    const { setArtistSongs } = useArtistSongsStore.getState();
    setArtistSongs("artist_1", [mockSongs[0]]);
    setArtistSongs("artist_2", [mockSongs[1]]);

    // Mock User Playlists
    const setAllUserPlaylists =
      useAllUserPlaylistStore.getState().setUserPlaylists;
    const mockUserPlaylists: Playlist[] = [
      {
        id: "user_playlist_1",
        name: "My Favorites",
        count: 5,
        coverImageUrl:
          "https://musicstreamingtemprory.s3.ap-south-1.amazonaws.com/1770968250600-Screenshot+2026-02-12+at+11.55.19%E2%80%AFPM.png",
      },
    ];
    setAllUserPlaylists(mockUserPlaylists);

    const setUserPlaylistSongs =
      useAllUserPlaylistSongsStore.getState().setUserPlaylistSongs;
    setUserPlaylistSongs("user_playlist_1", [mockSongs[0]]);

    // Mock Favourites and History
    const setFavourites =
      useUserFavouriteSongsStore.getState().setFavouriteSongs;
    setFavourites([mockSongs[1]]);

    const setHistory = useUserHistorySongsStore.getState().setHistorySongs;
    setHistory([mockSongs[0]]);
  }, [setSongs, setPlaylists, setArtists, setUser]);

  return null;
}
