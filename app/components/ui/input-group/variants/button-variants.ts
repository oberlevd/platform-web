import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export const inputGroupButtonVariants = cva(
  "text-sm shadow-none flex gap-2 items-center",
  {
    defaultVariants: {
      size: "xs",
    },
    variants: {
      size: {
        "icon-sm": "size-8 p-0 has-[>svg]:p-0",
        "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
        "sm": "h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5",
        "xs": "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2",
      },
    },
  },
)

export type InputGroupButtonVariants = VariantProps<typeof inputGroupButtonVariants>
