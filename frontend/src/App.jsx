import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArtistProfile from "./pages/ArtistProfile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist/:slug" element={<ArtistProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

