import { createRouter, createWebHistory } from 'vue-router'
import Payrolls from '@/views/Payrolls.vue'
const routes = [
  {
    path: '/',
    name: 'Payroll',
    component: Payrolls
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
