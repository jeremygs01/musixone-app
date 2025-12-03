
import { useParams } from "react-router-dom";

export default function ArtistProfile() {
  const { slug } = useParams();

  return (
    <div style={{ color:'white', padding:'40px' }}>
      <h1>Artist Profile</h1>
      <p>Slug: {slug}</p>

      <p>This page will load the artist's data dynamically later.</p>
    </div>
  );
}
