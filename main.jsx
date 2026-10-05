import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'

// After a new deployment an open tab can still point at old chunk names. Reload once to recover.
window.addEventListener('vite:preloadError', () => {
  if (!window.sessionStorage.getItem('reloaded-after-preload-error')) {
    window.sessionStorage.setItem('reloaded-after-preload-error', '1')
    window.location.reload()
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
