import type { ComponentProps } from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { Check } from 'lucide-react'

import { cn } from '../../lib/utils'

const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

function DropdownMenuContent({
  className,
  sideOffset = 10,
  align = 'start',
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-content"
        sideOffset={sideOffset}
        align={align}
        className={cn(
          'animate-content-in z-60 min-w-52 border border-line-2 bg-card p-1.5 shadow-float',
          className,
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function DropdownMenuItem({
  className,
  inset,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Item> & { inset?: boolean }) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-item"
      className={cn(
        'relative flex cursor-pointer items-center gap-2.5 px-2.5 py-2 text-[13.5px] text-ink-2 outline-none',
        'transition-colors select-none',
        'focus:bg-bone-2 focus:text-forest',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        inset && 'pl-8',
        className,
      )}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-checkbox-item"
      checked={checked}
      className={cn(
        'relative flex cursor-pointer items-center gap-2.5 py-2 pr-2.5 pl-7 text-[13.5px] text-ink-2',
        'transition-colors outline-none select-none focus:bg-bone-2 focus:text-forest',
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 grid size-4 place-items-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Check className="size-3.5 text-brass" strokeWidth={2} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuLabel({ className, ...props }: ComponentProps<'div'>) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-label"
      className={cn('label px-2.5 py-2 text-ink-4', className)}
      {...props}
    />
  )
}

function DropdownMenuSeparator({ className, ...props }: ComponentProps<'div'>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-separator"
      className={cn('my-1.5 h-px bg-line', className)}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
}
