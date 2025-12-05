export default function ArtistProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#070707] to-[#05060a] text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Perfil del Artista</h1>

      <div className="mt-6 bg-gray-900 rounded-xl p-4 max-w-3xl mx-auto">
        <p className="text-gray-300 mb-2">
          Aquí irá la información del artista.
        </p>
        <p className="text-gray-400 text-sm">
          Biografía, canciones, álbumes y enlaces a redes sociales.
        </p>
      </div>
    </div>
  );
}
