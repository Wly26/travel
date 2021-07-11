import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
// ElementUI框架
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// ElementUI框架-end

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
