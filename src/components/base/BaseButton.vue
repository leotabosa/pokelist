<script>
export default {
  name: 'BaseButton',
}
</script>

<template>
  <button
    class="button"
    tabindex="0"
    :title="$slots.default[0].text"
    aria-pressed="false"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  will-change: background-color, color;
  border-radius: var(--radius-md);
  outline: none;
  border: 1px solid var(--grayscale-border-color);
  padding: var(--spacing-lg) var(--spacing-xg);
  cursor: pointer;
  transition: all var(--default-timing) ease;
  min-width: 120px;

  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
}
</style>
