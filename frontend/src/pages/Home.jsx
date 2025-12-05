import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import TrendingSection from "../components/TrendingSection";
import ExploreSection from "../components/ExploreSection";

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    // MOCK PROFESIONAL (luego lo cambiaremos por Supabase)
    const mockTracks = [
      {
        id: "1",
        title: "Die With a Smile",
        artist: "Kehilyn Gómez",
        cover: "/placeholders/placeholder_cover.jpg",
      },
      {
        id: "2",
        title: "Night Run",
        artist: "Jere",
        cover: "/placeholders/placeholder_cover.jpg",
      },
      {
        id: "3",
        title: "Ocean Drive",
        artist: "Another",
        cover: "/placeholders/placeholder_cover.jpg",
      },
    ];

    const mockArtists = [
      {
        id: "a1",
        name: "Kehilyn Gómez",
        slug: "kehilyn-gomez",
        genre: "Pop",
        avatar: "/placeholders/placeholder_avatar.jpg",
      },
      {
        id: "a2",
        name: "Jere",
        slug: "jere",
        genre: "Urbano",
        avatar: "/placeholders/placeholder_avatar.jpg",
      },
      {
        id: "a3",
        name: "Another",
        slug: "another",
        genre: "Electrónica",
        avatar: "/placeholders/placeholder_avatar.jpg",
      },
    ];

    setTrending(mockTracks);
    setArtists(mockArtists);
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
