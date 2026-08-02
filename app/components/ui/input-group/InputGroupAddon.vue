<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { InputGroupVariants } from "./variants"
import { cn } from "@/lib/utils"
import { inputGroupAddonVariants } from "./variants"

const props = withDefaults(defineProps<{
  align?: InputGroupVariants["align"]
  class?: HTMLAttributes["class"]
}>(), {
  align: "inline-start",
})

const handleInputGroupAddonClick = (event: MouseEvent): void => {
  const currentTarget = event.currentTarget as HTMLElement | null
  const target = event.target as HTMLElement | null

  if (target && target.closest("button")) {
    return
  }

  if (!currentTarget || !currentTarget.parentElement) {
    return
  }

  const input = currentTarget.parentElement.querySelector("input")
  if (input) {
    input.focus()
  }
}
</script>

<template>
  <div
    role="group"
    data-slot="input-group-addon"
    :data-align="props.align"
    :class="cn(inputGroupAddonVariants({ align: props.align }), props.class)"
    @click="handleInputGroupAddonClick"
  >
    <slot />
  </div>
</template>
