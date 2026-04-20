export function Tooltip({
  children,
  text,
  position = 'top',
  className = '',
  wrapperClassName = 'inline-block align-baseline',
}) {
  const positionClass = position === 'bottom'
    ? 'top-full mt-1.5'
    : 'bottom-full mb-1.5'

  return (
    <span className={`relative group z-10 ${wrapperClassName}`}>
      {children}
      <span
        className={`pointer-events-none absolute left-1/2 -translate-x-1/2 ${positionClass} px-2 py-1 rounded-md bg-neutral-900/90 text-white text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg ${className}`}
      >
        {text}
      </span>
    </span>
  )
}
