<script>
import VueSkeletonLoader from 'skeleton-loader-vue'
export default {
  name: 'BaseSkeleton',
  components: { VueSkeletonLoader },
  props: {
    width: {
      type: [Number, String],
      default: () => null,
    },
    height: {
      type: [Number, String],
      default: () => null,
    },
  },
  computed: {
    getWidth() {
      const numberWidth = Number(this.width)
      if (!isNaN(numberWidth)) return `${numberWidth}px`
      else return this.width
    },
    getHeight() {
      const numberHeight = Number(this.height)
      if (!isNaN(numberHeight)) return `${numberHeight}px`
      else return this.height
    },
  },
}
</script>

<template>
  <VueSkeletonLoader
    :width="getWidth"
    :height="getHeight"
    animation="wave"
    :radius="5"
    color="#F4F4F4"
  />
</template>

<style lang="scss" scoped>
>>> .animation--wave::before {
  background: linear-gradient(90deg, transparent, #fff, transparent);
  animation: wave 1.5s linear 0.5s infinite;
}
</style>
