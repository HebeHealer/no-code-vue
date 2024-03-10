<template>
  <div class="layout-runner">
    <div class="layout-runner-navigator">
      <div class="address-wrapper">
        <PreviewModeSwitcher
          :preview-mode="props.previewMode"
          @preview-mode-change="greet"
        ></PreviewModeSwitcher>
      </div>
      <div class="layout-runner-content-wrapper tiny-scrollbar">
      <div class="layout-runner-content-header">
        <div class="layout-runner-content-navigator"></div>
        <div class="layout-runner-content-title">Byelide</div>
      </div>
      <div class="layout-runner-content">
        <BlockRenderer />
      </div>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PreviewType } from './type'

import PreviewModeSwitcher from './PreviewModeSwitcher.vue'
import BlockRenderer from '@/blocks/BlockRenderer.vue'
const props = defineProps<{
  previewMode?: PreviewType
}>()

const emit = defineEmits<{
  'preview-mode-change': [mode: PreviewType]
}>()

const greet = (mode: PreviewType) => {
  emit('preview-mode-change', mode)
}
</script>

<style scoped></style>
