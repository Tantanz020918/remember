import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { useCurrentPage } from '../hooks/useCurrentPage'
import { useIsMobile } from '../hooks/useIsMobile'

const CONTACT_URL = 'http://xhslink.com/o/5yjWbFvKdfX'
const WALKTHROUGH_URL = 'http://xhslink.com/o/1AzMpZqTaST'

const GAMEPLAY_TIPS = [
  '右上角「页面」按钮可快速切换访问过的页面，每个页面有自己的编号，数字越大离结局越近。',
  '右上角设置按钮可更改提示强度，调整游戏难度。',
  '不可输入的纯装饰输入框做了禁用处理。',
  '部分场景需要站外搜索。',
]

const DECLARATIONS = [
  '本游戏所有内容纯属虚构，和现实无关！',
  '部分图片来源于网络或由 AI 生成，若有侵权，请联系我删除。',
  '图片资源可能会挂掉，若无法加载请联系我。',
]

export function DesktopTips() {
  const pageId = useCurrentPage()
  const isMobile = useIsMobile()
  const [collapsed, setCollapsed] = useState(isMobile)

  if (pageId !== 1) return null

  return (
    <div className="absolute top-10 md:top-12 right-2 md:right-4 left-2 md:left-auto md:w-80 z-30 select-text">
      <div className="bg-white/75 backdrop-blur-md border border-white/60 rounded-xl shadow-lg overflow-hidden">
        <div
          className="px-3 md:px-4 py-2 md:py-2.5 flex items-center justify-between cursor-pointer hover:bg-white/50"
          onClick={() => setCollapsed((c) => !c)}
        >
          <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-neutral-800">
            💡 玩法贴士
          </div>
          <span className="text-neutral-500 text-xs">{collapsed ? '▾' : '▴'}</span>
        </div>
        {!collapsed && (
          <div className="px-3 md:px-4 pb-3 md:pb-4 space-y-3 md:space-y-4 max-h-[60vh] overflow-y-auto">
            <div className="bg-linear-to-br from-amber-100 to-pink-100 border border-amber-200 rounded-lg p-3 text-[12px] md:text-[12.5px] leading-relaxed text-neutral-800">
              你叫「<span className="font-bold text-pink-600">姚如月</span>」，
              在搬家途中发现了小学时的同学录，突然想寻找当时的两位好友。
            </div>

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

            <div className="pt-3 border-t border-neutral-200/60">
              <div className="flex justify-center gap-3">
                <div className="flex flex-col items-center min-w-0">
                  <div className="text-neutral-500 text-[11px] mb-1.5 text-center">
                    有问题请联系我
                  </div>
                  <a
                    href={CONTACT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={CONTACT_URL}
                    className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-lg flex items-center justify-center border border-neutral-300 p-1.5"
                  >
                    <QRCodeSVG
                      value={CONTACT_URL}
                      size={120}
                      level="M"
                      className="w-full h-full"
                    />
                  </a>
                  <a
                    href={CONTACT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 hover:underline text-[10px] mt-1 text-center"
                  >
                    或点击此处打开
                  </a>
                </div>
                <div className="flex flex-col items-center min-w-0">
                  <div className="text-neutral-500 text-[11px] mb-1.5 text-center">
                    攻略
                  </div>
                  <a
                    href={WALKTHROUGH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={WALKTHROUGH_URL}
                    className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-lg flex items-center justify-center border border-neutral-300 p-1.5"
                  >
                    <QRCodeSVG
                      value={WALKTHROUGH_URL}
                      size={120}
                      level="M"
                      className="w-full h-full"
                    />
                  </a>
                  <a
                    href={WALKTHROUGH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 hover:underline text-[10px] mt-1 text-center"
                  >
                    或点击此处打开
                  </a>
                </div>
              </div>
              <div className="mt-3 text-[10px] text-neutral-400 text-right italic">
                by Tantanz
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
