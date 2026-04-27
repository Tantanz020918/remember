import { useState } from 'react'
import { useStore } from '../../store'
import { ImagePlaceholder, PasswordLock } from '../../components/ui'
import { spriteForUser } from '../../assets/imageUrls'

// 采晴、如梦令等 QQ 空间统一的密码入口。
export function QZonePasswordGate({ name, prompt, errorHint, answer, onUnlock }) {
  return (
    <div className="min-h-full bg-neutral-900 flex items-center justify-center py-6 md:py-10 px-4">
      <div className="bg-neutral-800 rounded-xl shadow-lg p-5 md:p-8 max-w-md w-full">
        <div className="text-center mb-4">
          <div className="text-lg font-bold text-amber-300">{name} 的 QQ 空间</div>
          <div className="text-xs text-neutral-500 mt-1">TA 设置了访问密码</div>
        </div>
        <PasswordLock
          bare
          dark
          prompt={
            <div className="text-neutral-300">
              <p className="text-sm mb-2">访问问题：</p>
              <p className="text-base font-semibold">{prompt}</p>
            </div>
          }
          errorHint={errorHint}
          answer={answer}
          onUnlock={onUnlock}
        />
      </div>
    </div>
  )
}

function Avatar({ sprite, from, to, size, className }) {
  return (
    <ImagePlaceholder
      sprite={sprite}
      from={from}
      to={to}
      width={size}
      height={size}
      round
      label={false}
      className={className}
    />
  )
}

function Calendar() {
  return (
    <div className="bg-neutral-800 rounded-lg overflow-hidden">
      <div className="text-neutral-500 text-xs px-3 pt-2 pb-1">日历 · 2026.4</div>
      <div className="grid grid-cols-7 gap-0 px-2 pb-2 text-[10px] text-neutral-500 text-center">
        {['一','二','三','四','五','六','日'].map((d) => <div key={d}>{d}</div>)}
        {[0, 1].map((i) => <div key={`pad-${i}`} />)}
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className={i + 1 === 15 ? 'text-amber-300' : ''}>{i + 1}</div>
        ))}
      </div>
    </div>
  )
}

function DefaultLeftSidebar({ recentVisitors = [], sidebarAlbum = [] }) {
  return (
    <>
      <div className="bg-neutral-800 rounded-lg p-3 text-xs">
        <div className="text-neutral-500 mb-2">好友动态</div>
        <div className="text-neutral-400">暂无最新动态</div>
      </div>
      {recentVisitors.length > 0 && (
        <div className="bg-neutral-800 rounded-lg p-3 text-xs">
          <div className="text-neutral-500 mb-2">最近访客</div>
          <div className="flex gap-1.5">
            {recentVisitors.map((v, i) => (
              <ImagePlaceholder key={i} width={28} height={28} round from={v.from} to={v.to} label={false} />
            ))}
          </div>
        </div>
      )}
      {sidebarAlbum.length > 0 && (
        <div className="bg-neutral-800 rounded-lg p-3 text-xs">
          <div className="text-neutral-500 mb-2">相册</div>
          <div className="grid grid-cols-3 gap-1">
            {sidebarAlbum.map((a, i) => (
              <ImagePlaceholder key={i} width="100%" height={32} from={a.from} to={a.to} label={false} style={{ width: '100%', borderRadius: 4 }} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

function DefaultRightSidebar({ weeklyVisits = 0 }) {
  return (
    <>
      <div className="bg-neutral-800 rounded-lg p-3 text-xs text-center">
        <div className="text-neutral-500 mb-1">本周来访数</div>
        <div className="text-amber-300 text-2xl font-bold">{weeklyVisits}</div>
      </div>
      <Calendar />
    </>
  )
}

// Shared QQ-空间 chrome: 顶栏 + 横幅 + tabs + 三栏布局。
// profile = { name, bio, avatarSprite?, avatarFrom?, avatarTo?, headerBg?, todayVisitors?, albumVisits? }
// tabs = [{ key, label, render: (ctx) => ReactNode }]
// ctx 会把 { isOwner } 传给 render。
export function QZoneShell({
  profile,
  tabs,
  defaultTab,
  leftSidebar,
  rightSidebar,
  leftSidebarProps,
  rightSidebarProps,
}) {
  const [tab, setTab] = useState(defaultTab ?? tabs[0]?.key)
  const { qqAccountSwitched } = useStore()
  const currentUser = qqAccountSwitched ? '雨季' : '姚如月'
  const active = tabs.find((t) => t.key === tab) ?? tabs[0]

  const {
    name,
    bio,
    avatarSprite,
    avatarFrom,
    avatarTo,
    headerBg = 'bg-linear-to-br from-neutral-800 via-neutral-700 to-amber-900/30',
    todayVisitors = 0,
    albumVisits = 0,
  } = profile

  return (
    <div className="min-h-full bg-neutral-900 text-neutral-200">
      <div className="bg-neutral-800 border-b border-neutral-700 px-3 md:px-6 py-2 flex items-center gap-3 md:gap-4 text-xs overflow-x-auto whitespace-nowrap">
        <span className="text-amber-400 font-bold shrink-0">QQ空间</span>
        <span className="text-neutral-500 shrink-0">个人中心</span>
        <span className="text-neutral-500 shrink-0 hidden md:inline">好友动态</span>
        <span className="text-neutral-500 shrink-0 hidden md:inline">消息</span>
        <div className="flex-1 hidden md:block" />
        <span className="text-amber-300 flex items-center gap-1.5 shrink-0 ml-auto md:ml-0">
          <ImagePlaceholder sprite={spriteForUser(currentUser)} width={18} height={18} round label={false} />
          {currentUser}
        </span>
        <span className="text-neutral-500 shrink-0 hidden md:inline">设置</span>
      </div>

      <div className={`relative h-32 md:h-44 ${headerBg}`}>
        <div className="absolute bottom-3 md:bottom-4 left-4 md:left-6 right-4 flex items-end gap-3 md:gap-4">
          <Avatar sprite={avatarSprite} from={avatarFrom} to={avatarTo} size={72} className="border-3 border-neutral-800 shadow-lg md:!w-[90px] md:!h-[90px]" />
          <div className="pb-1 md:pb-2 min-w-0 flex-1">
            <h2 className="text-lg md:text-xl font-bold text-white drop-shadow-md truncate">{name}</h2>
            <div className="text-xs text-neutral-200 mt-1 drop-shadow-md line-clamp-2">{bio}</div>
          </div>
        </div>
        <div className="absolute top-3 md:top-4 right-4 md:right-6 text-neutral-400 text-[10px] md:text-xs flex flex-col md:flex-row gap-1 md:gap-4 text-right">
          <span>今日访客 <b className="text-amber-300">{todayVisitors}</b></span>
          <span>相册访问 <b className="text-amber-300">{albumVisits}</b></span>
        </div>
      </div>

      <div className="flex gap-1 px-3 md:px-6 pt-3 bg-neutral-800/50 overflow-x-auto whitespace-nowrap">
        {tabs.map((t) => (
          <span
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-3 md:px-4 py-2 cursor-pointer text-sm rounded-t shrink-0 ${
              tab === t.key
                ? 'bg-neutral-900 text-amber-300 font-bold'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            {t.label}
          </span>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4 px-3 md:px-6 py-4">
        <div className="hidden md:block w-48 shrink-0 space-y-3">
          {leftSidebar ?? <DefaultLeftSidebar {...(leftSidebarProps || {})} />}
        </div>

        <div className="flex-1 min-w-0">
          {active?.render({ isOwner: qqAccountSwitched })}
        </div>

        <div className="hidden md:block w-44 shrink-0 space-y-3">
          {rightSidebar ?? <DefaultRightSidebar {...(rightSidebarProps || {})} />}
        </div>
      </div>
    </div>
  )
}
