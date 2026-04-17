import { BrowserFrame } from '../../browser/BrowserFrame'
import { Keyword, StoryLink, DeadLink, ImagePlaceholder } from '../../components/ui'

function NewsCard({ imageFrom, imageTo, imageName, title, date }) {
  return (
    <div className="bg-white border border-neutral-200 rounded overflow-hidden cursor-pointer hover:shadow-md">
      <ImagePlaceholder
        name={imageName}
        width="100%"
        height={100}
        from={imageFrom}
        to={imageTo}
        style={{ width: '100%', borderRadius: 0 }}
      />
      <div className="px-2.5 py-2 text-xs font-semibold leading-snug">{title}</div>
      <div className="px-2.5 pb-2 text-neutral-400 text-[11px]">{date}</div>
    </div>
  )
}

export function JinhuaHome() {
  return (
    <BrowserFrame>
      <div className="bg-white text-[13px]">
        <div className="flex items-center gap-3.5 px-7 py-3.5 bg-linear-to-br from-[#fff3cd] to-[#ffe0a3] border-b-4 border-[#f5a8a0]">
          <ImagePlaceholder
            name="校徽"
            width={56}
            height={56}
            from="#ff9800"
            to="#ffc107"
            round
            label={false}
          />
          <div>
            <h1 className="text-[22px] text-[#c43f1f] tracking-wider font-semibold">
              璧山区金花小学
            </h1>
            <div className="text-[11px] text-[#a0633e]">
              Jinhua Primary School · 求真 · 向善 · 尚美
            </div>
          </div>
          <div className="flex-1" />
        </div>
        <div className="flex gap-6 px-7 py-3 bg-[#c43f1f] text-white text-[13px]">
          <a className="font-bold underline cursor-pointer">首页</a>
          <a className="cursor-pointer hover:opacity-80">学校概况</a>
          <a className="cursor-pointer hover:opacity-80">师资风采</a>
          <a className="cursor-pointer hover:opacity-80">新闻动态</a>
          <a className="cursor-pointer hover:opacity-80">教学科研</a>
          <a className="cursor-pointer hover:opacity-80">德育天地</a>
          <StoryLink to={9} className="text-white!">
            校友档案
          </StoryLink>
          <a className="cursor-pointer hover:opacity-80">联系我们</a>
        </div>
        <ImagePlaceholder
          name="校园全景"
          width="100%"
          height={220}
          from="#4fc3f7"
          to="#66bb6a"
          style={{ width: '100%', borderRadius: 0 }}
        />
        <div className="grid grid-cols-[2fr_1fr] gap-5 px-7 py-5">
          <div>
            <div className="mb-6">
              <div className="flex justify-between items-center pb-2 border-b-2 border-[#c43f1f] mb-3">
                <h3 className="text-[15px] text-[#c43f1f] font-bold">学校新闻</h3>
                <span className="text-neutral-400 text-xs">更多 &gt;</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <NewsCard
                  imageName="新闻图 1"
                  imageFrom="#ffe0a3"
                  imageTo="#ffa872"
                  title="我校成功举办第十二届艺术节"
                  date="2025-11-20"
                />
                <NewsCard
                  imageName="新闻图 2"
                  imageFrom="#c5e1a5"
                  imageTo="#66bb6a"
                  title="区级作文比赛我校学生包揽前三"
                  date="2025-10-15"
                />
                <NewsCard
                  imageName="新闻图 3"
                  imageFrom="#b3e5fc"
                  imageTo="#4fc3f7"
                  title="「家校共育」主题讲座顺利开展"
                  date="2025-09-28"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center pb-2 border-b-2 border-[#c43f1f] mb-3">
                <h3 className="text-[15px] text-[#c43f1f] font-bold">通知公告</h3>
                <span className="text-neutral-400 text-xs">更多 &gt;</span>
              </div>
              <ul className="list-none">
                <li className="flex justify-between py-2 border-b border-dashed border-neutral-200 text-[13px]">
                  <DeadLink>· 关于 2026 年春季运动会的通知</DeadLink>
                  <span className="text-neutral-400 text-[11px]">2026-03-12</span>
                </li>
                <li className="flex justify-between py-2 border-b border-dashed border-neutral-200 text-[13px]">
                  <DeadLink>· 金花小学 2026 新学期课程安排</DeadLink>
                  <span className="text-neutral-400 text-[11px]">2026-02-25</span>
                </li>
                <li className="flex justify-between py-2 border-b border-dashed border-neutral-200 text-[13px]">
                  <DeadLink>· 关于开展安全教育月活动的通知</DeadLink>
                  <span className="text-neutral-400 text-[11px]">2026-02-10</span>
                </li>
                <li className="flex justify-between py-2 border-b border-dashed border-neutral-200 text-[13px]">
                  <DeadLink>· 2025-2026 学年第一学期期末工作安排</DeadLink>
                  <span className="text-neutral-400 text-[11px]">2026-01-06</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="bg-amber-50/60 border border-amber-200 rounded p-3.5 mb-4">
              <h3 className="text-sm text-[#c43f1f] mb-2.5 pb-1.5 border-b border-amber-200 font-bold">
                管理团队
              </h3>
              <div className="flex justify-between py-1 text-xs">
                <b className="text-neutral-500 font-normal">校　长</b>
                <span>
                  周建
                </span>
              </div>
              <div className="flex justify-between py-1 text-xs">
                <b className="text-neutral-500 font-normal">副校长</b>
                <span>李 明</span>
              </div>
              <div className="flex justify-between py-1 text-xs">
                <b className="text-neutral-500 font-normal">副校长</b>
                <span>陈晓红</span>
              </div>
              <div className="flex justify-between py-1 text-xs">
                <b className="text-neutral-500 font-normal">教务主任</b>
                <span>张 华</span>
              </div>
              <div className="flex justify-between py-1 text-xs">
                <b className="text-neutral-500 font-normal">德育主任</b>
                <span>王 丽</span>
              </div>
            </div>
            <div className="bg-amber-50/60 border border-amber-200 rounded p-3.5 mb-4">
              <h3 className="text-sm text-[#c43f1f] mb-2.5 pb-1.5 border-b border-amber-200 font-bold">
                校友档案
              </h3>
              <p className="text-xs text-neutral-600">
                金花小学建校 70 余年，校友遍布各行各业。欢迎校友{' '}
                <StoryLink to={9}>登记查询</StoryLink>。
              </p>
            </div>
            <div className="bg-amber-50/60 border border-amber-200 rounded p-3.5">
              <h3 className="text-sm text-[#c43f1f] mb-2.5 pb-1.5 border-b border-amber-200 font-bold">
                快捷入口
              </h3>
              <div className="flex flex-col gap-1.5 text-xs">
                <DeadLink>教务系统</DeadLink>
                <DeadLink>教师 OA</DeadLink>
                <DeadLink>在线图书馆</DeadLink>
                <DeadLink>安全教育平台</DeadLink>
              </div>
            </div>
          </div>
        </div>
        <div className="px-7 py-4 bg-[#c43f1f] text-white text-center text-[11px]">
          © 2026 璧山区金花小学 · 渝 ICP 备 xxxxxxxx 号 · 地址：重庆市璧山区金花路 88 号
        </div>
      </div>
    </BrowserFrame>
  )
}
