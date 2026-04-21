import { Wechat } from '../apps/Wechat/Wechat'
import { QQ } from '../apps/QQ/QQ'
import { BaiduHome } from './baidu/BaiduHome'
import { BaiduResultBishan } from './baidu/BaiduResultBishan'
import { BaikeBishanEducation } from './bishan/BaikeBishanEducation'
import { BaiduResultJinhua } from './baidu/BaiduResultJinhua'
import { JinhuaHome } from './jinhua/JinhuaHome'
import { JinhuaAlumni } from './jinhua/JinhuaAlumni'
import { BaiduResultAobi } from './baidu/BaiduResultAobi'
import { BaitianHome } from './baitian/BaitianHome'
import { BaitianUserCaiqing } from './baitian/BaitianUserCaiqing'
import { BaitianPostCasting } from './baitian/BaitianPostCasting'
import { BaitianPostTransfer } from './baitian/BaitianPostTransfer'
import { BaitianPostPrincess } from './baitian/BaitianPostPrincess'
import { BaitianPostScript } from './baitian/BaitianPostScript'
import { BaitianPostEncrypted } from './baitian/BaitianPostEncrypted'
import { ForumPostDecode } from './baitian/ForumPostDecode'
import { CaiqingQZone } from './qzone/CaiqingQZone'
import { BishanConfessionWall } from './qzone/BishanConfessionWall'
import { RumenglingQZone } from './qzone/RumenglingQZone'
import { BaiduSearchPersonalSite } from './baidu/BaiduSearchPersonalSite'
import { PersonalSite } from './personalSite/PersonalSite'
// CaiqingQQChat merged into QQ component — PageId.QQ_CAIQING_CHAT reuses QQ
// CaiqingQZoneDiary merged into CaiqingQZone's Journal tab
import { BaiduSearchMengheFund } from './baidu/BaiduSearchMengheFund'
import { NewsMengheFund } from './news/NewsMengheFund'
import { BaiduSearchLiGroup } from './baidu/BaiduSearchLiGroup'
import { WeiboLiGroupPost } from './weibo/WeiboLiGroupPost'
import { MengheWeibo } from './weibo/MengheWeibo'
import { WeiboComingOfAge } from './weibo/WeiboComingOfAge'
import { WeiboFansPost1 } from './weibo/WeiboFansPost1'
import { WeiboFansPost2 } from './weibo/WeiboFansPost2'
import { WeiboDengFengShuo } from './weibo/WeiboDengFengShuo'
import { WeiboAnmian } from './weibo/WeiboAnmian'
import { LockedPost } from './weibo/LockedPost'
import { EndingForgive, EndingForgiveAlone, EndingSilence } from './ending/Ending'
import { BaiduSearchRongde } from './baidu/BaiduSearchRongde'
import { RongdeCenter } from './rongde/RongdeCenter'
import { WeiboLiGroupFamilyEdu } from './weibo/WeiboLiGroupFamilyEdu'
import { PageId } from './pageIds'

export const PAGES = {
  [PageId.DESKTOP]:                  { title: '桌面',                   path: null,                                       appType: 'desktop', render: () => null },
  [PageId.WECHAT]:                   { title: '微信',                   path: 'wechat',                                   appType: 'wechat',  render: () => <Wechat /> },
  [PageId.QQ]:                       { title: 'QQ',                     path: 'qq',                                       appType: 'qq',      render: () => <QQ /> },
  [PageId.BROWSER]:                  { title: '浏览器',                 path: 'browser',                                  appType: 'browser', render: () => <BaiduHome /> },
  [PageId.SEARCH_BISHAN]:            { title: '搜索「璧山」',           path: 'browser/search/bishan',                    appType: 'browser', render: () => <BaiduResultBishan /> },
  [PageId.BISHAN_EDUCATION]:         { title: '璧山区 · 教育设施',     path: 'browser/baike/bishan-education',           appType: 'browser', render: () => <BaikeBishanEducation /> },
  [PageId.SEARCH_JINHUA]:            { title: '搜索「金花小学」',       path: 'browser/search/jinhua-primary',            appType: 'browser', render: () => <BaiduResultJinhua /> },
  [PageId.JINHUA_HOME]:              { title: '金花小学官网',           path: 'browser/jinhua-primary',                   appType: 'browser', render: () => <JinhuaHome /> },
  [PageId.JINHUA_ALUMNI]:            { title: '金花小学 · 校友档案',   path: 'browser/jinhua-primary/alumni',            appType: 'browser', render: () => <JinhuaAlumni /> },
  [PageId.SEARCH_AOBI]:              { title: '搜索「奥比岛」',         path: 'browser/search/aobi',                      appType: 'browser', render: () => <BaiduResultAobi /> },
  [PageId.AOBI_HOME]:                { title: '奥比岛圈 · 首页',       path: 'browser/aobi',                             appType: 'browser', render: () => <BaitianHome /> },
  [PageId.AOBI_USER_CAIQING]:        { title: '奥比岛圈 · 采晴0826',   path: 'browser/aobi/user/caiqing0826',            appType: 'browser', render: () => <BaitianUserCaiqing /> },
  [PageId.POST_CASTING]:             { title: '奥比岛言情大戏招人',     path: 'browser/aobi/post/casting-call',           appType: 'browser', render: () => <BaitianPostCasting /> },
  [PageId.POST_TRANSFER]:            { title: '朋友转学了好伤心',       path: 'browser/aobi/post/friend-transferred',     appType: 'browser', render: () => <BaitianPostTransfer /> },
  [PageId.POST_PRINCESS]:            { title: '变身偶像设定集',         path: 'browser/aobi/post/princess',               appType: 'browser', render: () => <BaitianPostPrincess /> },
  [PageId.QQ_FANQUAN_GROUP]:         { title: '沐季千柠工作室粉丝群',   path: 'qq/group/mujiqianling',                    appType: 'qq',      render: () => <QQ /> },
  [PageId.POST_SCRIPT]:              { title: '永远的姐妹',             path: 'browser/aobi/post/eternal-sisters',        appType: 'browser', render: () => <BaitianPostScript /> },
  [PageId.POST_ENCRYPTED]:           { title: '百田加密帖子',           path: 'browser/aobi/post/encrypted-for-ruyue',    appType: 'browser', render: () => <BaitianPostEncrypted /> },
  [PageId.POST_DECODE]:              { title: '乱码科普帖',             path: 'browser/aobi/post/decode-guide',           appType: 'browser', render: () => <ForumPostDecode /> },
  [PageId.CAIQING_QZONE]:            { title: '采晴的 QQ 空间',         path: 'browser/qzone/caiqing',                    appType: 'browser', render: () => <CaiqingQZone /> },
  [PageId.BISHAN_CONFESSION_WALL]:   { title: '璧山中学表白墙',         path: 'browser/qzone/bishan-confession-wall',     appType: 'browser', render: () => <BishanConfessionWall /> },
  [PageId.RUMENGLING_QZONE]:         { title: '如梦令的 QQ 空间',       path: 'browser/qzone/rumengling',                 appType: 'browser', render: () => <RumenglingQZone /> },
  [PageId.SEARCH_PERSONAL_SITE]:     { title: '搜索「富士山下」',       path: 'browser/search/personal-site',             appType: 'browser', render: () => <BaiduSearchPersonalSite /> },
  [PageId.PERSONAL_SITE]:            { title: '富士山下埋葬的の❤',     path: 'browser/personal-site',                    appType: 'browser', render: () => <PersonalSite /> },
  [PageId.QQ_CAIQING_CHAT]:          { title: '采晴的 QQ 聊天',         path: 'qq/caiqing-chat',                          appType: 'qq',      render: () => <QQ /> },
  [PageId.SEARCH_MENGHE_FUND]:       { title: '搜索「梦和基金」',       path: 'browser/search/menghe-fund',               appType: 'browser', render: () => <BaiduSearchMengheFund /> },
  [PageId.NEWS_MENGHE_FUND]:         { title: '梦和基金新闻',           path: 'browser/news/menghe-fund',                 appType: 'browser', render: () => <NewsMengheFund /> },
  [PageId.SEARCH_LI_GROUP]:          { title: '搜索「李氏集团」',       path: 'browser/search/li-group',                  appType: 'browser', render: () => <BaiduSearchLiGroup /> },
  [PageId.WEIBO_LI_GROUP_POST]:      { title: '微博 · 李氏集团千金',   path: 'browser/weibo/post/li-group-princess',     appType: 'browser', render: () => <WeiboLiGroupPost /> },
  [PageId.MENGHE_WEIBO]:             { title: '梦和MH 微博',           path: 'browser/weibo/menghe-mh',                  appType: 'browser', render: () => <MengheWeibo /> },
  [PageId.WEIBO_COMING_OF_AGE]:      { title: '成人礼帖子',             path: 'browser/weibo/menghe-mh/coming-of-age',    appType: 'browser', render: () => <WeiboComingOfAge /> },
  [PageId.WEIBO_FANS_POST_1]:        { title: '粉丝可见帖子①',         path: 'browser/weibo/menghe-mh/fans-post-1',      appType: 'browser', render: () => <WeiboFansPost1 /> },
  [PageId.WEIBO_FANS_POST_2]:        { title: '粉丝可见帖子②',         path: 'browser/weibo/menghe-mh/fans-post-2',      appType: 'browser', render: () => <WeiboFansPost2 /> },
  [PageId.WEIBO_DENG_FENG_SHUO]:     { title: '等风说',                 path: 'browser/weibo/dengfengshuo',               appType: 'browser', render: () => <WeiboDengFengShuo /> },
  [PageId.WEIBO_ANMIAN]:             { title: '安眠',                   path: 'browser/weibo/anmian',                     appType: 'browser', render: () => <WeiboAnmian /> },
  [PageId.WEIBO_ANMIAN_LOCKED]:      { title: '安眠 · 原谅的请求',     path: 'browser/weibo/anmian/locked-post',         appType: 'browser', render: () => <LockedPost /> },
  [PageId.SEARCH_RONGDE]:            { title: '搜索「荣德心理咨询所」', path: 'browser/search/rongde',                    appType: 'browser', render: () => <BaiduSearchRongde /> },
  [PageId.RONGDE_CENTER]:            { title: '荣德心理咨询所',         path: 'browser/rongde',                           appType: 'browser', render: () => <RongdeCenter /> },
  [PageId.ENDING_FORGIVE]:           { title: '结局：我们原谅你',       path: 'ending/forgive',                           appType: 'default', render: () => <EndingForgive /> },
  [PageId.ENDING_FORGIVE_ALONE]:     { title: '结局：我原谅你',         path: 'ending/forgive-alone',                     appType: 'default', render: () => <EndingForgiveAlone /> },
  [PageId.ENDING_SILENCE]:           { title: '结局：沉默',             path: 'ending/silence',                           appType: 'default', render: () => <EndingSilence /> },
  [PageId.WEIBO_LI_GROUP_FAMILY_EDU]:{ title: '李氏集团家教观察',       path: 'browser/weibo/li-group-family-edu',        appType: 'browser', render: () => <WeiboLiGroupFamilyEdu /> },
  [PageId.WECHAT_MOMENTS]:           { title: '微信 · 朋友圈',          path: 'wechat/moments',                           appType: 'wechat',  render: () => <Wechat initialView="moments" /> },
}

export const PATH_TO_ID = {}
for (const [id, page] of Object.entries(PAGES)) {
  if (page.path) PATH_TO_ID[page.path] = Number(id)
}
