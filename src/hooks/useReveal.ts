import { useEffect, useRef, useState } from 'react'

/**
 * Reveal-on-scroll via IntersectionObserver.
 * Falls back to "visible immediately" when the API is missing, so content is
 * never left trapped at opacity 0.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  threshold?: number
  rootMargin?: string
  once?: boolean
}) {
  const { threshold = 0.15, rootMargin = '0px 0px -12% 0px', once = true } = options ?? {}
  const ref = useRef<T>(null)
  const [isIn, setIsIn] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // No observer here: reveal on the next frame so the element is never left
    // invisible, while avoiding a synchronous setState in the effect body.
    if (typeof IntersectionObserver === 'undefined') {
      const frame = window.requestAnimationFrame(() => setIsIn(true))
      return () => window.cancelAnimationFrame(frame)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsIn(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setIsIn(false)
          }
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, isIn }
}
