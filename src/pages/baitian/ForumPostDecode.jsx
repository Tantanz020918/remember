import { BrowserFrame } from '../../browser/BrowserFrame'
import { BaitianFrame } from '../../browser/BaitianFrame'
import { ForumFloor } from './ForumFloor'

export function ForumPostDecode() {
  return (
    <BrowserFrame>
      <BaitianFrame>
        <div className="bg-white rounded-lg border border-pink-200 overflow-hidden">
          <div className="px-5 py-3.5 bg-linear-to-r from-pink-100 to-white text-[17px] font-bold text-[#d16b8a] border-b-2 border-[#e891b0]">
            为什么我打开游戏一堆乱码？
          </div>
          <ForumFloor
            avatarName=""
            avatarFrom="#ffe7b3"
            avatarTo="#ffb86b"
            userName="小糊涂"
            userLv="Lv.3"
            meta="1 楼 · 2013-04-22 18:07"
          >
            <p>救命啊！我在游戏里收到一封信，但是打开全是乱码，像这样：</p>
            <p className="my-2 px-3 py-2 bg-neutral-100 rounded font-mono text-xs break-all">
              涓€涓贡鐮佺殑瀹炰緥
            </p>
            <p>完全看不懂啊！！有没有大佬知道这是什么意思？？</p>
          </ForumFloor>
          <ForumFloor
            avatarName=""
            avatarFrom="#c1e8ff"
            avatarTo="#6ec4f7"
            userName="技术小达人"
            userLv="Lv.20"
            userSign="版主"
            meta="2 楼 · 2013-04-22 19:33"
          >
            <p>这是典型的编码错误，UTF-8 的文字被用 GBK 的方式打开了，所以变成了乱码。</p>
            <p className="mt-2">你可以去网上搜一下「在线乱码恢复工具」或者「UTF-8 转 GBK 乱码恢复」，把这段乱码贴进去就能看到原文了。</p>
          </ForumFloor>
          <ForumFloor
            avatarName=""
            avatarFrom="#ffe7b3"
            avatarTo="#ffb86b"
            userName="小糊涂"
            meta="3 楼 · 2013-04-22 20:15"
            subReplies={[
              {
                userName: '技术小达人',
                replyTo: '小糊涂',
                content: '自己去搜，上面说了方法了。',
              },
            ]}
          >
            <p>大佬能不能直接帮我解一下呀，我不太会弄这些工具……</p>
          </ForumFloor>
          <ForumFloor
            avatarName=""
            avatarFrom="#d4f0c2"
            avatarTo="#8cd07d"
            userName="路过的"
            meta="4 楼"
          >
            <p>学到了学到了！</p>
          </ForumFloor>
        </div>
      </BaitianFrame>
    </BrowserFrame>
  )
}
