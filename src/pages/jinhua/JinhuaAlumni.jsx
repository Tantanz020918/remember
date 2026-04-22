import { useState } from 'react'
import { BrowserFrame } from '../../browser/BrowserFrame'
import { Keyword, ImagePlaceholder } from '../../components/ui'
import { JinhuaChrome } from './JinhuaChrome'

export function JinhuaAlumni() {
  const [year, setYear] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const submit = () => {
    if (year.trim() === '2014') {
      setShowResult(true)
      setErrorMsg('')
    } else {
      setShowResult(false)
      setErrorMsg('暂无相关档案，请确认届别。')
    }
  }

  return (
    <BrowserFrame>
      <div className="bg-white text-[13px]">
        <JinhuaChrome
          active="alumni"
          subtitleZh="璧山区金花小学 · 校友档案"
          subtitleEn="Alumni Archive"
        />
        <div className="px-4 md:px-10 pt-4 md:pt-5 pb-8 md:pb-10 max-w-[820px]">
          <h3 className="font-bold mb-2.5">毕业照查询</h3>
          <p className="text-neutral-600 text-[13px]">请输入届别（4 位年份），例如：2001</p>
          <div className="flex gap-2.5 my-3.5">
            <input
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="届别"
              className="px-3 py-2 border border-neutral-300 rounded text-[13px] outline-none"
            />
            <button
              onClick={submit}
              className="px-5 py-2 bg-[#c43f1f] text-white border-none rounded cursor-pointer"
            >
              查询
            </button>
          </div>
          {errorMsg && <div className="text-red-600 text-[13px]">{errorMsg}</div>}
          {showResult && (
            <div className="mt-5">
              <div className="mb-2.5 text-[13px] text-neutral-600">
                2014 届毕业合影 · 六年级 (2) 班
              </div>
              <ImagePlaceholder
                name="2014 届毕业合影"
                width="100%"
                height={260}
                from="#a8d0e6"
                to="#ffd1a4"
                style={{ width: '100%' }}
              />
              <div className="mt-3 leading-loose font-mono bg-neutral-50 px-3.5 py-2.5 rounded">
                <div>第一排：王思琪 张浩然 刘雅婷 陈子涵 赵小雨 周明辉 吴佳怡</div>
                <div>
                  第二排：孙伟杰 黄诗涵 林志豪 <Keyword>胡采晴</Keyword> <Keyword>李梦和</Keyword> 杨雨萱 郑凯文
                </div>
                <div>第三排：何思远 马欣怡 罗天宇 谢语嫣 唐浩宇 韩雪莹 曾一凡</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </BrowserFrame>
  )
}
