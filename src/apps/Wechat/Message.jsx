import { ImagePlaceholder } from '../../components/ui'
import { spriteForUser } from '../../assets/imageUrls'

export function Message({ mine, name, children }) {
  return (
    <div className={`flex gap-2.5 my-2.5 items-start ${mine ? 'flex-row-reverse' : ''}`}>
      <ImagePlaceholder sprite={spriteForUser(name)} width={36} height={36} label={false} style={{ borderRadius: 6 }} />
      <div className="max-w-[60%]">
        <div
          className={`${
            mine ? 'bg-[#95ec69]' : 'bg-white'
          } px-3 py-2.5 rounded-md leading-relaxed break-words`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
