import { useCallback, useRef, useState } from 'react'

export function Toast({ message, visible, icon = '🎉', className = '' }) {
  if (!message) return null
  return (
    <div
      className={`fixed top-16 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg text-sm font-medium z-[2000] transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      {icon} {message}
    </div>
  )
}

export function useToast() {
  const [message, setMessage] = useState('')
  const [visible, setVisible] = useState(false)
  const timers = useRef([])

  const show = useCallback((msg, duration = 2500) => {
    timers.current.forEach(clearTimeout)
    timers.current = []
    setMessage(msg)
    setVisible(true)
    timers.current.push(setTimeout(() => setVisible(false), duration))
    timers.current.push(setTimeout(() => setMessage(''), duration + 500))
  }, [])

  return { message, visible, show }
}
