<template>
  <div class="layout">
    <RouterView />
  </div>
</template>

<style scoped>
.layout {
  margin: auto;
  height: calc(100% - 68px);
  overflow: hidden;
  padding: var(--spacing-xg);
  max-width: 1366px;
}
</style>
