import { Keyword, Modal } from '../../components/ui'

export function QQAnnouncementModal({ onClose, onViewDetails }) {
  return (
    <Modal onClose={onClose}>
      <div className="bg-white px-6 py-5 rounded-[10px] min-w-[360px]">
        <h3 className="font-bold mb-2.5">群公告</h3>
        <div className="text-[11px] text-neutral-500 mb-2">发布者：编剧+女主 · 2013-01-02 21:05</div>
        <div className="leading-relaxed text-neutral-700">
          新戏「<Keyword>永远的姐妹</Keyword>」人物设定已经整理好啦，有意见可提出——
          <div className="mt-2.5">
            <a className="text-sky-700 font-bold cursor-pointer hover:underline" onClick={onViewDetails}>
              点击查看详情 &gt;&gt;
            </a>
          </div>
        </div>
        <div className="mt-3">
          <button onClick={onClose} className="px-4 py-1.5 bg-sky-500 text-white rounded border-none cursor-pointer text-[13px]">关闭</button>
        </div>
      </div>
    </Modal>
  )
}
