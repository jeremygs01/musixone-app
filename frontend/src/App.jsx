import Player from "./components/Player";

export default function App() {
  const track = {
    title: "Die With a Smile",
    artist: "Kehily Gomez",
    audioUrl:
      "https://qllcpbfjxuccecptwyuo.supabase.co/storage/v1/object/public/tracks/Die%20with%20a%20smile%20-%20Kehily%20Gomez.mp3",
  };

  return (
    <div style={{ minHeight: "100vh", background: "black", color: "white", paddingTop: "80px" }}>
      <h1 style={{ textAlign: "center", fontSize: "30px" }}>MusixOne Frontend Running ✔</h1>
      <Player track={track} />
    </div>
  );
}
