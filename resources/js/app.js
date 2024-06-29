import './bootstrap';
import '../css/app.css'
import App from './App.vue'
import { createApp } from 'vue';
import router from './router'
import fontAwesome from './plugins/font-awesome';

createApp(App).use(router).use(fontAwesome).mount('#app');
