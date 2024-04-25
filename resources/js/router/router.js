import {createWebHistory,createRouter} from 'vue-router'

import test from '../components/Test.vue';
import Home from '../pages/Home.vue';
import Product from '../pages/Product.vue';

const routes = [
    {
        path:'/test',
        component:test,
        name : 'test'

    },
    {
        path:'/home',
        component:Home,
        name : 'home'
    },
    {
        path:'/product/:id',
        component:Product,
        name: 'product' ,
        props:true,
    },
]




const router   = createRouter({
    history:createWebHistory(),
    routes
});

export default router;
