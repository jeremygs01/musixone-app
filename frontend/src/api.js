export const API = import.meta.env.VITE_API_URL || "";

export async function fetchTracks({ limit = 12, offset = 0, q = "" } = {}) {
  const params = new URLSearchParams({ limit, offset, q });
  const res = await fetch(`${API}/tracks?${params.toString()}`);
  return res.json();
}
