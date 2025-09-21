import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './styles/index.scss'
import router from './router'
import pinia from './store'
import * as ElIconModules from '@element-plus/icons-vue'
const app = createApp(App)
for (const iconName in ElIconModules) {
  if (Reflect.has(ElIconModules, iconName)) {
    const item = ElIconModules[iconName as keyof typeof ElIconModules]
    app.component(iconName, item)
  }
}
app.use(ElementPlus).use(router).use(pinia)
app.mount('#app')
// console.log(import.meta.env)

//main.ts文件



