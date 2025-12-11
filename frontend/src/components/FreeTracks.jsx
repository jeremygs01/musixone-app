const sample = [
  { id:1, title: "Die With a Smile", artist: "Kehily Gomez" },
  { id:2, title: "Track Two", artist: "Artist Two" },
  { id:3, title: "Track Three", artist: "Artist Three" }
];

export default function FreeTracks(){
  return (
    <section className="px-6 py-12 bg-[#07070b]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold">Listen Free</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {sample.map(t=>(
            <div key={t.id} className="bg-[#0f0f13] rounded-xl p-4 hover:scale-105 transition shadow-md">
              <div className="h-36 rounded-lg bg-gradient-to-br from-green-600 via-black to-purple-600 mb-3" />
              <div className="font-semibold">{t.title}</div>
              <div className="text-sm text-gray-400">{t.artist}</div>
              <div className="mt-4 flex gap-2">
                <button className="px-3 py-1 rounded bg-green-500">Play</button>
                <button className="px-3 py-1 rounded bg-white/5">Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
