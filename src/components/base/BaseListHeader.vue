<script>
export default {
  props: {
    listTitle: {
      type: String,
      default: () => 'Lista',
    },
    withFilter: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template>
  <div class="list-header">
    <h2 class="list-header__title">{{ listTitle }}</h2>
    <BaseInput
      v-if="withFilter"
      class="list-header__search"
      placeholder="Buscar"
      @input="$emit('filter', $event)"
    />
  </div>
</template>

<style lang="scss" scoped>
.list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--grayscale-color);
  border-radius: 6px 6px 0 0;
  padding: var(--spacing-md) var(--spacing-xg);

  &__title {
    color: var(--grayscale-text-color);
    font-size: var(--font-size-lg);
  }

  &__search {
    max-width: 250px;
    margin-left: var(--spacing-lg);
  }
}
</style>
