import { useParams } from "react-router-dom";
import ArtistHeader from "../components/ArtistHeader";
import ArtistStats from "../components/ArtistStats";
import ArtistSongs from "../components/ArtistSongs";
import ArtistBio from "../components/ArtistBio";
import SocialLinks from "../components/SocialLinks";
import { useEffect, useState } from "react";

export default function ArtistProfile() {
  const { slug } = useParams();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const mock = {
      name: "Kehilyn Gómez",
      slug,
      banner: "/placeholders/placeholder_banner.jpg",
      photo: "/placeholders/placeholder_photo.jpg",
      bio: "Kehilyn Gómez es una artista emergente con estilo moderno Pop-Latin. Su música mezcla elementos electrónicos con ritmos latinos suaves.",
      country: "España",
      genres: ["Pop", "Latam"],
      socials: {
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/",
        tiktok: "https://tiktok.com/"
      },
      stats: { plays: 1245323, followers: 54234, monthly_listeners: 120000 },
      songs: [
        { id: "s1", title: "Die with a smile", cover: "/placeholders/placeholder_cover.jpg", audioUrl: "" },
        { id: "s2", title: "Night Run", cover: "/placeholders/placeholder_cover.jpg", audioUrl: "" },
        { id: "s3", title: "Sunrise", cover: "/placeholders/placeholder_cover.jpg", audioUrl: "" }
      ]
    };
    setTimeout(()=> setArtist(mock), 250);
  }, [slug]);

  if (!artist) return <div className="min-h-screen flex items-center justify-center text-white">Cargando perfil...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#070707] to-[#05060a] text-white">
      <ArtistHeader artist={artist} />
      <main className="max-w-6xl mx-auto px-4 md:px-8">
        <ArtistStats stats={artist.stats} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-2">
            <ArtistSongs songs={artist.songs} />
          </div>
          <aside className="space-y-6">
            <ArtistBio bio={artist.bio} genres={artist.genres} country={artist.country} />
            <SocialLinks socials={artist.socials} />
          </aside>
        </div>
      </main>
    </div>
  );
}
