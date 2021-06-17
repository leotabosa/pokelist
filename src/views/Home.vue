<script>
import GameGenerationsList from '@/components/GameGenerationsList'
import Welcome from '@/components/Welcome'

export default {
  name: 'Home',
  components: {
    GameGenerationsList,
    Welcome,
  },
}
</script>

<template>
  <div class="home">
    <Welcome />
    <GameGenerationsList />
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>
