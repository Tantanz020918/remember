import { useState } from 'react'
import { useGameNavigate } from '../../hooks/useGameNavigate'
import { BrowserFrame } from '../../browser/BrowserFrame'

const HOT_ITEMS = [
  { rank: 1, text: '五一假期出行指南' },
  { rank: 2, text: '今日股市三大指数震荡' },
  { rank: 3, text: '新能源汽车补贴政策延续至年底' },
  { rank: 4, text: '春季养生食谱推荐' },
  { rank: 5, text: '全国高温预警地图' },
  { rank: 6, text: '考研报名时间确定' },
  { rank: 7, text: '中国女排 3:0 横扫对手' },
  { rank: 8, text: '社保缴费基数调整通知' },
]

const QUERY_TO_PAGE = {
  璧山: 5,
  金花小学: 7,
  奥比岛: 10,
  富士山下: 20,
  梦之奖学金: 23,
  李氏集团: 25,
}

export function BaiduHome() {
  const navigate = useGameNavigate()
  const [query, setQuery] = useState('')
  const [noResult, setNoResult] = useState(false)

  const search = () => {
    const q = query.trim()
    const pageId = QUERY_TO_PAGE[q]
    if (pageId) {
      setNoResult(false)
      navigate(pageId)
    } else {
      setNoResult(true)
    }
  }

  return (
    <BrowserFrame>
      <div className="min-h-full bg-white">
        <div className="flex items-center gap-5 px-7 py-4 text-[13px] text-neutral-700">
          <a className="cursor-pointer hover:text-sky-500">新闻</a>
          <a className="cursor-pointer hover:text-sky-500">hao123</a>
          <a className="cursor-pointer hover:text-sky-500">地图</a>
          <a className="cursor-pointer hover:text-sky-500">贴吧</a>
          <a className="cursor-pointer hover:text-sky-500">视频</a>
          <a className="cursor-pointer hover:text-sky-500">图片</a>
          <a className="cursor-pointer hover:text-sky-500">网盘</a>
          <a className="cursor-pointer hover:text-sky-500">文库</a>
          <a className="cursor-pointer hover:text-sky-500">文心</a>
          <a className="cursor-pointer hover:text-sky-500">更多</a>
          <div className="flex-1" />
          <a className="cursor-pointer">设置</a>
          <a className="cursor-pointer px-4 py-1 bg-sky-500 text-white rounded">登录</a>
        </div>
        <div className="flex flex-col items-center pt-12 pb-10 px-5">
          <div className="text-5xl font-bold tracking-wide text-[#2932e1] mb-6">
            Bai<span className="text-pink-500">du</span>百度
          </div>
          <div className="flex w-[640px] max-w-[90%] border-2 border-sky-500 rounded-xl overflow-hidden shadow-sm">
            <input
              className="flex-1 border-none outline-none px-5 py-3.5 text-[15px]"
              placeholder="搜索一下"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setNoResult(false) }}
              onKeyDown={(e) => e.key === 'Enter' && search()}
            />
            <button
              onClick={search}
              className="bg-sky-500 text-white border-none px-7 text-[15px] cursor-pointer"
            >
              百度一下
            </button>
          </div>
          {noResult && (
            <div className="w-[640px] max-w-[90%] mt-2.5 text-neutral-500 text-[13px]">
              没有找到与「{query.trim()}」相关的结果，请换个关键词试试。
            </div>
          )}
          <div className="w-[640px] max-w-[90%] mt-10">
            <div className="flex justify-between items-center py-2.5 font-semibold text-sm border-b border-neutral-200 mb-2.5">
              <span>百度热搜</span>
              <span className="text-neutral-400 text-xs">换一换 &gt;</span>
            </div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-1">
              {HOT_ITEMS.map((item) => (
                <div
                  key={item.rank}
                  className="flex items-center gap-2.5 py-2 text-[13px] text-neutral-700 cursor-pointer hover:text-sky-500"
                >
                  <span
                    className={`w-[18px] text-center font-bold ${
                      item.rank === 1
                        ? 'text-red-500'
                        : item.rank === 2
                        ? 'text-orange-500'
                        : item.rank === 3
                        ? 'text-yellow-500'
                        : 'text-neutral-400'
                    }`}
                  >
                    {item.rank}
                  </span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}
