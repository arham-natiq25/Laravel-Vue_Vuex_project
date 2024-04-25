
import { createApp } from 'vue';

import router from './router/router'

import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

// import store from './store';
import index from './store/index';

createApp(App).use(router).use(index).mount("#app")
