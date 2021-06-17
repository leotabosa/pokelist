<script>
import getPokemonType from '../../utils/get-pokemon-type'
export default {
  props: {
    types: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      mappedTypes: [],
    }
  },
  watch: {
    types: {
      immediate: true,
      handler() {
        this.mappedTypes = this.types.map((type) => {
          const { iconUrl, namePtBr } = getPokemonType(type.name)
          return {
            ...type,
            iconUrl,
            namePtBr,
          }
        })
      },
    },
  },
}
</script>

<template>
  <div class="pokemon-types">
    <span class="pokemon-types__label">Tipos introduzidos</span>
    <div class="pokemon-types__list" v-if="mappedTypes.length && !loading">
      <div
        v-for="(type, index) in mappedTypes"
        :key="index"
        class="pokemon-types__list__icon"
      >
        <img
          v-if="type.iconUrl"
          :src="type.iconUrl"
          width="30"
          height="30"
          :title="type.namePtBr"
        />
        <v-icon v-else name="question" scale="1.5" :title="type.name" />
      </div>
    </div>
    <BaseSkeleton
      v-else-if="loading"
      class="list__items__loading"
      width="100%"
      height="40"
    />
    <p
      v-else-if="!mappedTypes.length && !loading"
      class="pokemon-types__no-results"
    >
      Nenhum tipo introduzido
    </p>
  </div>
</template>

<style lang="scss" scoped>
.pokemon-types {
  color: var(--grayscale-text-color);

  &__label {
    font-weight: bold;
  }

  &__list {
    padding-top: var(--spacing-md);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    max-width: 300px;

    &__icon {
      min-width: 50px;
      padding-top: var(--spacing-md);
      display: flex;
      align-items: center;
    }

    @media screen and(max-width: 600px) {
      grid-template-columns: repeat(4, 1fr);
      &__icon {
        min-width: 40px;
      }
    }
  }

  &__no-results {
    width: 100%;
  }
}
</style>
