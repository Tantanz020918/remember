export function BrowserFrame({ children }) {
  return (
    <div className="h-full flex flex-col bg-white text-[13px]">
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  )
}
