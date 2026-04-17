export function ChatFrame({ name, children }) {
  return (
    <div className="flex-1 flex flex-col bg-neutral-100 min-h-0">
      <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200 bg-neutral-100">
        <div className="font-bold text-sm">{name}</div>
        <div className="text-neutral-500 flex gap-3">
          <span>🔍</span>
          <span>⋯</span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-5 py-4 min-h-0">{children}</div>
      <div className="border-t border-neutral-200 bg-white px-4 pt-1.5 pb-2.5 flex flex-col min-h-[130px]">
        <div className="flex gap-3.5 py-1.5 text-neutral-600 text-base">
          <span>😀</span>
          <span>🖼</span>
          <span>✂</span>
          <span>📁</span>
          <span>🎤</span>
          <span>📹</span>
        </div>
        <textarea
          className="flex-1 border-none outline-none resize-none font-sans text-[13px] py-1.5 min-h-[40px] bg-transparent"
          placeholder=""
        />
        <div className="text-right">
          <button className="bg-[#07c160] text-white border-none px-3.5 py-1 rounded cursor-pointer text-xs">
            发送
          </button>
        </div>
      </div>
    </div>
  )
}
