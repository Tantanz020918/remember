export function BaitianFrame({ children }) {
  return (
    <div className="flex min-h-full bg-linear-to-b from-[#fef5f8] via-[#fef0f5] to-[#fde8ee]">
      <div className="flex-1 min-w-0 py-3 px-2.5 md:py-5 md:px-3.5">
        <div className="bg-white rounded-lg px-3 py-2.5 md:px-5 md:py-3.5 mb-3 border-2 border-[#ffb8d4]">
          <div className="text-base md:text-lg font-bold text-[#d16b8a] md:mb-2.5">🌸 百田圈圈 · 奥比岛圈</div>
          <div className="hidden md:flex gap-4 text-[13px]">
            <a className="cursor-pointer px-2.5 py-1 rounded-full bg-[#e891b0] text-white">
              首页
            </a>
            <a className="cursor-pointer px-2.5 py-1 rounded-full text-neutral-500">行会无限</a>
            <a className="cursor-pointer px-2.5 py-1 rounded-full text-neutral-500">同人创作</a>
            <a className="cursor-pointer px-2.5 py-1 rounded-full text-neutral-500">问答交流</a>
            <a className="cursor-pointer px-2.5 py-1 rounded-full text-neutral-500">精美图片</a>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
