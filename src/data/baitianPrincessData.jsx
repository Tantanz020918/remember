export const PRINCESS_FLOORS = [
  {
    owner: true,
    avatarName: '闺蜜头像 1',
    avatarFrom: '#ffccee',
    avatarTo: '#ff99cc',
    userName: '采晴0826',
    userLv: 'Lv.10',
    meta: '1 楼 · 2012-07-19 22:08',
    content: (
      <>
        <p>三位来自天使国的公主</p>
        <div className="my-3 space-y-3">
          <div className="p-3 rounded-lg bg-pink-50 border border-pink-200">
            <p className="font-bold text-[#d16b8a]">🌸 樱花公主「薰」</p>
            <p className="text-sm leading-loose mt-1">
              住在一整片会下雪的樱花林里。能让触碰过的东西开花——包括石头。
              害怕离别，所以一辈子都不会离开樱花林。
              最喜欢吃樱花果酱、樱花糖、樱花糕。
              眼泪会化成樱花。
            </p>
          </div>
          <div className="p-3 rounded-lg bg-sky-50 border border-sky-200">
            <p className="font-bold text-sky-700">⭐ 星辰公主「熠」</p>
            <p className="text-sm leading-loose mt-1">
              头发上有很多星星，亮晶晶的。
              会召唤流星，但必须把许愿人的秘密也一起收走。
              最喜欢的零食是会在嘴里化成小星星的跳跳糖。
            </p>
          </div>
          <div className="p-3 rounded-lg bg-cyan-50 border border-cyan-200">
            <p className="font-bold text-cyan-700">🐚 海螺公主「珣」</p>
            <p className="text-sm leading-loose mt-1">
              生活在最深最深的海里，城堡是巨型粉色海螺。
              能听懂鱼说话，能够上岸把尾巴化成脚走路。
              金色短发，有许多珍珠点缀。
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    avatarFrom: '#e4d4ff',
    avatarTo: '#a97bf5',
    userName: '路过的',
    meta: '2 楼 · 2012-07-20 00:11',
    content: <p>好玛丽苏……</p>,
    subReplies: [
      { userName: '采晴0826', replyTo: '路过的', content: '你懂什么 🙄' },
    ],
  },
]
