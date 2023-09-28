import { createRouter, createWebHistory } from 'vue-router'
import loginPage from "@/views/loginView.vue";
import adCoffeePage from "@/views/addView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: loginPage
    },
    {
      path: '/coffee',
      name: 'coffee',
      component: adCoffeePage
    }
  ]
})

export default router
