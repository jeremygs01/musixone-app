export default function App() {
  return (
    <div className="bg-gradient-to-b from-black via-[#0f0f12] to-black min-h-screen text-white font-sans">
      
      {/* NAVBAR */}
      <nav className="backdrop-blur-lg bg-white/5 border-b border-white/10 fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
          MusixOne
        </h1>

        <div className="flex gap-6 items-center">
          <input
            type="text"
            placeholder="Search music…"
            className="bg-white/10 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="hover:text-purple-300">Upload</button>
          <button className="hover:text-green-300">Login</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 text-center px-6">
        <h2 className="text-6xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
            The sound of a new generation
          </span>
        </h2>

        <p className="text-gray-400 text-lg mt-6">
          MusixOne – The home for creators, artists and dreamers.
        </p>

        <div className="flex justify-center gap-6 mt-10">
          <button className="px-8 py-4 text-lg bg-green-500 hover:bg-green-600 rounded-xl font-semibold shadow-lg">
            Listen Now
          </button>

          <button className="px-8 py-4 text-lg bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold shadow-lg">
            Join MusixOne
          </button>
        </div>
      </section>

      {/* TRENDING SECTION */}
      <section className="px-8 py-16">
        <h3 className="text-3xl font-semibold mb-6">Trending Now</h3>

        <div className="flex overflow-x-auto gap-6 pb-4">
          {[1,2,3,4,5].map((n) => (
            <div key={n} className="min-w-[180px] bg-[#1c1c1f] rounded-xl p-4 hover:scale-105 duration-200 shadow-lg">
              <div className="bg-gradient-to-br from-purple-600 via-black to-green-500 h-28 rounded-lg"></div>
              <p className="mt-3 text-gray-300">Featured Track {n}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FREE TRACKS */}
      <section className="px-8 py-16 bg-[#111114]">
        <h3 className="text-3xl font-semibold mb-6">Listen Free</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[1,2,3].map((n) => (
            <div key={n} className="bg-[#1a1a1f] p-5 rounded-xl hover:scale-105 duration-200 shadow-lg">
              <p className="text-gray-400 text-lg">Free Track {n}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXACT PREMIUM */}
      <section className="px-8 py-20 bg-gradient-to-br from-purple-800 to-black text-center">
        <h3 className="text-4xl font-bold">Unlock EXACT</h3>
        <p className="text-gray-300 text-lg mt-4">
          High-quality audio • Artist Dashboard • Earnings Boost
        </p>

        <button className="mt-8 px-10 py-4 text-xl bg-white/10 backdrop-blur-lg rounded-xl border border-purple-500 hover:bg-white/20 transition">
          Upgrade to EXACT
        </button>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MusixOne — All rights reserved.
      </footer>
    </div>
  );
}
