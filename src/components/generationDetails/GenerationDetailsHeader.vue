<script>
import GenerationDetailsPokemonTypes from './GenerationsDetailsPokemonTypes'
export default {
  name: 'GenerationDetailsHeader',
  components: {
    GenerationDetailsPokemonTypes,
  },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      infoToDisplay: [
        { key: 'regionName', label: 'Região principal' },
        { key: 'pokemonCount', label: 'Número de Pokémon' },
        { key: 'movesCount', label: 'Número de habilidades' },
      ],
    }
  },
  computed: {
    infos() {
      return {
        regionName: this.regionName,
        pokemonCount: this.pokemonCount,
        movesCount: this.movesCount,
      }
    },
    regionName() {
      if (this.data && this.data.main_region) return this.data.main_region.name
      return ''
    },
    pokemonCount() {
      if (this.data && this.data.pokemon_species)
        return this.data.pokemon_species.length
      return 0
    },
    movesCount() {
      if (this.data && this.data.moves) return this.data.moves.length
      return 0
    },
  },
}
</script>

<template>
  <article class="gen-details-header">
    <div class="gen-details-header__name">
      <h3>{{ data.name || 'Generation -' }}</h3>
    </div>
    <div class="gen-details-header__details">
      <div class="gen-details-header__details__infos">
        <div
          v-for="(info, index) in infoToDisplay"
          :key="`${info}-${index}`"
          class="gen-details-header__details__info"
        >
          <span class="gen-details-header__details__info__label">
            {{ info.label }}
          </span>
          <span
            v-if="!loading"
            class="gen-details-header__details__info__value"
          >
            {{ infos[info.key] }}
          </span>
          <BaseSkeleton
            v-else
            class="list__items__loading"
            width="30"
            height="35"
          />
        </div>
      </div>

      <GenerationDetailsPokemonTypes
        class="gen-details-header__details__info"
        :types="data.types"
        :loading="loading"
      />
    </div>
  </article>
</template>

<style lang="scss" scoped>
.gen-details-header {
  display: grid;
  grid-template-columns: minmax(auto, auto) 1fr;
  align-items: center;
  color: var(--grayscale-text-color);
  min-height: 150px;

  &__name {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grayscale-bg-color-secondary);
    padding: var(--spacing-xg);
    font-size: var(--font-size-lg);
    height: 100%;
    box-shadow: 1px 0 10px #00000029;
    z-index: 2;
  }

  &__details {
    padding: var(--spacing-xg);
    flex: 1;
    display: flex;
    align-items: center;
    background-color: var(--grayscale-bg-color);
    border-radius: 0 var(--radius-md) var(--radius-md) 0;
    height: 100%;

    &__infos {
      display: flex;
      flex: 1;
    }

    &__info {
      display: flex;
      flex-direction: column;
      padding: 0 var(--spacing-lg);
      font-size: var(--font-size-md);

      &__label {
        font-weight: bold;
      }

      &__value {
        text-transform: capitalize;
      }
    }
  }

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;

    &__name {
      width: 100%;
      padding: var(--spacing-xg) 0;
      box-shadow: none;
    }
    &__details {
      width: 100%;
      display: flex;

      &__infos {
        display: flex;
        flex-direction: column;
      }
    }
  }

  @media screen and (max-width: 600px) {
    &__details {
      flex-direction: column;
      align-items: baseline;

      &__info {
        padding-top: var(--spacing-lg);
      }
    }
  }
}
</style>
