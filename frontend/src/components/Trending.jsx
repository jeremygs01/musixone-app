const cards = Array.from({length:6}).map((_,i)=>({
  id: i+1,
  title: `Featured ${i+1}`,
  artist: `Artist ${i+1}`
}));

export default function Trending(){
  return (
    <section className="px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Trending Now</h2>
        <div className="flex gap-6 overflow-x-auto pb-2">
          {cards.map(c=>(
            <div key={c.id} className="min-w-[180px] bg-gradient-to-br from-[#1f1b2d] to-[#0e1020] rounded-xl p-4 shadow-xl transform hover:scale-105 transition">
              <div className="h-36 w-full rounded-lg bg-gradient-to-br from-purple-600 via-black to-green-500 mb-3" />
              <div className="text-gray-300 font-semibold">{c.title}</div>
              <div className="text-sm text-gray-500 mt-1">{c.artist}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
