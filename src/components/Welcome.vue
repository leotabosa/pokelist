<template>
  <section class="welcome">
    <img
      width="300"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
    />
    <h2 class="welcome__title">Lista de gerações</h2>

    <p class="welcome__subtitle">
      Clique em uma das gerações abaixo para ver mais detalhes: pokémons, região
      principal, entre outras informações.
    </p>
  </section>
</template>

<style lang="scss" scoped>
.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: var(--spacing-lg);
  height: 200px;

  &__title {
    padding-top: var(--spacing-lg);
    width: auto;
  }
  &__subtitle {
    width: auto;
  }
}
</style>
