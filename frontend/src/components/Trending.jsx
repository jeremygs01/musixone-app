
export default function Trending() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Trending ahora</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-4 rounded">Midnight Session</div>
        <div className="bg-zinc-900 p-4 rounded">Global Waves</div>
        <div className="bg-zinc-900 p-4 rounded">Studio Nights</div>
      </div>
    </section>
  );
}
