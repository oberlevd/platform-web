<script setup lang="ts">
import type { ButtonVariants } from "./variants"
import type { HTMLAttributes } from "vue"
import { Primitive } from "reka-ui"
import type { PrimitiveProps } from "reka-ui"

import { buttonVariants } from "./variants"
import { cn } from "~/lib/utils"

interface Props extends PrimitiveProps {
  variant?: ButtonVariants["variant"]
  size?: ButtonVariants["size"]
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
  asChild: false,
  class: "",
  size: "default",
  variant: "default",
})
</script>

<template>
  <Primitive
    data-slot="button"
    :data-variant="variant"
    :data-size="size"
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>
