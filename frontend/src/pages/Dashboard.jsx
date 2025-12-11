import { useAuth } from "../hooks/useAuth";

export default function Dashboard() {
  const { user, loading } = useAuth();

  if (loading) return <p className="p-6">Cargando...</p>;
  if (!user) return <p className="p-6">No autorizado</p>;

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl">Bienvenido {user.email}</h1>
    </div>
  );
}
