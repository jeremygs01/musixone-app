import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import TrendingSection from "../components/TrendingSection";
import ExploreSection from "../components/ExploreSection";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const { data: tracks, error: trackError } = await supabase
        .from("tracks")
        .select(`
          id,
          title,
          cover,
          views,
          artists (
            name
          )
        `)
        .order("views", { ascending: false })
        .limit(10);

      const { data: artists, error: artistError } = await supabase
        .from("artists")
        .select("*")
        .limit(12);

      if (trackError) console.error("Tracks error:", trackError);
      if (artistError) console.error("Artists error:", artistError);

      setTrending(
        tracks?.map(t => ({
          id: t.id,
          title: t.title,
          artist: t.artists?.name,
          cover: t.cover
        })) || []
      );

      setArtists(artists || []);
    };

    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#070707] to-[#05060a] text-white">
      <Hero />

      <main className="max-w-6xl mx-auto px-4 md:px-8 mt-10 space-y-14">
        <TrendingSection tracks={trending} />
        <ExploreSection artists={artists} />
      </main>
    </div>
  );
}