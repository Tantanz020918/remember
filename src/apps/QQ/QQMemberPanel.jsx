import { ImagePlaceholder } from '../../components/ui'
import { ADMINS, MEMBERS, GROUP_MEMBER_COUNT } from '../../data/qqData'

export function QQMemberPanel({ onOpenAnnouncement, onSelectProfile }) {
  return (
    <div className="w-[240px] bg-white border-l border-sky-100 overflow-y-auto">
      <div className="px-3.5 py-2.5 font-semibold text-xs text-neutral-600 border-b border-neutral-200 flex justify-between">
        <span>群公告</span>
        <a className="text-sky-700 font-bold cursor-pointer hover:underline" onClick={onOpenAnnouncement}>查看</a>
      </div>
      <div className="px-3.5 py-2.5 font-semibold text-xs text-neutral-600 border-b border-neutral-200">
        群成员 {GROUP_MEMBER_COUNT}
      </div>
      <div>
        <div className="px-3.5 py-1.5 text-[11px] text-neutral-400 bg-neutral-50">管理员</div>
        {ADMINS.map((a) => (
          <div
            key={a.name}
            className="flex items-center gap-2 px-3.5 py-1.5 cursor-pointer hover:bg-sky-50/60"
            onClick={() => a.profileKey && onSelectProfile(a.profileKey)}
          >
            <ImagePlaceholder width={28} height={28} round label={false} from={a.from} to={a.to} />
            <span className="text-xs">{a.name}</span>
          </div>
        ))}
        <div className="px-3.5 py-1.5 text-[11px] text-neutral-400 bg-neutral-50">成员</div>
        {MEMBERS.map((m) => (
          <div key={m.name} className="flex items-center gap-2 px-3.5 py-1.5 hover:bg-sky-50/60">
            <ImagePlaceholder width={28} height={28} round label={false} from={m.from} to={m.to} />
            <span className="text-xs">{m.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
