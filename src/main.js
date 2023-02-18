import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import './assets/all.scss'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
app.use(VueAxios, axios)

app.use(createPinia())
app.use(router)
app.use(LoadingPlugin);
app.mount('#app')
