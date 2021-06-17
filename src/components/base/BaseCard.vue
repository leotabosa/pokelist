<script>
export default {
  name: 'BaseCard',
  props: {
    clickable: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template>
  <div :class="['card', clickable ? 'card--clickable' : '']">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card {
  border-radius: var(--radius-md);
  box-shadow: 1px 3px 6px #00000029;

  &--clickable {
    cursor: pointer;
    transition: all var(--default-timing) ease;

    &:hover {
      transform: translateY(-5px);
    }
  }
}
</style>
