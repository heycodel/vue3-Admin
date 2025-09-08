import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import {viteMockServe} from 'vite-plugin-mock'
// https://vite.dev/config/
export default defineConfig(({command})=>{
  return {
  plugins: [vue(),
    viteMockServe({
    enable: command =='serve',//保证开发阶段可以使用mock接口
  })],
  resolve:{
      alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:`@use "@/styles/variable.scss" as *;`,
      }
    }
  }
}
})
