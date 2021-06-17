import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'typeface-noto-sans'
import 'vue-awesome/icons/times'
import 'vue-awesome/icons/question'
import Icon from 'vue-awesome/components/Icon'
import BaseComponents from './components/base'

Vue.component('v-icon', Icon)
Vue.component('BaseList', BaseComponents.BaseList)
Vue.component('BaseCard', BaseComponents.BaseCard)
Vue.component('BaseInput', BaseComponents.BaseInput)
Vue.component('BaseSkeleton', BaseComponents.BaseSkeleton)
Vue.component('BaseButton', BaseComponents.BaseButton)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
