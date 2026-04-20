import { useState } from 'react'
import { useCurrentPage } from '../hooks/useCurrentPage'

const GAMEPLAY_TIPS = [
  '右上角「页面」按钮可快速切换访问过的页面，每个页面有自己的编号，数字越大离结局越近。',
  '右上角高亮开关可以设置是否高亮显示提示词，若关闭可增加游戏难度。',
  '只有页面 3、4、11 的输入框是真实可搜索的：页面 3、4 可匹配多个关键词，页面 11 只匹配一个关键词；其余页面的输入框都是装饰。',
  '部分场景需要站外搜索。',
]

const DECLARATIONS = [
  '本游戏所有内容纯属虚构，和现实无关！',
  '部分图片来源于网络或由 AI 生成，若有侵权，请联系我删除。',
  '图片资源可能会挂掉，若无法加载请联系我。',
]

export function DesktopTips() {
  const pageId = useCurrentPage()
  const [collapsed, setCollapsed] = useState(false)

  if (pageId !== 1) return null

  return (
    <div className="absolute top-12 right-4 w-80 z-30 select-text">
      <div className="bg-white/75 backdrop-blur-md border border-white/60 rounded-xl shadow-lg overflow-hidden">
        <div
          className="px-4 py-2.5 flex items-center justify-between cursor-pointer hover:bg-white/50"
          onClick={() => setCollapsed((c) => !c)}
        >
          <div className="flex items-center gap-2 text-sm font-bold text-neutral-800">
            💡 玩法贴士
          </div>
          <span className="text-neutral-500 text-xs">{collapsed ? '▾' : '▴'}</span>
        </div>
        {!collapsed && (
          <div className="px-4 pb-4 space-y-4">
            {/* 区域1：高亮故事提示 */}
            <div className="bg-linear-to-br from-amber-100 to-pink-100 border border-amber-200 rounded-lg p-3 text-[12.5px] leading-relaxed text-neutral-800">
              你叫「<span className="font-bold text-pink-600">姚如月</span>」，
              在搬家途中发现了小学时的同学录，突然想寻找当时的两位好友。
            </div>

            {/* 区域2：玩法 */}
            <div>
              <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
                玩法提示
              </div>
              <ol className="list-decimal pl-4 space-y-1 text-[12px] text-neutral-700 leading-relaxed">
                {GAMEPLAY_TIPS.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ol>
            </div>

            {/* 区域3：声明 */}
            <div>
              <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
                其他声明
              </div>
              <ul className="list-disc pl-4 space-y-1 text-[11px] text-neutral-500 leading-relaxed">
                {DECLARATIONS.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>

            {/* 二维码 */}
            <div className="pt-3 border-t border-neutral-200/60">
              <div className="text-neutral-500 text-[11px] mb-2 text-center">
                有问题请联系我 ↓
              </div>
              <div className="flex justify-center">
                <div className="w-32 h-32 bg-linear-to-br from-neutral-200 to-neutral-300 rounded-lg flex items-center justify-center text-neutral-500 text-xs border border-neutral-300">
                  [二维码]
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
