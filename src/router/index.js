import { createRouter, createWebHistory } from 'vue-router'
import loginPage from "@/views/loginView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: loginPage
    }
  ]
})

export default router