import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="h-72 md:h-96 bg-gradient-to-r from-[#0f1724] via-[#071627] to-[#02111a] flex items-center">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-6">
          
          {/* Texto principal */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Descubre nuevos sonidos
            </h2>

            <p className="mt-3 text-gray-300 max-w-2xl">
              Curaduría diaria, artistas emergentes y playlists seleccionadas para
              productores, cantantes y creativos.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                to="/explore"
                className="px-5 py-2 bg-white text-black rounded-full font-medium"
              >
                Explorar
              </Link>

              <Link
                to="/artist/kehilyn-gomez"
                className="px-5 py-2 border border-gray-700 rounded-full text-gray-200"
              >
                Perfil destacado
              </Link>
            </div>
          </div>

          {/* Imagen */}
          <div className="w-56 h-56 hidden md:block rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/placeholders/placeholder_cover.jpg"
              alt="Hero cover"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
