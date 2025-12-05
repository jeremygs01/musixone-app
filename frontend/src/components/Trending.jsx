export default function Trending({ tracks = [] }) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Trending</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {tracks.map(track => (
          <div key={track.id} className="bg-gray-900 p-3 rounded-lg">
            <img src={track.cover} alt={track.title} className="w-full h-40 object-cover rounded" />
            <h3 className="mt-2 font-semibold">{track.title}</h3>
            <p className="text-sm text-gray-400">{track.artist}</p>
          </div>
        ))}
      </div>
    </section>
  );
}