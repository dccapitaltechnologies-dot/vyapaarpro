import { useEffect, useState } from 'react'

/**
 * Tracks which in-page section is currently in view so the nav can mark it.
 * Returns the section id (without the leading `#`), or null near the top.
 *
 * Uses a coarse rootMargin that biases toward the upper third of the viewport,
 * which matches where people actually read.
 */
export function useScrollSpy(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return

    const visible = new Map<string, number>()

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        }

        let best: string | null = null
        let bestRatio = 0
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) {
            best = id
            bestRatio = ratio
          }
        }
        setActive(best)
      },
      { threshold: [0, 0.15, 0.35, 0.6, 0.85], rootMargin: '-72px 0px -45% 0px' },
    )

    sections.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids])

  return active
}
