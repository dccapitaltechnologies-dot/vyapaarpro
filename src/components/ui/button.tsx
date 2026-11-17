import type { ComponentProps } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../lib/utils'

const buttonVariants = cva(
  [
    'group/btn relative inline-flex shrink-0 items-center justify-center gap-2',
    'whitespace-nowrap select-none outline-none',
    'transition-[background-color,color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
    'focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brass',
    'disabled:pointer-events-none disabled:opacity-45',
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        solid: [
          'bg-forest text-bone border border-forest',
          'hover:bg-forest-2 hover:border-brass-2',
          'hover:shadow-[0_14px_30px_-18px_rgba(20,32,27,0.75)]',
        ],
        light: ['bg-bone text-forest border border-bone', 'hover:bg-brass-wash hover:border-brass-2'],
        outline: [
          'bg-transparent text-forest border border-line-2',
          'hover:border-forest hover:bg-forest/[0.035]',
        ],
        'outline-light': [
          'bg-transparent text-bone/90 border border-bone/25',
          'hover:border-brass-2 hover:text-bone hover:bg-bone/[0.06]',
        ],
        ghost: 'bg-transparent text-forest-2 border border-transparent hover:bg-forest/5',
        link: 'bg-transparent text-current border-0 underline-offset-[6px] hover:underline px-0',
      },
      size: {
        xs: 'h-8 px-3 text-[12px] rounded-xs',
        sm: 'h-9.5 px-4 text-[12.5px] rounded-sm',
        md: 'h-11 px-5.5 text-[13px] rounded-sm',
        lg: 'h-13 px-7 text-[13.5px] rounded-sm',
        icon: 'size-10 rounded-sm',
      },
      uppercaseTracking: { true: 'label font-medium', false: '' },
    },
    defaultVariants: { variant: 'solid', size: 'md', uppercaseTracking: false },
  },
)

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }

function Button({
  className,
  variant,
  size,
  uppercaseTracking,
  asChild = false,
  type,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      // `type` is meaningless on Slot-rendered anchors; only forward on <button>.
      {...(asChild ? {} : { type: type ?? 'button' })}
      className={cn(buttonVariants({ variant, size, uppercaseTracking }), className)}
      {...props}
    />
  )
}

export { Button }
export type { ButtonProps }
