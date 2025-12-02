export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/3 backdrop-blur-sm border-b border-white/5 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
          MusixOne
        </div>
        <div className="hidden md:flex items-center bg-white/5 rounded-lg px-3 py-1 gap-2">
          <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35"/></svg>
          <input className="bg-transparent outline-none text-sm text-gray-200" placeholder="Search music..." />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden md:inline px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10">Upload</button>
        <button className="px-3 py-1 rounded-lg bg-green-500 hover:bg-green-600">Join</button>
      </div>
    </nav>
  );
}
