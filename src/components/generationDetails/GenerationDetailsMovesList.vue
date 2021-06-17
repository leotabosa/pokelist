<script>
export default {
  name: 'GenerationDetailsMovesList',
  props: {
    moves: {
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
    movesMapped() {
      if (!this.filter) {
        return this.moves
      } else {
        return this.moves.filter((move) =>
          move.name.toLowerCase().includes(this.filter.toLowerCase())
        )
      }
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
    class="gen-details-moves-list"
    list-title="Habilidades"
    :items="movesMapped"
    prop-to-display="name"
    capitalize
    with-filter
    :loading="loading"
    @filter="doFilter"
  />
</template>
<style lang="scss" scoped>
.gen-details-moves-list {
  height: 100%;
  flex: 1;
  min-height: 300px;
}
</style>
