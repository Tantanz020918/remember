import { useState } from 'react'
import { Keyword, ImagePlaceholder } from '../../components/ui'

const XHS_URL = 'http://sns-na-i1.xhscdn.com/spectrum/1040g34o31v17dn5ljm004aag908von0h4cnphqo?imageView2/2/w/1080/format/jpg&origin=0'

// 兜底：外部图片加载失败时用项目内 HTML 样式渲染同学录内容
function TongxueluFallback() {
  return (
    <div className="flex gap-4 p-6 rounded-lg bg-linear-to-br from-[#fff2cc] to-[#ffd8a8] shadow-2xl">
      <div className="flex-1 bg-[#fffdf5] px-6 py-8 shadow font-serif text-[15px] leading-loose relative min-h-[320px] min-w-[260px]">
        <p>好姐妹一bei子，</p>
        <p>你有了电脸一定要来 <Keyword>ao比鸟</Keyword> 加我好友，</p>
        <p>我的号：<Keyword>采晴0826</Keyword>，受你❤</p>
        <div className="absolute bottom-6 right-6">
          <ImagePlaceholder name="阿狸涂鸦" width={50} height={50} from="#ffb3b3" to="#ff6b6b" />
        </div>
      </div>
      <div className="flex-1 bg-[#fffdf5] px-6 py-8 shadow font-serif text-[15px] leading-loose relative min-h-[320px] min-w-[260px]">
        <p>等你去了新学校，</p>
        <p>一定要想我们！！</p>
        <p className="text-right mt-10">—— 你的好姐妹，<Keyword>梦</Keyword></p>
      </div>
    </div>
  )
}

export function TongxueluModal({ onClose }) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[1000]"
      onClick={onClose}
    >
      <div
        className="max-w-[90%] max-h-[90%]"
        onClick={(e) => e.stopPropagation()}
      >
        {imgFailed ? (
          <TongxueluFallback />
        ) : (
          <img
            src={XHS_URL}
            alt="同学录"
            onError={() => setImgFailed(true)}
            className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
          />
        )}
        <div className="text-center mt-3">
          <button
            className="px-5 py-2 bg-white/20 text-white border border-white/30 rounded-lg cursor-pointer text-sm backdrop-blur-sm"
            onClick={onClose}
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  )
}
