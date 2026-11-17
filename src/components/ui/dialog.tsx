import type { ComponentProps } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

import { cn } from '../../lib/utils'

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogClose = DialogPrimitive.Close
const DialogPortal = DialogPrimitive.Portal

function DialogOverlay({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        'animate-overlay-in fixed inset-0 z-50 bg-forest/55 backdrop-blur-[3px]',
        className,
      )}
      {...props}
    />
  )
}

type DialogContentProps = ComponentProps<typeof DialogPrimitive.Content> & {
  /** Hide the built-in close button when the surface supplies its own. */
  hideClose?: boolean
}

/**
 * Centred modal surface. Radix handles focus trapping, scroll locking and
 * `aria-modal`; this layer owns only the visual shell.
 */
function DialogContent({
  className,
  children,
  hideClose = false,
  ...props
}: DialogContentProps) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          'animate-content-in fixed top-1/2 left-1/2 z-50 w-[calc(100vw-2rem)] max-w-lg',
          '-translate-x-1/2 -translate-y-1/2',
          'border border-line-2 bg-card shadow-float outline-none',
          className,
        )}
        {...props}
      >
        {children}
        {!hideClose && (
          <DialogPrimitive.Close
            className={cn(
              'absolute top-4 right-4 z-10 grid size-9 place-items-center rounded-full',
              'border border-bone/30 bg-forest/40 text-bone backdrop-blur-md',
              'transition-colors hover:bg-forest/70',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass',
            )}
          >
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot="dialog-header" className={cn('flex flex-col gap-2', className)} {...props} />
}

function DialogFooter({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn('font-display text-d4 text-forest', className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn('text-[14px] leading-relaxed text-ink-2', className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
