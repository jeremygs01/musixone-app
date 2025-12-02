export default function Hero() {
  return (
    <section className="pt-20 pb-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
            The sound of a new generation
          </span>
        </h1>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          MusixOne — a modern home for creators. Upload, share and get discovered.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 font-semibold">Listen Now</button>
          <button className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 font-semibold">Join MusixOne</button>
        </div>
      </div>
    </section>
  );
}
