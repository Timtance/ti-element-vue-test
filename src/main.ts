import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import TiElement from 'ti-element-vue'
import 'ti-element-vue/lib/ti-element-vue.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/index.css'


//中文说明 'ti-element-vue/readme/README_CN.md
//English Readme 'ti-element-vue/readme/README_EN.md

createApp(App).use(ElementPlus, { locale }).use(TiElement).mount('#app')
