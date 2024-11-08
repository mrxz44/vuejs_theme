import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router

import './core/styles/index.css'; // Import any global theme styles

createApp(App).use(router).mount('#app');
