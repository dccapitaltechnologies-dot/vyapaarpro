import type { ComponentProps } from 'react'

import { cn } from '../../lib/utils'

/**
 * Underlined text field. No box: the rule and the label do the framing,
 * which keeps the contact form in the same editorial voice as the site.
 */
function Input({ className, type = 'text', ...props }: ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'w-full min-w-0 border-0 border-b border-line-2 bg-transparent px-0 py-3',
        'text-[15px] text-forest placeholder:text-ink-4',
        'rounded-none outline-none transition-colors duration-300',
        'hover:border-ink-3 focus:border-brass',
        // Suppress the browser's autofill paint so the paper stays paper.
        'autofill:shadow-[inset_0_0_0_999px_var(--color-bone)] autofill:[-webkit-text-fill-color:var(--color-forest)]',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'aria-[invalid=true]:border-red-700',
        className,
      )}
      {...props}
    />
  )
}

function Textarea({ className, ...props }: ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'w-full resize-y border-0 border-b border-line-2 bg-transparent px-0 py-3',
        'text-[15px] leading-relaxed text-forest placeholder:text-ink-4',
        'rounded-none outline-none transition-colors duration-300',
        'hover:border-ink-3 focus:border-brass',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

export { Input, Textarea }
