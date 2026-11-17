import type { ComponentProps } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { cn } from '../../lib/utils'

const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger

function TooltipContent({
  className,
  sideOffset = 8,
  children,
  ...props
}: ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          'animate-content-in z-60 max-w-64 border border-forest-3 bg-forest px-2.5 py-1.5',
          'text-[11.5px] leading-snug text-bone shadow-lift',
          className,
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="fill-forest" width={10} height={5} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }
