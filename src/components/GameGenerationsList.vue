<script>
import Service from '../Service'
import getResourceId from '../utils/get-resource-id'
import normalizeGeneration from '../utils/normalize-generation'
import normalizeGenerationName from '../utils/normalize-generation-name'
import { mapActions } from 'vuex'

export default {
  name: 'GamesList',
  data() {
    return {
      service: new Service({ path: 'generation', resourceName: 'gerações' }),
      items: [],
      pagination: {
        offset: 0,
        limit: 100,
      },
      loading: false,
    }
  },
  mounted() {
    this.fetchGenerations()
  },
  methods: {
    ...mapActions(['addNewError']),
    getResourceId,
    normalizeName: normalizeGenerationName,
    normalizeGeneration: normalizeGeneration,
    async fetchGenerations() {
      try {
        this.loading = true
        const { results } = await this.service.get({
          offset: this.pagination.offset,
          limit: this.pagination.limit,
        })

        this.items = results.map((item) => ({
          ...item,
          number: this.normalizeGeneration(item.name),
          name: this.normalizeName(item.name),
          id: this.getResourceId(item.url),
        }))
      } catch (error) {
        this.addNewError(error)
      } finally {
        this.loading = false
      }
    },
    goToGenerationDetails(payload) {
      this.$router.push({
        name: 'Generation',
        params: {
          id: payload.id,
        },
      })
    },
  },
}
</script>

<template>
  <section class="games-list">
    <template v-if="!loading">
      <BaseCard
        v-for="(generation, index) in items"
        :key="`${generation.id}-${index}`"
        class="games-list__item"
        clickable
        @click.native="goToGenerationDetails(generation)"
      >
        <div class="games-list__item__generation">
          {{ generation.number }}
        </div>
        <span class="games-list__item__name">
          {{ generation.name }}
        </span>
      </BaseCard>
    </template>
    <template v-else-if="loading">
      <BaseSkeleton
        v-for="i in 9"
        :key="i"
        class="list__items__loading"
        width="100%"
        height="180"
      />
    </template>
  </section>
</template>

<style scoped lang="scss">
.games-list {
  max-height: calc(100% - 200px);
  padding-bottom: 10px;
  overflow: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(auto, 160px);
  gap: var(--spacing-xg);
  padding: var(--spacing-xg);
  background-color: var(--grayscale-bg-color);

  @media screen and(max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and(max-width: 600px) {
    grid-template-columns: 1fr;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-xg);
    height: auto;
    background-color: white;

    &__generation {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      width: 70px;
      height: 70px;
      font-size: 30px;
      background-color: var(--grayscale-bg-color);
      margin-bottom: var(--spacing-xg);
    }
  }
}
</style>
