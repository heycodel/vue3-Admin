import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './styles/index.scss'
import router from './router'
import pinia from './store'
const app = createApp(App)
app.use(ElementPlus).use(router).use(pinia)
app.mount('#app')
// console.log(import.meta.env)