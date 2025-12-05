export default function Featured({ items = [] }) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Featured</h2>
      <div className="grid grid-cols-2 gap-4">
        {items.map(item => (
          <div key={item.id} className="bg-gray-800 p-3 rounded-lg">
            <img src={item.cover} alt={item.title} className="w-full h-32 object-cover rounded" />
            <h3 className="mt-2 font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.artist}</p>
          </div>
        ))}
      </div>
    </section>
  );
}