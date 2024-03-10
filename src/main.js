import './assets/main.css'

import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import { setup } from './setup'

const app = createApp(App)
app.use(createPinia())
app.use(router)

setup(app)

app.mount('#app')
