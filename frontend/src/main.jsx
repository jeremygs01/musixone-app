import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// ERROR CATCHER MEJORADO — muestra message, archivo, línea y stack
function showErrorOnPage(title, payload) {
  const pre = document.createElement('pre')
  pre.style.whiteSpace = 'pre-wrap'
  pre.style.color = '#ff6666'
  pre.style.background = '#0b0b0b'
  pre.style.padding = '20px'
  pre.style.fontFamily = 'monospace'
  pre.style.fontSize = '14px'
  pre.innerText = `${title}\n\n${payload}`
  document.body.innerHTML = ''
  document.body.appendChild(pre)
}

window.addEventListener("error", function (e) {
  const info = [
    `Message: ${e.message}`,
    `Filename: ${e.filename || '—'}`,
    `Line: ${e.lineno || '—'} Col: ${e.colno || '—'}`,
    `Error object: ${e.error ? (e.error.stack || e.error) : '—'}`
  ].join('\n')
  showErrorOnPage('❌ ERROR EN LA APP (runtime error):', info)
});

window.addEventListener("unhandledrejection", function (e) {
  const info = [
    `Reason: ${String(e.reason)}`,
    `Stack: ${e.reason && e.reason.stack ? e.reason.stack : '—'}`
  ].join('\n\n')
  showErrorOnPage('❌ PROMISE ERROR (unhandledrejection):', info)
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
