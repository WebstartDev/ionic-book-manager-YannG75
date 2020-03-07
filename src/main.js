import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';
import './plugins/ionic.js'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.use(Ionic);
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';

const currentIcons = Object.keys(allIcons).map(i => {
  return {
    ['ios-' + i]: allIcons[i].ios,
    ['md-' + i]: allIcons[i].md
  };
});
const iconsObject = Object.assign({}, ...currentIcons);
addIcons(iconsObject);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
