import { createPinia } from 'pinia'

import { createApp } from 'vue'

import './assets/style/global.scss'

import App from './App.vue'

createApp(App).use(createPinia()).mount('#app')
