import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import icon from './components/shared/icon.vue';
import './assets/stylesheets/base.scss';

const app = createApp(App);

app.use(router);

// global component register
app.component('icon', icon);

app.mount('#app');
