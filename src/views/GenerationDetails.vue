<script>
import Service from '../Service'
import GenerationDetailsHeader from '../components/generationDetails/GenerationDetailsHeader'
import GenerationDetailsPokemonList from '../components/generationDetails/GenerationDetailsPokemonList'
import GenerationDetailsMovesList from '../components/generationDetails/GenerationDetailsMovesList'
import getResourceId from '../utils/get-resource-id'
import normalizeGenerationName from '../utils/normalize-generation-name'
import { mapActions } from 'vuex'

export default {
  components: {
    GenerationDetailsHeader,
    GenerationDetailsPokemonList,
    GenerationDetailsMovesList,
  },
  computed: {
    generationId() {
      return this.$route.params.id
    },
  },
  data() {
    return {
      service: new Service({ path: 'generation', resourceName: 'gerações' }),
      data: {},
      loading: true,
    }
  },
  mounted() {
    this.fetchGeneration()
  },
  methods: {
    ...mapActions(['addNewError']),
    getResourceId,
    normalizeName: normalizeGenerationName,
    async fetchGeneration() {
      try {
        this.loading = true
        const data = await this.service.getById({
          id: this.generationId,
        })

        this.data = { ...data, name: this.normalizeName(data.name) }
      } catch (error) {
        this.addNewError(error)
      } finally {
        this.loading = false
      }
    },
    goBackToList() {
      this.$router.push({ name: 'Home' })
    },
  },
}
</script>

<template>
  <div class="gen-details">
    <section class="gen-details__page-controls">
      <BaseButton @click="goBackToList">Voltar</BaseButton>
    </section>
    <section class="gen-details__header">
      <GenerationDetailsHeader :data="data" :loading="loading" />
    </section>
    <section class="gen-details__lists">
      <GenerationDetailsPokemonList
        :pokemons="data.pokemon_species"
        :loading="loading"
      />
      <GenerationDetailsMovesList :moves="data.moves" :loading="loading" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.gen-details {
  display: flex;
  flex-direction: column;
  height: 100%;

  &__page-controls {
    padding-bottom: var(--spacing-lg);
  }

  &__lists {
    display: flex;
    height: calc(100% - 240px);
    padding-top: var(--spacing-xg);
    flex: 1;
  }

  @media screen and (max-width: 900px) {
    overflow: auto;

    &__lists {
      flex-direction: column;
    }
  }
}
</style>
