export default function ArtistHeader({ artist }) {
  return (
    <header className="w-full">
      <div className="h-64 md:h-80 w-full bg-cover bg-center" style={{ backgroundImage: url() }}></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 -mt-16 flex items-end gap-6">
        <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-black shadow-lg bg-gray-900">
          <img src={artist.photo} alt={artist.name} className="w-full h-full object-cover"/>
        </div>

        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-extrabold">{artist.name}</h1>
          <p className="text-sm text-gray-300 mt-1">{artist.genres.join(" • ")} • {artist.country}</p>

          <div className="mt-4 flex items-center gap-3">
            <button className="px-4 py-2 bg-white text-black rounded-full font-medium shadow">Seguir</button>
            <button className="px-4 py-2 border border-gray-700 rounded-full text-gray-200">Enviar mensaje</button>
            <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full text-white">Play Popular</button>
          </div>
        </div>
      </div>
    </header>
  );
}
