import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VuelidatePlugin } from '@vuelidate/core'
import ElementPlus, { ElDatePicker } from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


createApp(App).use(store).use(router).use(VuelidatePlugin).use(ElementPlus).use(ElDatePicker).mount('#app')
