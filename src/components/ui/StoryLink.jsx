import { useGameNavigate } from '../../hooks/useGameNavigate'

export function StoryLink({ to, children, className = '' }) {
  const navigate = useGameNavigate()
  return (
    <a
      className={`text-sky-700 font-bold cursor-pointer hover:underline ${className}`}
      onClick={(e) => {
        e.preventDefault()
        navigate(to)
      }}
    >
      {children}
    </a>
  )
}
