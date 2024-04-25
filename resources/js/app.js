
import { createApp } from 'vue';

import router from './router/router'

import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
      import 'bootstrap/dist/js/bootstrap.min';


import store from './store';

createApp(App).use(router).use(store).mount("#app")
