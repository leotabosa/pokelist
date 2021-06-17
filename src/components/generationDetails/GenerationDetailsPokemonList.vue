<script>
export default {
  name: 'GenerationDetailsPokemonList',
  props: {
    pokemons: {
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
      searchTerm: '',
      filter: '',
    }
  },
  computed: {
    pokemonsMapped() {
      if (!this.filter) return this.pokemons
      else
        return this.pokemons.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(this.filter.toLowerCase())
        )
    },
  },
  methods: {
    doFilter(term) {
      this.searchTerm = term
      setTimeout(() => this.defineFilter(term), 500)
    },
    defineFilter(term) {
      // filter with debounce logic
      if (this.searchTerm !== term) return

      this.filter = term
    },
  },
}
</script>

<template>
  <BaseList
    class="gen-details-pokemon-list"
    list-title="Pokémons"
    :items="pokemonsMapped"
    prop-to-display="name"
    capitalize
    with-filter
    :loading="loading"
    @filter="doFilter"
  />
</template>
<style lang="scss" scoped>
.gen-details-pokemon-list {
  flex: 1;
  padding-right: var(--spacing-xg);
  min-height: 300px;

  @media screen and (max-width: 900px) {
    padding-right: 0;
    padding-bottom: var(--spacing-xg);
  }
}
</style>
