export default function ExploreCarousel({ items = [], title }) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="flex gap-4 overflow-x-auto">
        {items.map(item => (
          <div key={item.id} className="min-w-[150px] bg-gray-800 p-3 rounded-lg">
            <img src={item.cover} alt={item.title} className="w-full h-32 object-cover rounded" />
            <h3 className="mt-2 text-sm font-semibold">{item.title}</h3>
            <p className="text-xs text-gray-400">{item.artist}</p>
          </div>
        ))}
      </div>
    </section>
  );
}