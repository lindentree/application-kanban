import { createRouter, createWebHistory } from 'vue-router';

import App from '../App.vue'

const routerHistory = createWebHistory()


const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: App
    }
    
  ]
})

export default router