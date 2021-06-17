<script>
import BaseListItem from './BaseListItem'
import BaseListHeader from './BaseListHeader'
export default {
  name: 'BaseList',
  components: { BaseListItem, BaseListHeader },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    listTitle: {
      type: String,
      default: () => 'Lista',
    },
    clickableItens: {
      type: Boolean,
      default: false,
    },
    propToDisplay: {
      type: String,
      default: () => '',
    },
    capitalize: {
      type: Boolean,
      default: false,
    },
    withFilter: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<template>
  <div class="list">
    <BaseListHeader
      :list-title="listTitle"
      :with-filter="withFilter"
      @filter="$emit('filter', $event)"
    />
    <ul v-if="items.length && !loading" class="list__items">
      <BaseListItem
        v-for="(item, index) in items"
        :key="`${item}-${index}`"
        :clickable="clickableItens"
        :capitalize="capitalize"
        @click.native="clickableItens ? $emit('list-item-click', item) : ''"
      >
        {{ propToDisplay ? item[propToDisplay] : item }}
      </BaseListItem>
    </ul>
    <div v-else-if="loading" class="list__items">
      <BaseSkeleton
        v-for="i in 10"
        :key="i"
        class="list__items__loading"
        width="100%"
        height="35"
      />
    </div>
    <p v-else-if="!loading && !items.length" class="list-no-results">
      Sem resultados
    </p>
  </div>
</template>

<style lang="scss" scoped>
.list {
  color: var(--grayscale-text-color);
  list-style-type: none;
  height: 100%;
  &__items {
    overflow: auto;
    height: calc(100% - 50px);

    &__loading {
      &:first-of-type {
        margin-top: 5px;
      }
      &:not(:first-of-type) {
        margin-top: 10px;
      }
    }
  }
}

.list-no-results {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 50px);
}
</style>
