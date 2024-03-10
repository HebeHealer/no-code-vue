<template>
  <div class="layout-wrapper">
    <AppLeftpanel />
    <AppPreviewer/>
  </div>
</template>

<script setup lang="ts">
import AppLeftpanel from '@/components/AppLeftpanel/Index.vue'
import AppPreviewer from '@/components/AppPreviewer/Index.vue';
</script>

<style scoped>
.layout-wrapper {
  display: flex;
  height: 100%;
}

.layout-setting {
  position: relative;
  z-index: 6;
  width: var(--panel-width);
  box-shadow: var(--color-gray-300) -1px 0 0;
}
</style>
