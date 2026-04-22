export function BaiduResultLayout({ query, count, children }) {
  return (
    <div className="w-full max-w-[780px] px-3 md:px-10 pt-4 md:pt-5 pb-8 md:pb-10 mx-auto">
      <div className="flex items-center gap-2 md:gap-3.5">
        <div className="text-xl md:text-2xl font-bold text-[#2932e1] shrink-0">
          Bai<span className="text-pink-500">du</span>
        </div>
        <input
          className="flex-1 min-w-0 px-2.5 md:px-3.5 py-1.5 md:py-2 border-2 border-sky-500 rounded-lg text-sm outline-none"
          defaultValue={query}
        />
      </div>
      <div className="flex gap-3 md:gap-5 mt-3 md:mt-4 pb-2 md:pb-2.5 border-b border-neutral-200 text-[13px] text-neutral-500 overflow-x-auto whitespace-nowrap">
        <span className="text-sky-500 font-semibold cursor-pointer shrink-0">网页</span>
        <span className="cursor-pointer shrink-0">资讯</span>
        <span className="cursor-pointer shrink-0">视频</span>
        <span className="cursor-pointer shrink-0">图片</span>
        <span className="cursor-pointer shrink-0">贴吧</span>
        <span className="cursor-pointer shrink-0">文库</span>
        <span className="cursor-pointer shrink-0">地图</span>
        <span className="cursor-pointer shrink-0">更多</span>
      </div>
      <div className="text-neutral-400 text-xs my-3 md:my-3.5">百度为您找到相关结果约 {count} 个</div>
      {children}
    </div>
  )
}

export function BaiduResultItem({ title, url, children, sub, image }) {
  return (
    <div className="mb-5 md:mb-6 flex gap-3">
      <div className="flex-1 min-w-0">
        <div className="text-base md:text-lg text-sky-700 mb-1 font-bold">{title}</div>
        <div className="text-emerald-700 text-xs mb-1 break-all">{url}</div>
        <div className="text-neutral-700 text-[13px] leading-relaxed">{children}</div>
        {sub && <div className="text-xs text-sky-500 mt-1">{sub}</div>}
      </div>
      {image && <div className="shrink-0 w-[88px] md:w-auto">{image}</div>}
    </div>
  )
}
