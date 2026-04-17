import { Keyword, Modal, Tooltip } from '../../components/ui'

export function TongxueluModal({ onClose }) {
  return (
    <Modal onClose={onClose} backdropClass="bg-black/70">
      <div className="max-w-[90%] max-h-[90%]">
        <div className="flex gap-4 p-6 rounded-lg bg-linear-to-br from-[#fff2cc] to-[#ffd8a8] shadow-2xl">
          <div className="flex-1 bg-[#fffdf5] px-6 py-8 shadow font-serif text-[15px] leading-loose relative min-h-[320px] min-w-[260px]">
            <p>好姐妹一bei子，</p>
            <p>
              你有了电脸一定要来{' '}
              <Tooltip text="这里好像写错字了，应该是个游戏">
                <Keyword>
                  <span className="italic text-[20px]">ao比鸟</span>
                </Keyword>
              </Tooltip>{' '}
              加我好友，
            </p>
            <p>
              我的号：<Keyword>采晴0826</Keyword>，受你❤
            </p>
          </div>
          <div className="flex-1 bg-[#fffdf5] px-6 py-8 shadow font-serif text-[15px] leading-loose relative min-h-[320px] min-w-[260px]">
            <p>等你去了新学校，</p>
            <p>一定要想我们！！</p>
            <p className="text-right mt-10">
              —— 你的好姐妹，<Keyword>梦</Keyword>
            </p>
          </div>
        </div>
        <div className="text-center mt-3">
          <button
            className="px-5 py-2 bg-white/20 text-white border border-white/30 rounded-lg cursor-pointer text-sm backdrop-blur-sm"
            onClick={onClose}
          >
            关闭
          </button>
        </div>
      </div>
    </Modal>
  )
}
