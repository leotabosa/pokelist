<script>
export default {
  name: 'BaseListItem',
  props: {
    clickable: {
      type: Boolean,
      default: false,
    },
    capitalize: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template>
  <li
    :class="[
      'list-item',
      clickable ? 'list-item--clickable' : null,
      capitalize ? 'list-item--capitalize' : null,
    ]"
  >
    <slot />
  </li>
</template>

<style lang="scss" scoped>
.list-item {
  width: 100%;
  padding: var(--spacing-lg) var(--spacing-xg);
  font-size: var(--font-size-md);
  &:not(:first-of-type) {
    border-top: 1px solid var(--grayscale-border-color);
  }

  &--clickable {
    cursor: pointer;
    &:hover {
      background-color: var(--grayscale-hover-color);
    }
  }

  &--capitalize {
    text-transform: capitalize;
  }
}
</style>
