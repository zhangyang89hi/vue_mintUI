import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Login from '../components/login.vue'
import Register from '../components/register.vue'
import Home from '../components/home.vue'
import Profile from '../components/profile.vue'
import News from '../components/news.vue'
import Goods from '../components/goods.vue'
import User from '../components/user.vue'
import Cart from '../components/cart.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
        path: '/',
        redirect: {
            name: 'Home'
        }
    },
    {
		path: '/hello',
		name: 'HelloWorld',
		component: HelloWorld
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name:'Register',
        component: Register
    },
    {
        path: '/home',
        name:'Home',
        component: Home,
        children: [
            {
                path: 'profile',
                name: 'Profile',
                component: Profile
            },
            {
                path: 'news',
                name: 'News',
                component: News
            },
            {
                path: 'goods',
                name: 'Goods',
                component: Goods
            },
            {
                path: 'user',
                name: 'User',
                component: User
            },
            {
                path: 'cart',
                name: 'Cart',
                component: Cart
            }
        ]
    }
  ]
});

// router.beforeEach((to, from, next) => {
//     next();
// })

export default router;
