import { useEffect, useRef, useState } from "react";

export default function Player({ track, premium }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!track) return;
    if (!audioRef.current) return;
    audioRef.current.src = track.url;
    audioRef.current.play().catch(()=>{});
    setPlaying(true);
  }, [track]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) { audioRef.current.pause(); setPlaying(false); }
    else { audioRef.current.play(); setPlaying(true); }
  };

  return (
    <div className={"max-w-6xl mx-auto bg-neutral-800 p-3 rounded-xl shadow "+(premium ? 'ring-1 ring-purple-700' : '')}>
      <audio ref={audioRef} />
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold">{track?.title || 'No track selected'}</div>
          <div className="text-sm text-gray-400">{track?.artist || ''}</div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={toggle} className="px-4 py-2 bg-indigo-600 rounded text-white">{playing ? 'Pause' : 'Play'}</button>
        </div>
      </div>
    </div>
  );
}
