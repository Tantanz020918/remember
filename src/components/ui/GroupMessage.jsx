import { ImagePlaceholder } from './ImagePlaceholder'

export function GroupMessage({ avatarFrom, avatarTo, name, time, children }) {
  return (
    <div className="flex gap-2.5 my-2.5 items-start">
      <ImagePlaceholder width={36} height={36} from={avatarFrom} to={avatarTo} round label={false} />
      <div className="max-w-[70%]">
        <div className="text-[11px] text-neutral-500 mb-1">
          {name}<span className="ml-1.5 text-neutral-300">{time}</span>
        </div>
        <div className="bg-white px-3 py-2.5 rounded border border-sky-100 leading-relaxed">{children}</div>
      </div>
    </div>
  )
}
