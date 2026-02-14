"use server";
import { client } from "@/lib/supabase";

export async function listSongsByArtistId(artistId: string) {
    try {
        const { data, error } = await client
            .from("songs")
            .select(`
                id,
                title,
                album,
                duration,
                coverImageUrl,
                songUrl,
                language,
                artist_stage_name,
                created_at
            `)
            .eq('id', artistId)
            .order('created_at', { ascending: false });

        if (error) {
            console.error("Error listing songs by artist:", error);
            return [];
        }

        return data || [];
    } catch (error) {
        console.error("Unexpected error listing songs by artist:", error);
        return [];
    }
}
