import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/routers'

createApp(App)
    .use(router)
    .mount('#app')
