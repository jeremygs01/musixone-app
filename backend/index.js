import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";

const app = express();

// =========================
// 🔥 CORS DEFINITIVO (SIN ENV VARS)
// =========================
app.use(
  cors({
    origin: [
      "https://musixone-frontend.vercel.app", // frontend en producción
      "http://localhost:5173" // frontend en local
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(express.json());

// =========================
// 🔥 SUPABASE CONFIG
// =========================
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// =========================
// 🔵 ENDPOINT DE PRUEBA
// =========================
app.get("/", (req, res) => {
  res.json({ ok: true, msg: "Backend OK (CORS fixed)" });
});

// =========================
// 🔵 EJEMPLO DE ENDPOINT (tracks)
// =========================
app.get("/tracks", async (req, res) => {
  const { data, error } = await supabase.from("tracks").select("*");

  if (error) {
    return res.status(500).json({ ok: false, error: error.message });
  }

  res.json({ ok: true, data });
});

// =========================
// 🚀 INICIAR SERVIDOR
// =========================
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Backend en", PORT);
});

