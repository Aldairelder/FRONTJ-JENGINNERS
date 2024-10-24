import './assets/css/main.css'
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css'

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.mount('#app');
