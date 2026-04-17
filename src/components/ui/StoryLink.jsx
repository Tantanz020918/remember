import { useGameNavigate } from '../../hooks/useGameNavigate'
import { Keyword } from './Keyword'

export function StoryLink({ to, children, className = '' }) {
  const navigate = useGameNavigate()
  return (
    <Keyword> <a
      className={`text-sky-700 font-bold cursor-pointer hover:underline ${className}`}
      onClick={(e) => {
        e.preventDefault()
        navigate(to)
      }}
    >
      {children}
    </a></Keyword>
   
  )
}
