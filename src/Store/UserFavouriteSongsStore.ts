import { create } from 'zustand';
import { Song } from '@/types';

interface UserFavouriteState {
    favouriteSongs: Song[];
    setFavouriteSongs: (songs: Song[]) => void;
    toggleFavourite: (song: Song) => void;
}

export const useUserFavouriteSongsStore = create<UserFavouriteState>((set) => ({
    favouriteSongs: [],
    setFavouriteSongs: (favouriteSongs) => set({ favouriteSongs }),
    toggleFavourite: (song) => set((state) => {
        const isFavourite = state.favouriteSongs.some((s) => s.id === song.id);
        if (isFavourite) {
            return { favouriteSongs: state.favouriteSongs.filter((s) => s.id !== song.id) };
        }
        return { favouriteSongs: [...state.favouriteSongs, song] };
    }),
}));
