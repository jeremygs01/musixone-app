import TrackCard from "../components/TrackCard";
import Player from "../components/Player";
import { useEffect, useState } from "react";
import { fetchTracks } from "../api";

export default function HomePremium(){
  const [tracks, setTracks] = useState([]);
  const [now, setNow] = useState(null);

  useEffect(()=>{ fetchTracks().then(r=>{ if(r.ok) setTracks(r.data); }); },[]);

  return (
    <main className="max-w-6xl mx-auto p-6">
      <section className="relative bg-gradient-to-b from-neutral-900 via-neutral-800 to-black rounded-2xl p-10 mb-8 overflow-hidden">
        <div className="absolute -right-32 -top-20 opacity-10 w-96 h-96 rounded-full bg-gradient-to-r from-purple-600 to-green-400 blur-3xl"></div>
        <h1 className="text-6xl font-extrabold mb-4">One world.<br/>One sound.</h1>
        <p className="text-gray-300 mb-6 max-w-xl">Sube tus canciones. Comparte tu talento. Diseño premium con efectos y microinteracciones.</p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-green-400 rounded-full text-neutral-900 font-semibold shadow-lg">Listen Free</button>
          <button className="px-6 py-3 bg-purple-600 rounded-full text-white font-semibold shadow-lg">Join MusixOne</button>
        </div>
      </section>

      <h2 className="text-2xl font-bold mb-4">Listen to 5 Free Tracks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map(t => <TrackCard key={t.id} track={t} onPlay={()=>{ setNow(t); }} premiumStyle />)}
      </div>

      <div className="fixed bottom-6 left-0 right-0 px-6">
        <Player track={now} premium />
      </div>
    </main>
  );
}
