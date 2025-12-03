export default function ArtistBio({ bio, genres, country }) {
  return (
    <div className="bg-[#071018] p-4 rounded-lg">
      <h3 className="font-semibold text-lg mb-2">Biografía</h3>
      <p className="text-sm text-gray-300">{bio}</p>

      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-400">Géneros</h4>
        <p className="text-sm mt-1">{genres.join(", ")}</p>
      </div>

      <div className="mt-3 text-sm text-gray-400">
        <span className="font-medium text-gray-200">Desde:</span> {country}
      </div>
    </div>
  );
}
