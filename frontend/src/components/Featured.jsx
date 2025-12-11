
export default function Featured() {
  return (
    <section className="py-16 px-6 bg-zinc-950">
      <h2 className="text-2xl font-bold mb-6 text-white">Featured Artists</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-4 rounded">Artist Pro</div>
        <div className="bg-zinc-900 p-4 rounded">World Collective</div>
        <div className="bg-zinc-900 p-4 rounded">The Composers</div>
      </div>
    </section>
  );
}
