import { Outlet } from 'react-router-dom'
import { TopBar } from './components/TopBar'
import { Dock } from './components/Dock'
import { DesktopTips } from './components/DesktopTips'

export default function App() {
  return (
    <div className="fixed inset-0 overflow-hidden text-neutral-800">
      <TopBar />
      <div className="absolute inset-0 bg-linear-to-br from-sky-300 via-blue-200 to-purple-200 -z-10" />
      <Outlet />
      <DesktopTips />
      <Dock />
    </div>
  )
}
