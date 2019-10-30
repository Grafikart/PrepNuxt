import VueTimeago from 'vue-timeago'
import Vue from 'vue'

Vue.use(VueTimeago, {
  name: 'Timeago',
  locale: 'fr',
  locales: {
    fr: require('date-fns/locale/fr')
  }
})
