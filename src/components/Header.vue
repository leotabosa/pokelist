<script>
export default {
  methods: {
    goToHome() {
      this.$router.push({ name: 'Home' })
    },
  },
}
</script>

<template>
  <header class="header">
    <h1 class="header__title" tabindex="0" @click="goToHome">PokeList</h1>
    <a
      class="header__link"
      href="https://github.com/leoctbraga/pokelist"
      tabindex="0"
      title="Visitar repositório de código da aplicação"
    >
      Contribua para o projeto
    </a>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding-right: var(--spacing-xg);
  background-color: var(--secondary-color);

  &__title {
    font-size: var(--font-size-xg);
    cursor: pointer;
    height: 100%;
    padding: var(--spacing-xg) 32px;
    background-color: var(--primary-color);
    box-shadow: 1px 0 10px #00000029;
    outline: none;
  }

  &__link {
    will-change: color;
    color: white;
    text-decoration: none;
    outline: none;
    transition: all var(--default-timing);
    font-size: var(--font-size-md);
    padding-top: var(--spacing-lg);
    padding-bottom: var(--spacing-lg);

    &:focus-within,
    &:hover {
      color: var(--primary-hover-color);
    }

    @media screen and (max-width: 500px) {
      display: none;
    }
  }
}
</style>
