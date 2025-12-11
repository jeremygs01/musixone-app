import { useState, useRef, useEffect } from "react";

export default function Player({ track }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const update = () => setProgress((audio.currentTime / audio.duration) * 100 || 0);
    audio.addEventListener("timeupdate", update);
    return () => audio.removeEventListener("timeupdate", update);
  }, [track]);

  useEffect(() => {
    // when track changes, reset progress/play
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setProgress(0);
    setPlaying(false);
  }, [track]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) audio.pause();
    else audio.play();
    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0f0f12] border-t border-gray-800 p-4 flex items-center gap-4">
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 bg-gray-800 rounded-md" />
        <div>
          <div className="font-semibold">{track.title}</div>
          <div className="text-sm text-gray-400">{track.artist}</div>
        </div>
      </div>

      <div className="flex-1">
        <input className="w-full" type="range" value={progress} onChange={()=>{}} />
        <div className="flex justify-center gap-4 mt-2">
          <button className="px-3 py-1 bg-white/5 rounded" onClick={toggle}>{playing ? 'Pause' : 'Play'}</button>
        </div>
      </div>

      <audio ref={audioRef} src={track.audioUrl} />
    </div>
  );
}
