export default function ArtistStats({ stats }) {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 grid grid-cols-3 gap-4 text-center">
      <div>
        <p className="text-2xl font-semibold">{Intl.NumberFormat().format(stats.monthly_listeners)}</p>
        <p className="text-sm text-gray-400">Oyentes mensuales</p>
      </div>
      <div>
        <p className="text-2xl font-semibold">{Intl.NumberFormat().format(stats.plays)}</p>
        <p className="text-sm text-gray-400">Reproducciones</p>
      </div>
      <div>
        <p className="text-2xl font-semibold">{Intl.NumberFormat().format(stats.followers)}</p>
        <p className="text-sm text-gray-400">Seguidores</p>
      </div>
    </div>
  );
}
