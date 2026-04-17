import { useState } from 'react'
import { BrowserFrame } from '../../browser/BrowserFrame'
import { BaitianFrame } from '../../browser/BaitianFrame'
import { ForumFloor } from './ForumFloor'

function ActionBar() {
  return (
    <div className="px-5 py-2.5 flex gap-4 text-xs text-neutral-500 bg-white border-b border-pink-100">
      <span className="text-[#d16b8a] font-semibold cursor-pointer">倒序浏览</span>
      <span className="cursor-pointer">只看楼主</span>
      <span className="cursor-pointer">收藏本帖</span>
    </div>
  )
}

function Pagination({ page, pageCount, onPageChange }) {
  if (pageCount <= 1) return null
  return (
    <div className="px-5 py-3.5 text-center">
      {Array.from({ length: pageCount }, (_, i) => (
        <button
          key={i}
          disabled={page === i + 1}
          onClick={() => onPageChange(i + 1)}
          className="px-3 py-1.5 mx-1 border border-pink-200 bg-white rounded cursor-pointer disabled:bg-[#e891b0] disabled:text-white disabled:border-[#e891b0]"
        >
          {i + 1}
        </button>
      ))}
    </div>
  )
}

// Usage: either pass `floors` (single list) or `pages` (list of floor lists).
// For one-off content use `children`.
export function BaitianPostDetail({ title, floors, pages, children, hideActions = false }) {
  const [page, setPage] = useState(1)
  const pagedFloors = pages ? (pages[page - 1] || []) : floors

  return (
    <BrowserFrame>
      <BaitianFrame>
        <div className="bg-white rounded-lg border border-pink-200 overflow-hidden">
          <div className="px-5 py-3.5 bg-linear-to-r from-pink-100 to-white text-[17px] font-bold text-[#d16b8a] border-b-2 border-[#e891b0]">
            {title}
          </div>
          {!hideActions && <ActionBar />}
          {pagedFloors?.map((f, i) => (
            <ForumFloor key={i} {...f}>{f.content}</ForumFloor>
          ))}
          {children}
          {pages && (
            <Pagination page={page} pageCount={pages.length} onPageChange={setPage} />
          )}
        </div>
      </BaitianFrame>
    </BrowserFrame>
  )
}
