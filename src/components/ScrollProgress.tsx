import { useEffect, useRef } from 'react'

/**
 * Hairline reading-progress bar pinned under the navbar.
 * Writes to a ref's style directly, so scrolling never re-renders React.
 */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let frame = 0
    const update = () => {
      frame = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0
      el.style.transform = `scaleX(${p})`
      el.style.opacity = p > 0.005 ? '1' : '0'
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-px bg-transparent"
    >
      <div
        ref={ref}
        className="h-full origin-left bg-accent/70 opacity-0 transition-opacity duration-300"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}
