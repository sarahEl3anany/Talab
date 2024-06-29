import { createRouter, createWebHistory } from "vue-router";
// import App from './App.vue'
import Login from './components/Auth/login.vue';
import Register from './components/Auth/register.vue';
import index from './components/index.vue';
const routes = [
    {
        path:'/',
        component:index,
        name:index
    },
    {
        path:'/register',
        component:Register,
        name:Register
    },
    {
        path:'/login',
        component:Login,
        name:Login
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;
