import TrackCard from "../components/TrackCard";
import Player from "../components/Player";
import { useEffect, useState } from "react";
import { fetchTracks } from "../api";

export default function HomeExact(){
  const [tracks, setTracks] = useState([]);
  const [now, setNow] = useState(null);

  useEffect(()=>{ fetchTracks().then(r=>{ if(r.ok) setTracks(r.data); }); },[]);

  return (
    <main className="max-w-6xl mx-auto p-6">
      <section className="bg-neutral-800 rounded-xl p-8 mb-8">
        <h1 className="text-5xl font-extrabold mb-3">One world.<br/>One sound.</h1>
        <p className="text-gray-300 mb-6">Sube tus canciones. Comparte tu talento.</p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-green-500 rounded-full text-neutral-900 font-semibold">Listen Free</button>
          <button className="px-6 py-3 bg-purple-600 rounded-full text-white font-semibold">Join MusixOne</button>
        </div>
      </section>

      <h2 className="text-2xl font-bold mb-4">Listen to 5 Free Tracks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tracks.map(t => <TrackCard key={t.id} track={t} onPlay={()=>{ setNow(t); }} />)}
      </div>

      <div className="fixed bottom-6 left-0 right-0 px-6">
        <Player track={now} />
      </div>
    </main>
  );
}
