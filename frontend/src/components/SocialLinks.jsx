export default function SocialLinks({ socials }) {
  return (
    <div className="bg-[#071018] p-4 rounded-lg">
      <h4 className="font-semibold mb-3">Redes Sociales</h4>
      <div className="flex flex-col gap-2">
        {socials.instagram && <a className="text-sky-400" href={socials.instagram} target="_blank">Instagram</a>}
        {socials.youtube && <a className="text-red-500" href={socials.youtube} target="_blank">YouTube</a>}
        {socials.tiktok && <a className="text-pink-400" href={socials.tiktok} target="_blank">TikTok</a>}
      </div>
    </div>
  );
}
