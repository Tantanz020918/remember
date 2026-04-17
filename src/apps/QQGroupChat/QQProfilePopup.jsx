import { ImagePlaceholder, Modal } from '../../components/ui'

const PROFILE_DATA = {
  caiqing: {
    name: '灬时空转角、盛夏落幕╮',
    qq: '297752020',
    status: '💗 恋爱中',
    avatarName: '阿狸大图',
    avatarFrom: '#ffb3b3',
    avatarTo: '#ff6b6b',
    rows: [
      { label: '等级', value: '🌞🌜⭐⭐⭐' },
      { label: '特权', value: '👑 ❤ 💎 🎵 📕' },
      { label: '群聊', value: '超级小老鼠（五线路妈妈）' },
      { label: '签名', value: '百事可乐' },
      { label: '性格标签', value: '阿尔汉格尔斯克' },
    ],
    showQzone: true,
  },
  bianju: {
    name: '编剧（想拍戏加我好友）',
    qq: '138xxxx56',
    avatarFrom: '#d4f0c2',
    avatarTo: '#8cd07d',
    rows: [{ label: '签名', value: '（资料已隐藏）' }],
  },
  zhubo: {
    name: '沐季千柠',
    qq: '100001',
    avatarFrom: '#ffd1dc',
    avatarTo: '#ff9aa2',
    rows: [{ label: '签名', value: '（资料已隐藏）' }],
  },
}

export function QQProfilePopup({ profileKey, onClose }) {
  const data = PROFILE_DATA[profileKey]
  if (!data) return null

  return (
    <Modal onClose={onClose}>
      <div className="w-[340px] bg-white rounded-xl overflow-hidden shadow-2xl relative">
        <div className="bg-linear-to-br from-sky-400 to-sky-600 text-white text-center pt-7 pb-5 px-5 relative">
          <div className="inline-block">
            <ImagePlaceholder
              name={data.avatarName}
              width={120}
              height={120}
              from={data.avatarFrom}
              to={data.avatarTo}
              round
              label={false}
              className="shadow-lg"
            />
          </div>
          <div className="mt-3">
            <h2 className="text-lg font-bold mb-1">{data.name}</h2>
            <div className="text-xs opacity-85">QQ {data.qq}</div>
            {data.status && (
              <div className="inline-block mt-2 bg-white/20 px-2.5 py-0.5 rounded-full text-xs">
                {data.status}
              </div>
            )}
          </div>
        </div>
        <div className="px-6 pt-3.5 pb-1.5">
          {data.rows.map((row) => (
            <div
              key={row.label}
              className="flex py-2 border-b border-neutral-100 text-[13px] items-center"
            >
              <b className="w-[70px] text-neutral-500 font-normal">{row.label}</b>
              <span className="flex-1 text-neutral-700">{row.value}</span>
            </div>
          ))}
          {data.showQzone && (
            <div className="flex py-2 text-[13px] items-center">
              <b className="w-[70px] text-neutral-500 font-normal">QQ 空间</b>
              <span className="flex gap-1">
                <ImagePlaceholder width={28} height={28} from="#ffd1dc" to="#ff9aa2" label={false} />
                <ImagePlaceholder width={28} height={28} from="#c1e8ff" to="#6ec4f7" label={false} />
                <ImagePlaceholder width={28} height={28} from="#d4f0c2" to="#8cd07d" label={false} />
              </span>
            </div>
          )}
        </div>
        <button className="block w-[calc(100%-44px)] mx-auto mt-3.5 mb-5 py-3 bg-linear-to-br from-sky-400 to-sky-600 text-white border-none rounded-full text-sm font-semibold cursor-pointer">
          发消息
        </button>
        <div
          className="absolute top-2.5 right-3.5 text-white text-2xl cursor-pointer opacity-80 z-10"
          onClick={onClose}
        >
          ×
        </div>
      </div>
    </Modal>
  )
}
