import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Aperture } from 'lucide-react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={
        <div className="h-screen overflow-hidden">
          <div className="w-full h-full bg-neutral-900 flex flex-col items-center justify-center">
            <Aperture absoluteStrokeWidth className="w-16 h-16 animate-spin" />
            <span className="loading-title">Loading...</span>
          </div>
        </div>
      }>
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
