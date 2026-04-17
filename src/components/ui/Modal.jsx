import { useEffect } from 'react'
import { createPortal } from 'react-dom'

export function Modal({
  onClose,
  children,
  backdropClass = 'bg-black/50',
  zIndexClass = 'z-[1000]',
  usePortal = false,
  closeOnBackdrop = true,
  closeOnEsc = true,
}) {
  useEffect(() => {
    if (!closeOnEsc || !onClose) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeOnEsc, onClose])

  const content = (
    <div
      className={`fixed inset-0 flex items-center justify-center ${backdropClass} ${zIndexClass}`}
      onClick={closeOnBackdrop ? onClose : undefined}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  )

  return usePortal ? createPortal(content, document.body) : content
}
