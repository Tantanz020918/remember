import { BrowserFrame } from '../../browser/BrowserFrame'
import { BaitianFrame } from '../../browser/BaitianFrame'
import { Keyword } from '../../components/ui'
import { ForumFloor } from './ForumFloor'

export function BaitianPostScript() {
  return (
    <BrowserFrame>
      <BaitianFrame>
        <div className="bg-white rounded-lg border border-pink-200 overflow-hidden">
          <div className="px-5 py-3.5 bg-linear-to-r from-pink-100 to-white text-[17px] font-bold text-[#d16b8a] border-b-2 border-[#e891b0]">
            《永远的姐妹》人物设定 & 剧情梗概
          </div>
          <ForumFloor
            owner
            avatarName="闺蜜头像2"
            avatarFrom="#c8f0b8"
            avatarTo="#8ed687"
            userName="薄荷夏天"
            userLv="Lv.6"
            userSign="编剧+女主"
            meta="发布于 2013-01-02 21:05"
          >
            <h4 className="mt-3 mb-2 text-[#d16b8a] text-sm font-bold border-b border-pink-100 pb-1">
              人物设定
            </h4>
            <div className="py-1.5 leading-loose text-[13px]">
              <b>慕容梦和</b>（女主）：温柔善良、重感情，<Keyword>四年才过一次生日</Keyword>，家境殷实但总觉得孤单。转学生姚月儿来到班上后，她把对方当成最好的朋友。
            </div>
            <div className="py-1.5 leading-loose text-[13px]">
              <b>李采殇</b>：活泼开朗，和慕容梦和从小一起长大，喜欢画画。
            </div>
            <div className="py-1.5 leading-loose text-[13px]">
              <b>姚月儿</b>：美丽聪明的转学生，表面乖巧，内心却嫉妒慕容梦和和李采殇的感情。
            </div>
            <div className="py-1.5 leading-loose text-[13px]">
              <b>陆远</b>：全校最受欢迎的男生，正直、善良、会打篮球。
            </div>
            <div className="py-1.5 leading-loose text-[13px]">
              <b>花痴 A / B / C</b>：班上一群爱起哄的女生。
            </div>
            <h4 className="mt-4 mb-2 text-[#d16b8a] text-sm font-bold border-b border-pink-100 pb-1">
              剧情梗概
            </h4>
            <p>
              姚月儿转学到奥比岛贵族学校，很快和慕容梦和、李采殇成为好朋友。
              但她暗暗嫉妒两人之间更深的感情，于是故意制造误会，让李采殇以为慕容梦和在背后说她坏话，两人渐行渐远。
            </p>
            <p>
              陆远偶然撞见姚月儿挑拨的一幕，告诉了慕容梦和真相。
              慕容梦和痛苦之后，决定原谅姚月儿——
            </p>
            <p className="italic text-neutral-500 px-3.5 py-2 bg-pink-50/70 border-l-[3px] border-[#e891b0] my-2">
              （内心独白）对不起，月儿，如果你需要我，我还是愿意做你的朋友。
              我们三个人，应该是<Keyword>永远的姐妹</Keyword>。
            </p>
            <p>最后，在慕容梦和18岁的生日宴席上，三人重归于好，陆远也在一次球赛后对慕容梦和表白成功。全剧终。</p>
            <div className="mt-3.5 text-center text-neutral-400 text-[11px]">
              —— 待续，剧本第一幕请期待 ——
            </div>
          </ForumFloor>
          <ForumFloor
            avatarName=""
            avatarFrom="#c1e8ff"
            avatarTo="#6ec4f7"
            userName="糖糖不吃糖"
            meta="2 楼"
          >
            <p>呜呜呜好感动！！慕容梦和好勇敢😭</p>
          </ForumFloor>
          <ForumFloor
            avatarName=""
            avatarFrom="#ffe7b3"
            avatarTo="#ffb86b"
            userName="奥比小王子"
            meta="3 楼"
          >
            <p>男主还招人吗！我超会打篮球的！</p>
            <div className="mt-1.5 pl-3 border-l-2 border-pink-200 text-xs text-neutral-500">
              <span className="text-[#d16b8a] font-medium">薄荷夏天</span> 回复：已经有人啦，下部戏优先考虑你～
            </div>
          </ForumFloor>
          <ForumFloor
            avatarName=""
            avatarFrom="#e4d4ff"
            avatarTo="#a97bf5"
            userName="清风"
            meta="4 楼"
          >
            <p>剧名好好听，期待更新！</p>
          </ForumFloor>
          <ForumFloor
            avatarName=""
            avatarFrom="#fff4b3"
            avatarTo="#f5c542"
            userName="小鱼干"
            meta="5 楼"
          >
            <p>花痴ABC笑死我了哈哈哈哈</p>
          </ForumFloor>
        </div>
      </BaitianFrame>
    </BrowserFrame>
  )
}
