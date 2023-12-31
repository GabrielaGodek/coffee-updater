import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import { VeeValidatePlugin } from "./includes/validation";

import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

app.use(pinia)
app.use(router)
app.use(VeeValidatePlugin)

app.mount('#app')