
MusixOne Artist Profile - Integration notes
------------------------------------------

Files added under frontend/src/pages and frontend/src/components.

How to integrate:
1) Copy the folder `frontend/src` into your project `musixone-app/frontend/src/` (merge with existing src).
2) Ensure `frontend/index.html` has <div id="root"></div> and script to /src/main.jsx (already present).
3) Tailwind is required; ensure frontend/package.json includes tailwind/postcss/autoprefixer and tailwind directives are in src/index.css.
4) Replace mock data in ArtistProfile.jsx useEffect with a real fetch to your Supabase or API.
   Example:
     const res = await fetch(`/api/artists/${slug}`);
     setArtist(await res.json());
5) To fetch songs from Supabase storage, use the Supabase client in your backend or call the public URLs.
6) Commit & push: git add frontend/src && git commit -m "Add artist profile UI" && git push
