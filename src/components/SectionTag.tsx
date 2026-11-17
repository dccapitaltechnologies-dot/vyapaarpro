import type { ReactNode } from 'react'

import { cn } from '../lib/utils'

/**
 * Section eyebrow: index number, brass rule, and a label.
 * The number is what makes the page feel like a catalogue rather than a deck.
 */
export function SectionTag({
  index,
  children,
  tone = 'ink',
  className,
}: {
  index?: string
  children: ReactNode
  tone?: 'ink' | 'bone'
  className?: string
}) {
  const isBone = tone === 'bone'

  return (
    <div className={cn('flex items-center gap-3.5', className)}>
      {index && (
        <span className={cn('num text-[10.5px]', isBone ? 'text-brass-2' : 'text-brass')}>
          {index}
        </span>
      )}
      <span aria-hidden className={cn('h-px w-7', isBone ? 'bg-bone/25' : 'bg-line-2')} />
      <span className={cn('label', isBone ? 'text-bone/65' : 'text-ink-3')}>{children}</span>
    </div>
  )
}
