import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import FreeTracks from "./components/FreeTracks";
import ExactSection from "./components/ExactSection";
import Footer from "./components/Footer";
import Player from "./components/Player";

export default function App() {
  // sample track for player (connected to your Supabase track)
  const initialTrack = {
    id: 1,
    title: "Die With a Smile",
    artist: "Kehily Gomez",
    audioUrl:
      "https://qllcpbfjxuccecptwyuo.supabase.co/storage/v1/object/public/tracks/Die%20with%20a%20smile%20-%20Kehily%20Gomez.mp3",
    coverUrl: null
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#05050a] to-[#071018] text-white">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Trending />
        <FreeTracks />
        <ExactSection />
      </main>
      <Footer />
      <Player track={initialTrack} />
    </div>
  );
}
