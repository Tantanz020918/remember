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
import { BaitianPostScript } from './baitian/BaitianPostScript'
import { BaitianPostEncrypted } from './baitian/BaitianPostEncrypted'
import { ForumPostDecode } from './baitian/ForumPostDecode'
import { CaiqingQZone } from './qzone/CaiqingQZone'
import { BaiduSearchPersonalSite } from './baidu/BaiduSearchPersonalSite'
import { PersonalSite } from './personalSite/PersonalSite'
// CaiqingQQChat merged into QQ component — page 22 reuses QQ
// CaiqingQZoneDiary merged into CaiqingQZone's Journal tab — page 23 removed
import { BaiduSearchDreamScholarship } from './baidu/BaiduSearchDreamScholarship'
import { NewsDreamScholarship } from './news/NewsDreamScholarship'
import { BaiduSearchLiGroup } from './baidu/BaiduSearchLiGroup'
import { WeiboLiGroupPost } from './weibo/WeiboLiGroupPost'
import { MengheWeibo } from './weibo/MengheWeibo'
import { WeiboComingOfAge } from './weibo/WeiboComingOfAge'
import { WeiboFansPost1 } from './weibo/WeiboFansPost1'
import { WeiboFansPost2 } from './weibo/WeiboFansPost2'
import { WeiboDengFengShuo } from './weibo/WeiboDengFengShuo'
import { WeiboUser139293 } from './weibo/WeiboUser139293'
import { LockedPost } from './weibo/LockedPost'
import { EndingForgive, EndingSilence } from './ending/Ending'

export const PAGES = {
  1:  { title: '桌面',                   path: null,                                       appType: 'desktop', render: () => null },
  2:  { title: '微信',                   path: 'wechat',                                   appType: 'wechat',  render: () => <Wechat /> },
  3:  { title: 'QQ',                     path: 'qq',                                       appType: 'qq',      render: () => <QQ /> },
  4:  { title: '浏览器',                 path: 'browser',                                  appType: 'browser', render: () => <BaiduHome /> },
  5:  { title: '搜索「璧山」',           path: 'browser/search/bishan',                    appType: 'browser', render: () => <BaiduResultBishan /> },
  6:  { title: '璧山区 · 教育设施',     path: 'browser/baike/bishan-education',            appType: 'browser', render: () => <BaikeBishanEducation /> },
  7:  { title: '搜索「金花小学」',       path: 'browser/search/jinhua-primary',             appType: 'browser', render: () => <BaiduResultJinhua /> },
  8:  { title: '金花小学官网',           path: 'browser/jinhua-primary',                    appType: 'browser', render: () => <JinhuaHome /> },
  9:  { title: '金花小学 · 校友档案',   path: 'browser/jinhua-primary/alumni',              appType: 'browser', render: () => <JinhuaAlumni /> },
  10: { title: '搜索「奥比岛」',         path: 'browser/search/aobi',                       appType: 'browser', render: () => <BaiduResultAobi /> },
  11: { title: '奥比岛圈 · 首页',       path: 'browser/aobi',                              appType: 'browser', render: () => <BaitianHome /> },
  12: { title: '奥比岛圈 · 采晴0826',   path: 'browser/aobi/user/caiqing0826',             appType: 'browser', render: () => <BaitianUserCaiqing /> },
  13: { title: '奥比岛言情大戏招人',     path: 'browser/aobi/post/casting-call',            appType: 'browser', render: () => <BaitianPostCasting /> },
  14: { title: '朋友转学了好伤心',       path: 'browser/aobi/post/friend-transferred',      appType: 'browser', render: () => <BaitianPostTransfer /> },
  15: { title: '沐季千柠工作室粉丝群',   path: 'qq/group/mujiqianling',                     appType: 'qq',      render: () => <QQ /> },
  16: { title: '永远的姐妹',             path: 'browser/aobi/post/eternal-sisters',         appType: 'browser', render: () => <BaitianPostScript /> },
  17: { title: '百田加密帖子',           path: 'browser/aobi/post/encrypted-for-ruyue',     appType: 'browser', render: () => <BaitianPostEncrypted /> },
  18: { title: '乱码科普帖',             path: 'browser/aobi/post/decode-guide',            appType: 'browser', render: () => <ForumPostDecode /> },
  19: { title: '采晴的QQ空间',           path: 'browser/qzone/caiqing',                     appType: 'browser', render: () => <CaiqingQZone /> },
  20: { title: '搜索「富士山下」',       path: 'browser/search/personal-site',              appType: 'browser', render: () => <BaiduSearchPersonalSite /> },
  21: { title: '富士山下埋葬的の❤',     path: 'browser/personal-site',                      appType: 'browser', render: () => <PersonalSite /> },
  22: { title: '采晴的QQ聊天',           path: 'qq/caiqing-chat',                            appType: 'qq',      render: () => <QQ /> },
  24: { title: '搜索「梦之奖学金」',     path: 'browser/search/dream-scholarship',           appType: 'browser', render: () => <BaiduSearchDreamScholarship /> },
  25: { title: '梦之奖学金新闻',         path: 'browser/news/dream-scholarship',             appType: 'browser', render: () => <NewsDreamScholarship /> },
  26: { title: '搜索「李氏集团」',       path: 'browser/search/li-group',                    appType: 'browser', render: () => <BaiduSearchLiGroup /> },
  27: { title: '微博 · 李氏集团千金',   path: 'browser/weibo/post/li-group-princess',       appType: 'browser', render: () => <WeiboLiGroupPost /> },
  28: { title: '梦和MH 微博',           path: 'browser/weibo/menghe-mh',                    appType: 'browser', render: () => <MengheWeibo /> },
  29: { title: '成人礼帖子',             path: 'browser/weibo/menghe-mh/coming-of-age',     appType: 'browser', render: () => <WeiboComingOfAge /> },
  30: { title: '粉丝可见帖子①',         path: 'browser/weibo/menghe-mh/fans-post-1',       appType: 'browser', render: () => <WeiboFansPost1 /> },
  31: { title: '粉丝可见帖子②',         path: 'browser/weibo/menghe-mh/fans-post-2',       appType: 'browser', render: () => <WeiboFansPost2 /> },
  32: { title: '等风说',                 path: 'browser/weibo/dengfengshuo',                 appType: 'browser', render: () => <WeiboDengFengShuo /> },
  33: { title: '安眠',         path: 'browser/weibo/user139293',                   appType: 'browser', render: () => <WeiboUser139293 /> },
  34: { title: '加锁帖子',               path: 'browser/weibo/user139293/locked-post',       appType: 'browser', render: () => <LockedPost /> },
  35: { title: '结局：原谅',             path: 'ending/forgive',                             appType: 'default', render: () => <EndingForgive /> },
  36: { title: '结局：沉默',             path: 'ending/silence',                             appType: 'default', render: () => <EndingSilence /> },
}

export const PATH_TO_ID = {}
for (const [id, page] of Object.entries(PAGES)) {
  if (page.path) PATH_TO_ID[page.path] = Number(id)
}
