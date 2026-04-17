import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { GamePage } from './pages/system/GamePage.jsx'
import { MazeEditor } from './pages/system/MazeEditor.jsx'
import { PAGES } from './pages/registry.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={null} />
          {Object.entries(PAGES)
            .filter(([, page]) => page.path)
            .map(([id, page]) => (
              <Route key={id} path={page.path} element={<GamePage />} />
            ))}
        </Route>
        <Route path="/maze-editor" element={<MazeEditor />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
