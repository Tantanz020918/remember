export function QQAnnouncementBanner({ onViewDetails }) {
  return (
    <div className="px-4 py-2 bg-amber-50 border-b border-amber-200 text-xs flex items-center gap-2">
      <span className="text-amber-600 font-semibold shrink-0">📢 群公告</span>
      <span className="flex-1 min-w-0 truncate text-neutral-700">
        新戏「永远的姐妹」人物介绍出炉啦～欢迎大家去帖子下投票最想看的 CP！
      </span>
      <a
        className="text-sky-600 font-bold cursor-pointer hover:underline shrink-0"
        onClick={onViewDetails}
      >
        查看详情 &gt;
      </a>
    </div>
  )
}
