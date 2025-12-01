export default function TrackCard({ track, onPlay, premiumStyle }) {
  return (
    <div className={"p-4 rounded-lg "+(premiumStyle ? "bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-xl" : "bg-neutral-800")}>
      <div className="flex gap-4 items-center">
        <img src={track.cover_url || '/placeholder.png'} alt={track.title} className="w-20 h-20 rounded-md object-cover" />
        <div className="flex-1">
          <div className="font-semibold">{track.title}</div>
          <div className="text-sm text-gray-400">{track.artist}</div>
        </div>
        <div>
          <button onClick={onPlay} className="px-3 py-1 bg-indigo-600 rounded text-white">{track ? 'Play' : 'Play'}</button>
        </div>
      </div>
      <div className="mt-3 text-xs text-gray-400">Duration: —</div>
    </div>
  );
}
