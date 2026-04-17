export function BaiduResultLayout({ query, count, children }) {
  return (
    <div className="w-[780px] px-10 pt-5 pb-10 mx-auto">
      <div className="flex items-center gap-3.5">
        <div className="text-2xl font-bold text-[#2932e1]">
          Bai<span className="text-pink-500">du</span>
        </div>
        <input
          className="flex-1 px-3.5 py-2 border-2 border-sky-500 rounded-lg text-sm outline-none"
          defaultValue={query}
        />
      </div>
      <div className="flex gap-5 mt-4 pb-2.5 border-b border-neutral-200 text-[13px] text-neutral-500">
        <span className="text-sky-500 font-semibold cursor-pointer">网页</span>
        <span className="cursor-pointer">资讯</span>
        <span className="cursor-pointer">视频</span>
        <span className="cursor-pointer">图片</span>
        <span className="cursor-pointer">贴吧</span>
        <span className="cursor-pointer">文库</span>
        <span className="cursor-pointer">地图</span>
        <span className="cursor-pointer">更多</span>
      </div>
      <div className="text-neutral-400 text-xs my-3.5">百度为您找到相关结果约 {count} 个</div>
      {children}
    </div>
  )
}

export function BaiduResultItem({ title, url, children, sub, image }) {
  return (
    <div className="mb-6 flex">
      <div className="flex-1 min-w-0">
         <div className="text-lg text-sky-700 mb-1 font-bold">{title}</div>
      <div className="text-emerald-700 text-xs mb-1">{url}</div>
      <div className="flex gap-4">
        <div className="flex-1 text-neutral-700 text-[13px] leading-relaxed">{children}</div>
        
      </div>
      {sub && <div className="text-xs text-sky-500 mt-1">{sub}</div>}
      </div>
      {image && <div className="shrink-0">{image}</div>}
     
    </div>
  )
}
