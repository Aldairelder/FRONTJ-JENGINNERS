import './assets/css/main.css';
import './assets/css/index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';
import router from './router'; // Importa el router
import { createPinia } from 'pinia'; // Importa Pinia

const app = createApp(App);

// Configura PrimeVue con el tema Aura
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

// Configura Pinia
const pinia = createPinia();
app.use(pinia);

// Configura el router
app.use(router);

app.mount('#app');
