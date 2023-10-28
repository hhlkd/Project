import { createApp } from 'vue';
// import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-teal/theme.css';

// import router from './router'
// import store from './store'

// Vue.config.productionTip = false
// Vue.prototype.$store = store
// Vue.prototype.$router = router
// Vue.prototype.$http = axios
// Vue.prototype.$axios = axios

// Vue.use(ElementUI)
// Vue.use(Vuex)
// Vue.use(VueAxios, axios)
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: require('@/assets/images/error.png'),
//   loading: require('@/assets/images/loading.gif')
// })
const app  = createApp(App);
app.mount('#app');
app.use(PrimeVue);
