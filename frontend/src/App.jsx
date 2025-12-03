
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArtistProfile from "./pages/ArtistProfile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artist/:slug" element={<ArtistProfile />} />
    </Routes>
  );
}
