const PALETTE = [
  ['#ffd1dc', '#ff9aa2'],
  ['#c1e8ff', '#6ec4f7'],
  ['#d4f0c2', '#8cd07d'],
  ['#ffe7b3', '#ffb86b'],
  ['#e4d4ff', '#a97bf5'],
  ['#ffe0f0', '#f58ec2'],
  ['#d0f5e8', '#4fc3a1'],
  ['#fff4b3', '#f5c542'],
]

function seedIndex(seed) {
  let hash = 0
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0
  return hash % PALETTE.length
}

export function Avatar({ name = '', size = 36, square = false, className = '' }) {
  const [from, to] = PALETTE[seedIndex(name)]
  return (
    <div
      className={`inline-flex items-center justify-center text-white/90 font-bold shrink-0 ring-1 ring-inset ring-white/30 ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: square ? 6 : '50%',
        background: `linear-gradient(135deg, ${from}, ${to})`,
        fontSize: Math.max(10, size * 0.32),
      }}
    >
      {name.slice(0, 1)}
    </div>
  )
}
