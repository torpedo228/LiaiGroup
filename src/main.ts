import './assets/_css/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  mirror: true,
  duration:1000
});

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
