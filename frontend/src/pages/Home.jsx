import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Trending from "../components/Trending";
import ExploreCarousel from "../components/ExploreCarousel";
import Featured from "../components/Featured";

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [explore, setExplore] = useState([]);

  useEffect(() => {
    const mockTracks = [
      { id: "t1", title: "Die with a smile", artist: "Kehilyn Gómez", cover: "/placeholders/placeholder_cover.jpg", duration: "3:24", slug: "kehilyn-gomez" },
      { id: "t2", title: "Night Run", artist: "Jere", cover: "/placeholders/placeholder_cover.jpg", duration: "3:24", slug: "jere" },
      { id: "t3", title: "Sunrise", artist: "Kehilyn Gómez", cover: "/placeholders/placeholder_cover.jpg", duration: "3:24", slug: "kehilyn-gomez" },
      { id: "t4", title: "Ocean Drive", artist: "Another", cover: "/placeholders/placeholder_cover.jpg", duration: "2:58", slug: "another" },
    ];
    setTrending(mockTracks.slice(0,3));
    setFeatured(mockTracks.slice(0,2));
    setExplore(mockTracks);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#070707] to-[#05060a] text-white">
      <Hero />
      <main className="max-w-6xl mx-auto px-4 md:px-8 space-y-10 mt-8">
        <Trending tracks={trending} />
        <Featured items={featured} />
        <ExploreCarousel items={explore} title="Explorar nuevos lanzamientos" />
      </main>
    </div>
  );
}
