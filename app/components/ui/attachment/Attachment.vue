<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { AttachmentVariants } from "./variants"

import { cn } from "@/lib/utils"
import { attachmentVariants } from "./variants/index.ts";

interface Props {
  size?: AttachmentVariants["size"]
  orientation?: AttachmentVariants["orientation"]
  state?: "idle" | "uploading" | "processing" | "error" | "done"
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  orientation: "horizontal",
  size: "default",
  state: "done",
})
</script>

<template>
  <div
    data-slot="attachment"
    :data-state="state"
    :data-size="size"
    :data-orientation="orientation"
    :class="cn(attachmentVariants({ size, orientation }), props.class)"
  >
    <slot />
  </div>
</template>
