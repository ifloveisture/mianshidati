import { createApp } from 'vue'
import './reset.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { router }  from './route/router'

createApp(App)
.use(ElementPlus)
.use(router)
.mount('#app')
