export function DeadLink({ children, className = '' }) {
  return (
    <a
      className={`text-sky-700 cursor-pointer hover:underline ${className}`}
      onClick={(e) => e.preventDefault()}
    >
      {children}
    </a>
  )
}
