import { useState } from 'react'
import { BrowserFrame } from '../../browser/BrowserFrame'
import { useGameNavigate } from '../../hooks/useGameNavigate'
import { WeiboFrame, WeiboProfileHeader, WeiboPost } from '../../browser/WeiboFrame'
import { ImagePlaceholder, Modal } from '../../components/ui'
import { getReport, ReportCard } from '../../data/rongdeReports'
import { PageId } from '../pageIds'

const POEM = `月亮，你看我，我也看你。
你依旧皎洁，可我已满身污浊。
因为我作恶太多，你的光照不进我荒芜的余生。
月亮，你为何不语？
是你看穿了我的贪婪，还是你在悲悯我的一无所有？
在这冷寂的夜，我拥抱不到任何人，只能在你的注视下，守着我那洗不净的悲伤。`

export function WeiboAnmian() {
  const navigate = useGameNavigate()
  const [showReport, setShowReport] = useState(false)
  const report2021 = getReport('2022-02')

  return (
    <BrowserFrame>
      <WeiboFrame>
        <WeiboProfileHeader
          name="安眠"
          bio=""
          followCount="3"
          fansCount="0"
          postCount="3"
          bgFrom="#dfe6e9"
          bgTo="#b2bec3"
        >
          <button className="px-5 py-1.5 bg-orange-500 text-white rounded-full text-sm cursor-pointer border-none font-medium">+ 关注</button>
        </WeiboProfileHeader>

        <WeiboPost
          author="安眠"
          time="2022-02-07"
          authorFrom="#dfe6e9"
          authorTo="#b2bec3"
        >
         我真的走出来了吗
          <div className="mt-2">
            <ImagePlaceholder
              name="心理咨询报告（点击查看大图）"
              width={260}
              height={180}
              from="#c1e8ff"
              to="#e4d4ff"
              onClick={() => setShowReport(true)}
            />
          </div>
        </WeiboPost>

        <WeiboPost
          author="安眠"
          time="2022-01-04"
          authorFrom="#dfe6e9"
          authorTo="#b2bec3"
          onClick={() => navigate(PageId.WEIBO_ANMIAN_LOCKED)}
        >
          在我18岁那年……
          <div className="text-neutral-400 text-xs mt-1">[点击查看全文]</div>
        </WeiboPost>

        <WeiboPost
          author="安眠"
          time="2021-12-31"
          authorFrom="#dfe6e9"
          authorTo="#b2bec3"
        >
          <div className="italic text-neutral-700 whitespace-pre-line leading-loose text-[13px]">
            {POEM}
          </div>
        </WeiboPost>

      </WeiboFrame>

      {showReport && report2021 && (
        <Modal onClose={() => setShowReport(false)}>
          <ReportCard report={report2021} />
        </Modal>
      )}
    </BrowserFrame>
  )
}
