import type { ComponentProps } from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Plus } from 'lucide-react'

import { cn } from '../../lib/utils'

const Accordion = AccordionPrimitive.Root

function AccordionItem({ className, ...props }: ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('border-t border-line', className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'group/acc flex flex-1 cursor-pointer items-start justify-between gap-6 py-6 text-left outline-none',
          'transition-colors hover:text-brass',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass',
          className,
        )}
        {...props}
      >
        {children}
        {/* Plus that rotates into a minus. Cheaper than swapping icons. */}
        <span
          aria-hidden
          className={cn(
            'relative mt-1 grid size-6 shrink-0 place-items-center rounded-full border border-line-2',
            'transition-colors duration-300 group-hover/acc:border-brass',
            'group-data-[state=open]/acc:border-brass group-data-[state=open]/acc:bg-brass',
          )}
        >
          <Plus
            className={cn(
              'size-3 text-ink-2 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]',
              'group-data-[state=open]/acc:rotate-45 group-data-[state=open]/acc:text-bone',
            )}
            strokeWidth={1.5}
          />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn('pb-7 pr-12 text-[14.5px] leading-[1.72] text-ink-2', className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
