<script setup lang="ts">
import type { BadgeVariants } from "./variants"
import type { HTMLAttributes } from "vue"
import { Primitive } from "reka-ui"
import type { PrimitiveProps } from "reka-ui"

import { badgeVariants } from "./variants"
import { cn } from "@/lib/utils"
import { reactiveOmit } from "@vueuse/core"

const props = defineProps<PrimitiveProps & {
  variant?: BadgeVariants["variant"]
  class?: HTMLAttributes["class"]
}>()

const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <Primitive
    data-slot="badge"
    :class="cn(badgeVariants({ variant }), props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </Primitive>
</template>
