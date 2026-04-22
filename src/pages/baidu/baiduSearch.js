import { PageId } from '../pageIds'

// Shared map of searchable queries on Baidu. Used by BaiduHome's search box
// and the search box shown on every Baidu result page.
export const QUERY_TO_PAGE = {
  璧山: PageId.SEARCH_BISHAN,
  金花小学: PageId.SEARCH_JINHUA,
  奥比岛: PageId.SEARCH_AOBI,
  富士山下: PageId.SEARCH_PERSONAL_SITE,
  梦和基金: PageId.SEARCH_MENGHE_FUND,
  李氏集团: PageId.SEARCH_LI_GROUP,
  荣德心理咨询所: PageId.SEARCH_RONGDE,
}

export function resolveBaiduQuery(raw) {
  return QUERY_TO_PAGE[(raw || '').trim()] ?? null
}
