import { useState } from 'react'
import { MdBrokenImage } from 'react-icons/md'

export default function ImageWithFallback({ src, alt, className, fallbackText, style }) {
  const [hasError, setHasError] = useState(false)

  if (hasError || !src) {
    return (
      <div 
        className={className}
        style={{
          ...style,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--neutral-100)',
          color: 'var(--neutral-400)',
          border: '1px solid var(--neutral-200)',
          overflow: 'hidden'
        }}
      >
        {fallbackText ? (
          <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>
            {fallbackText.substring(0, 2).toUpperCase()}
          </span>
        ) : (
          <MdBrokenImage size={24} />
        )}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setHasError(true)}
    />
  )
}
