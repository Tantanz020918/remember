import { useState, useEffect } from 'react'
import { BESTIE_1, BESTIE_2, spriteForUser } from '../../assets/imageUrls'

const NAMED_IMAGES = {
  '闺蜜头像1': BESTIE_1,
  '闺蜜头像 1': BESTIE_1,
  '闺蜜头像2': BESTIE_2,
  '闺蜜头像 2': BESTIE_2,
}

const isContentImg = (round, width) =>
  !round && typeof width === 'number' && width >= 120

// Render a sprite cell using CSS background. Probes primary src; falls back to local on error.
function SpriteCell({ sprite, width, height, round, onClick, className, style }) {
  const [url, setUrl] = useState(sprite.src)
  useEffect(() => {
    const probe = new Image()
    probe.onerror = () => setUrl(sprite.fallbackSrc)
    probe.src = sprite.src
  }, [sprite.src, sprite.fallbackSrc])
  return (
    <div
      onClick={onClick}
      className={`shrink-0 ${onClick ? 'cursor-pointer' : ''} ${className || ''}`}
      style={{
        width,
        height,
        borderRadius: round ? '50%' : 6,
        backgroundImage: `url(${url})`,
        backgroundPosition: `${(sprite.col / (sprite.cols - 1)) * 100}% ${(sprite.row / (sprite.rows - 1)) * 100}%`,
        backgroundSize: `${sprite.cols * 100}% ${sprite.rows * 100}%`,
        ...style,
      }}
    />
  )
}

// Single image with onError fallback
function SingleImg({ src, fallbackSrc, width, height, round, onClick, className, style, alt }) {
  const [current, setCurrent] = useState(src)
  useEffect(() => { setCurrent(src) }, [src])
  return (
    <img
      src={current}
      alt={alt || ''}
      onClick={onClick}
      onError={() => { if (fallbackSrc && current !== fallbackSrc) setCurrent(fallbackSrc) }}
      className={`object-cover shrink-0 ${onClick ? 'cursor-pointer' : ''} ${className || ''}`}
      style={{
        width,
        height,
        borderRadius: round ? '50%' : 6,
        ...style,
      }}
    />
  )
}

export function ImagePlaceholder({
  name,
  src,
  fallbackSrc,
  sprite,
  width = 240,
  height = 160,
  from = '#ffd6e7',
  to = '#c5e1ff',
  round = false,
  label = true,
  onClick,
  className = '',
  style,
}) {
  // sprite rendering (CSS background)
  if (sprite) {
    return (
      <SpriteCell sprite={sprite} width={width} height={height} round={round}
        onClick={onClick} className={className} style={style} />
    )
  }

  // Resolve named images (may be object {src, fallbackSrc} or string)
  const named = NAMED_IMAGES[name]
  let resolvedSrc = src
  let resolvedFallback = fallbackSrc
  if (!resolvedSrc && named) {
    if (typeof named === 'string') resolvedSrc = named
    else { resolvedSrc = named.src; resolvedFallback = named.fallbackSrc }
  }
  // If src is itself an object (legacy handling)
  if (typeof resolvedSrc === 'object' && resolvedSrc !== null) {
    resolvedFallback = resolvedFallback || resolvedSrc.fallbackSrc
    resolvedSrc = resolvedSrc.src
  }

  const contentCap = isContentImg(round, width)
    ? { maxWidth: '100%', height: 'auto', aspectRatio: typeof height === 'number' ? `${width} / ${height}` : undefined }
    : null

  if (resolvedSrc) {
    return (
      <SingleImg
        src={resolvedSrc}
        fallbackSrc={resolvedFallback}
        alt={name}
        width={width}
        height={height}
        round={round}
        onClick={onClick}
        className={className}
        style={{ ...contentCap, ...style }}
      />
    )
  }

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center justify-center text-white/70 text-[11px] text-center overflow-hidden shrink-0 ring-1 ring-inset ring-white/25 ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
      style={{
        width,
        height,
        background: `linear-gradient(135deg, ${from}, ${to})`,
        borderRadius: round ? '50%' : 6,
        ...(contentCap || {}),
        ...style,
      }}
    >
      {label && name && (
        <span className="bg-black/25 px-1.5 py-px rounded max-w-[90%]">
          {name}
        </span>
      )}
    </div>
  )
}

// Backward-compat re-export
export { spriteForUser }
