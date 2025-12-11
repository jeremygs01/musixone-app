import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!supabase) return setError("Supabase no configurado");

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) setError(error.message);
    else navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form className="bg-zinc-900 p-6 rounded-xl w-full max-w-sm" onSubmit={handleRegister}>
        <h1 className="text-xl font-bold mb-4">Crear Cuenta</h1>

        <input type="email" placeholder="Correo" className="w-full mb-3 p-3 rounded bg-zinc-800" onChange={(e)=>setEmail(e.target.value)} required />

        <input type="password" placeholder="Contraseña" className="w-full mb-4 p-3 rounded bg-zinc-800" onChange={(e)=>setPassword(e.target.value)} required />

        {error && <p className="text-red-500">{error}</p>}

        <button className="w-full bg-indigo-600 py-2 rounded">Registrarse</button>
      </form>
    </div>
  );
}
