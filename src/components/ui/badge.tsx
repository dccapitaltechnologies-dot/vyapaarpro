import type { ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../lib/utils'

const badgeVariants = cva(
  [
    'inline-flex w-fit shrink-0 items-center gap-1.5 whitespace-nowrap',
    'label rounded-full border transition-colors',
    '[&_svg]:pointer-events-none [&_svg]:size-2.5',
  ],
  {
    variants: {
      variant: {
        outline: 'border-line-2 bg-transparent text-ink-2',
        solid: 'border-forest bg-forest text-bone',
        brass: 'border-brass-2/40 bg-brass/12 text-brass-2',
        onImage: 'border-bone/35 bg-forest/45 text-bone backdrop-blur-md',
        muted: 'border-transparent bg-bone-3 text-ink-2',
      },
      size: {
        sm: 'px-2 py-0.5 text-[9.5px] tracking-[0.16em]',
        md: 'px-2.5 py-1 text-[10px] tracking-[0.15em]',
      },
    },
    defaultVariants: { variant: 'outline', size: 'sm' },
  },
)

function Badge({ className, variant, size, ...props }: ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant, size }), className)} {...props} />
}

export { Badge }
