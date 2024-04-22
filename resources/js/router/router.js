import {createWebHistory,createRouter} from 'vue-router'

import test from '../components/Test.vue';

const routes = [
    {
        path:'/test',
        component:test,

    },
]




const router   = createRouter({
    history:createWebHistory(),
    routes
});

export default router;
