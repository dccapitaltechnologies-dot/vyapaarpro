import { useEffect, useState } from 'react'

/**
 * Tracks which section id currently sits under the masthead.
 * Used for the nav's active indicator and the thin scroll rail.
 */
export function useScrollSpy(ids: readonly string[], offset = 120) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (ids.length === 0) return

    let frame = 0

    const measure = () => {
      frame = 0
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top - offset <= 0) current = id
      }
      // Near the document end, the last section wins even if it is short.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = ids[ids.length - 1] ?? current
      }
      setActiveId(current)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [ids, offset])

  return activeId
}
