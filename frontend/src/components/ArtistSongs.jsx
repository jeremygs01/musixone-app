export default function ArtistSongs({ songs }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Top Tracks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {songs.map((s) => (
          <div key={s.id} className="bg-[#0b0b0d] p-4 rounded-lg flex items-center gap-4 hover:scale-[1.01] transition">
            <div className="w-20 h-20 rounded overflow-hidden bg-gray-800">
              <img src={s.cover} alt={s.title} className="w-full h-full object-cover"/>
            </div>
            <div className="flex-1">
              <p className="font-semibold">{s.title}</p>
              <p className="text-sm text-gray-400">3:24</p>
            </div>
            <div>
              <button className="px-3 py-2 bg-white text-black rounded-full">Play</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
