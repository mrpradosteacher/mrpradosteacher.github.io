import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router.js'
import { createStore } from 'vuex'
import storeApp from './store'

const app = createApp(App);
const store = createStore(storeApp)

app.use(router)
app.use(store)
app.mount('#app')