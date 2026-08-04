import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export const itemVariants = cva(
  "group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default: "p-4 gap-4 ",
        sm: "py-3 px-4 gap-2.5",
      },
      variant: {
        default: "bg-transparent",
        muted: "bg-muted/50",
        outline: "border-border",
      },
    },
  },
)

export type ItemVariants = VariantProps<typeof itemVariants>
