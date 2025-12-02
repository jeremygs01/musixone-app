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
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    playing ? audio.pause() : audio.play();
    setPlaying(!playing);
  };

  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0,
      background: "#1a1a1f", borderTop: "1px solid #444",
      padding: "16px", display: "flex", justifyContent: "space-between",
      alignItems: "center", color: "white"
    }}>
      <div>
        <p style={{ fontWeight: "bold" }}>{track.title}</p>
        <p style={{ fontSize: "12px", opacity: 0.7 }}>{track.artist}</p>
      </div>

      <div style={{ width: "50%", textAlign: "center" }}>
        <input type="range" value={progress} onChange={() => {}} style={{ width: "100%" }}/>
        <button onClick={toggle} style={{
          marginTop: "8px", padding: "8px 20px",
          background: "green", borderRadius: "8px", border: "none"
        }}>
          {playing ? "Pause" : "Play"}
        </button>
      </div>

      <audio ref={audioRef} src={track.audioUrl} />
    </div>
  );
}
