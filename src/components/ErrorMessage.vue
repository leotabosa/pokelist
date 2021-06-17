<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ErrorMessage',
  computed: {
    ...mapGetters(['errors']),
  },
  methods: {
    ...mapActions(['removeError']),
  },
}
</script>

<template>
  <transition-group
    tag="div"
    name="error-message"
    enter-class="error-enter"
    leave-active-class="error-leave-active"
  >
    <div
      v-for="(error, index) of errors"
      :key="`${index}-${error.id}`"
      class="error-message"
    >
      <div class="error-message__text">
        <strong>Erro {{ error.status }}</strong
        >:
        {{ error.message }}
      </div>

      <div class="error-message__close-icon" @click="removeError(error.id)">
        <v-icon name="times" scale="1" />
      </div>
    </div>
  </transition-group>
</template>

<style lang="scss" scoped>
.error-enter {
  opacity: 0;
}
.error-leave-active {
  opacity: 0;
}

.error-message {
  display: flex;
  position: absolute;
  width: 400px;
  right: 15px;
  top: 70px;
  height: auto;
  padding: var(--spacing-xg);
  color: var(--danger-color);
  background-color: var(--danger-bg-color);
  border-radius: var(--radius-lg);
  transition: opacity 0.15s ease-in-out;

  &__text {
    width: calc(100% - 24px);
  }

  &__close-icon {
    display: flex;
    justify-content: center;
    cursor: pointer;
    flex: 1;
    width: 24px;
    height: 24px;
  }
}
</style>
