export function Placeholder({ id }) {
  return (
    <div className="p-10 text-center text-neutral-400">
      <h2 className="text-xl font-semibold mb-2">页面 {id}</h2>
      <p>此页面尚未设计，等待剧情补充。</p>
    </div>
  )
}
