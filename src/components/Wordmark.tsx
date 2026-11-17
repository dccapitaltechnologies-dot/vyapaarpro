import { cn } from '../lib/utils'

/**
 * The Leverius wordmark: a brass rule, the serif name, and a hairline rule.
 * Drawn as type rather than an image so it stays crisp at any size.
 */
export function Wordmark({
  className,
  tone = 'ink',
}: {
  className?: string
  tone?: 'ink' | 'bone'
}) {
  const isBone = tone === 'bone'

  return (
    <span className={cn('group inline-flex items-center gap-3', className)}>
      <span
        aria-hidden
        className={cn(
          'h-px w-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
          'group-hover:w-9',
          isBone ? 'bg-brass-2' : 'bg-brass',
        )}
      />
      <span
        className={cn(
          'font-display text-[1.32rem] leading-none tracking-[-0.015em]',
          isBone ? 'text-bone' : 'text-forest',
        )}
      >
        Leverius
      </span>
      <span
        aria-hidden
        className={cn(
          'ms-0.5 hidden h-1 w-1 rounded-full sm:block',
          isBone ? 'bg-brass-2' : 'bg-brass',
        )}
      />
    </span>
  )
}
