import type { ElementType, ReactNode } from 'react'

import { cn } from '../lib/utils'
import { useReveal } from '../hooks/useReveal'

/**
 * Fades and lifts its children into view once.
 * `delay` staggers siblings without needing a motion library.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
  eager = false,
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
  /** Above-the-fold: animate on mount instead of on intersection. */
  eager?: boolean
}) {
  const { ref, isIn } = useReveal<HTMLDivElement>()

  return (
    <Tag
      ref={eager ? undefined : ref}
      className={cn(eager ? 'enter' : 'reveal', !eager && isIn && 'is-in', className)}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  )
}
