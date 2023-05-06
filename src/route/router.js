import * as VueRouter from 'vue-router'
import Login from '../pages/Login.vue'
import Main from '../pages/Main.vue'

let routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/main',
    component: Main
  }
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});