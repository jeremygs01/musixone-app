
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ color: 'white', padding: '40px' }}>
      <h1>MusixOne Home</h1>
      <p>Artist routing with slug activated.</p>

      <h3>Sample Artists:</h3>
      <ul>
        <li><Link to="/artist/kehilyn-gomez">Kehilyn Gomez</Link></li>
        <li><Link to="/artist/jere-music">Jere Music</Link></li>
      </ul>
    </div>
  );
}
