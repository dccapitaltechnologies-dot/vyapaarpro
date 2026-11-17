import type { ComponentProps } from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

import { cn } from '../../lib/utils'

/**
 * Sheet — a Radix Dialog that slides in from the edge.
 * Used for the mobile navigation drawer.
 */
const Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetClose = SheetPrimitive.Close

function SheetContent({
  className,
  children,
  ...props
}: ComponentProps<typeof SheetPrimitive.Content>) {
  return (
    <SheetPrimitive.Portal>
      <SheetPrimitive.Overlay className="animate-overlay-in fixed inset-0 z-50 bg-forest/50 backdrop-blur-[3px]" />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          'animate-sheet-in fixed inset-y-0 right-0 z-50 flex w-full max-w-[24rem] flex-col',
          'border-l border-line-2 bg-bone shadow-sheet outline-none',
          className,
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close
          className={cn(
            'absolute top-5 right-5 grid size-10 place-items-center rounded-full',
            'border border-line text-ink-2 transition-colors hover:border-forest hover:text-forest',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass',
          )}
        >
          <X className="size-4" />
          <span className="sr-only">Close menu</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  )
}

function SheetTitle({ className, ...props }: ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn('font-display text-d4 text-forest', className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn('text-[13.5px] leading-relaxed text-ink-2', className)}
      {...props}
    />
  )
}

export { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger }
