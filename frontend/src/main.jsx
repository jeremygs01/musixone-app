import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// === ERROR CATCHER (Muestra errores en pantalla) ===
window.addEventListener("error", function (e) {
  document.body.innerHTML = `
    <div style="
      padding: 30px;
      color: #ff4444;
      font-size: 20px;
      background: black;
      font-family: Arial;
    ">
      <b>❌ ERROR EN LA APP:</b><br><br>
      ${e.message}
      <br><br>
      <small>Revisa el nombre de los archivos, imports y rutas.</small>
    </div>
  `;
});

window.addEventListener("unhandledrejection", function (e) {
  document.body.innerHTML = `
    <div style="
      padding: 30px;
      color: #ff4444;
      font-size: 20px;
      background: black;
      font-family: Arial;
    ">
      <b>❌ PROMISE ERROR:</b><br><br>
      ${e.reason}
      <br><br>
      <small>Esto viene de un import o fetch.</small>
    </div>
  `;
});
// ===================================================

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
