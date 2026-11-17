import type { ComponentProps } from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '../../lib/utils'

const Tabs = TabsPrimitive.Root

/**
 * Tab list as a hairline rail. The active trigger carries a brass underline
 * instead of a filled pill, which suits the editorial register.
 */
function TabsList({ className, ...props }: ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn('flex flex-wrap items-center gap-x-1 gap-y-1', className)}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        'relative shrink-0 cursor-pointer px-3.5 py-2.5 outline-none',
        'label text-ink-3 transition-colors duration-300',
        'hover:text-forest',
        'data-[state=active]:text-forest',
        // Animated brass underline
        'after:absolute after:inset-x-3 after:bottom-0 after:h-px after:origin-left',
        'after:scale-x-0 after:bg-brass after:transition-transform after:duration-400',
        'after:ease-[cubic-bezier(0.16,1,0.3,1)]',
        'data-[state=active]:after:scale-x-100',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass',
        className,
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('outline-none', className)}
      {...props}
    />
  )
}

export { Tabs, TabsContent, TabsList, TabsTrigger }
