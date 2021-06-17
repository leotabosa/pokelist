<script>
import ErrorMessage from './components/ErrorMessage'
import Header from './components/Header'
import Layout from './Layout'
export default {
  components: {
    ErrorMessage,
    Header,
    Layout,
  },
}
</script>

<template>
  <div id="app">
    <Header />
    <Layout />
    <ErrorMessage />
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  box-sizing: border-box;
  font-family: 'Noto Sans', 'sans-serif';
}

* {
  box-sizing: border-box;
  scrollbar-width: thin;
}

*::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

*::-webkit-scrollbar-track {
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.1);
}

*::-webkit-scrollbar-thumb {
  border-radius: var(--radius-md);
  background-color: rgba(0, 0, 0, 0.22);
  outline: none;
}
</style>
