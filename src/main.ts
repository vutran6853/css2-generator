import { createApp } from 'vue'
import App from './App.vue'
import router from './router/route'
import store from './store/store'

const app = createApp(App) 
app.use(store)
app.use(router)
app.mount('#app')
