// src/components/Hero.jsx

export default function Hero() {
  return (
    <header className="w-full border-b border-white/5 bg-gradient-to-b from-black/80 via-[#050509] to-black">
      {/* NAVBAR SUPERIOR */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-[#21F38F] via-[#4F7CFF] to-[#8B5CF6] flex items-center justify-center shadow-lg shadow-[#21F38F]/40">
            <span className="text-xs font-semibold text-white tracking-tight">
              M1
            </span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-semibold text-white tracking-tight">
              Musix<span className="text-[#21F38F]">One</span>
            </span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-gray-400">
              Artists & Composers Platform
            </span>
          </div>
        </div>

        {/* Menú simple (placeholder por ahora) */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-gray-300">
          <button className="hover:text-white transition">Explorar talento</button>
          <button className="hover:text-white transition">Artistas</button>
          <button className="hover:text-white transition">Planes Pro</button>
        </nav>

        {/* Botón acceder */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex text-sm text-gray-300 hover:text-white transition">
            Iniciar sesión
          </button>
          <button className="text-sm font-semibold px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition">
            Crear cuenta
          </button>
        </div>
      </div>

      {/* HERO PRINCIPAL */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-14 pt-4 md:pt-10 flex flex-col md:flex-row items-center gap-10 md:gap-14">
        {/* Columna izquierda – texto principal */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-gray-300 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#21F38F]" />
            Plataforma global para artistas profesionales
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
            El lugar donde la{" "}
            <span className="bg-gradient-to-r from-[#21F38F] via-[#4F7CFF] to-[#8B5CF6] bg-clip-text text-transparent">
              música
            </span>{" "}
            se convierte en carrera.
          </h1>

          <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-xl">
            MusixOne conecta artistas, compositores y productores de todo el
            mundo. Comparte tu trabajo, crece tu audiencia y construye una
            presencia profesional en una sola plataforma.
          </p>

          {/* Botones de acción */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-[#21F38F] text-black hover:bg-[#16d171] transition shadow-[0_0_25px_rgba(33,243,143,0.35)]">
              Explorar talento global
            </button>
            <button className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold border border-white/15 text-white hover:bg-white/5 transition">
              Crear cuenta de artista
            </button>
          </div>

          {/* Mini métricas */}
          <div className="mt-6 flex flex-wrap gap-5 text-xs text-gray-300">
            <div>
              <p className="text-white text-base font-semibold">+12.4K</p>
              <p className="text-gray-400">Artistas registrados</p>
            </div>
            <div>
              <p className="text-white text-base font-semibold">+89 países</p>
              <p className="text-gray-400">Alcance global</p>
            </div>
            <div>
              <p className="text-white text-base font-semibold">Profesionales</p>
              <p className="text-gray-400">Productores & compositores</p>
            </div>
          </div>
        </div>

        {/* Columna derecha – mockup / cards */}
        <div className="flex-1 w-full flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm">
            {/* Círculo glow */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-[#21F38F]/20 via-[#4F7CFF]/15 to-[#8B5CF6]/10 blur-3xl rounded-full pointer-events-none" />

            {/* Tarjeta principal */}
            <div className="relative rounded-3xl bg-[#080810] border border-white/10 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.75)]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-[#4F7CFF] to-[#21F38F] flex items-center justify-center">
                    <span className="text-xs text-white font-semibold">
                      PRO
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-[0.22em]">
                      Panel artista
                    </p>
                    <p className="text-sm text-white font-semibold">
                      Vista profesional
                    </p>
                  </div>
                </div>
                <span className="text-[11px] text-gray-400">Tiempo real</span>
              </div>

              {/* Estadísticas */}
              <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-3">
                  <p className="text-gray-400 text-[11px]">Oyentes mensuales</p>
                  <p className="text-lg text-white font-semibold mt-1">
                    128.4K
                  </p>
                  <p className="text-[11px] text-[#21F38F] mt-1">
                    +12.3% este mes
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-3">
                  <p className="text-gray-400 text-[11px]">Reproducciones</p>
                  <p className="text-lg text-white font-semibold mt-1">
                    3.9M
                  </p>
                  <p className="text-[11px] text-gray-400 mt-1">
                    Últimos 30 días
                  </p>
                </div>
              </div>

              {/* Lista de pistas */}
              <div className="space-y-2">
                {[
                  { title: "Midnight Session", artist: "Artist Pro", plays: "1.2M" },
                  { title: "Global Waves", artist: "World Collective", plays: "890K" },
                  { title: "Studio Nights", artist: "The Composers", plays: "432K" },
                ].map((track, idx) => (
                  <div
                    key={track.title}
                    className="flex items-center justify-between rounded-2xl bg-white/3 hover:bg-white/8 transition p-2.5"
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-[#4F7CFF] to-[#21F38F] flex items-center justify-center text-[11px] text-white font-semibold">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="text-xs text-white font-medium">
                          {track.title}
                        </p>
                        <p className="text-[11px] text-gray-400">
                          {track.artist}
                        </p>
                      </div>
                    </div>
                    <p className="text-[11px] text-gray-300">{track.plays}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tarjeta flotante pequeña */}
            <div className="absolute -bottom-6 -left-3 rounded-2xl bg-[#050509] border border-white/10 px-3 py-2 flex items-center gap-2 shadow-lg shadow-black/70">
              <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-[#21F38F] to-[#4F7CFF]" />
              <div className="text-[11px] leading-tight">
                <p className="text-gray-300">+320 artistas nuevos</p>
                <p className="text-gray-500">esta semana en MusixOne</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
