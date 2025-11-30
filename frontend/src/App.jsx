import { useEffect, useState } from "react";

export default function App() {
  const [backendData, setBackendData] = useState(null);

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}/`)
      .then((res) => res.json())
      .then((data) => setBackendData(data))
      .catch((err) => {
        console.error("ERROR:", err);
        setBackendData({ ok: false, error: "No se pudo conectar al backend" });
      });
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>MusixOne Frontend Running ✔</h1>

      <h3 style={{ marginTop: "20px" }}>Conexión al backend:</h3>

      <pre style={{ background: "#f3f3f3", padding: "15px" }}>
        {JSON.stringify(backendData, null, 2)}
      </pre>
    </div>
  );
}
