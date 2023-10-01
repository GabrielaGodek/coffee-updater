import { createRouter, createWebHistory } from 'vue-router'
import loginPage from "@/views/loginView.vue";
import adCoffeePage from "@/views/addView.vue";
import overview from "@/views/overviewView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: loginPage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: overview
    },
    {
      path: '/coffee',
      name: 'coffee',
      component: adCoffeePage
    }
  ]
})

export default router
