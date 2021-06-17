<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: () => '',
    },
    placeholder: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<template>
  <input
    class="input"
    :value="value"
    tabindex="0"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"
  />
</template>

<style lang="scss" scoped>
.input {
  will-change: border-color;
  border-radius: var(--radius-md);
  outline: none;
  border: 1px solid var(--grayscale-border-color);
  padding: var(--spacing-md);
  transition: border-color var(--default-timing) ease;
  width: 100%;

  &:hover,
  &:active,
  &:focus-within {
    transition: border-color var(--default-timing) ease;
    border-color: var(--primary-color);
  }
}
</style>
