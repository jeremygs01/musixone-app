import { useState } from "react";
import HomeExact from "./pages/HomeExact";
import HomePremium from "./pages/HomePremium";

export default function App(){
  const [variant, setVariant] = useState("exact");
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <header className="p-4 flex items-center justify-between max-w-6xl mx-auto">
        <div className="text-2xl font-bold">Musix<span className="text-green-400">One</span></div>
        <div className="space-x-2">
          <button onClick={() => setVariant('exact')} className={"px-3 py-1 rounded "+(variant==='exact'?'bg-green-500 text-neutral-900':'bg-neutral-800')}>Exact</button>
          <button onClick={() => setVariant('premium')} className={"px-3 py-1 rounded "+(variant==='premium'?'bg-purple-600':'bg-neutral-800')}>Premium</button>
        </div>
      </header>

      {variant === "exact" ? <HomeExact /> : <HomePremium />}
    </div>
);
}
