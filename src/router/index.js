import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignForm from '../views/SignForm.vue'
import RegisterForm from '../views/RegisterForm.vue'
import SearchHotels from '../views/SearchHotels.vue'
import HotelDetail from '../views/HotelDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sign',
      name: 'sign',
      component: SignForm
    },
    {
    path: '/register',
    name: 'register',
    component: RegisterForm
    },
    {
      path: '/hotels',
      name: 'hotels',
      component: SearchHotels
    },
    {
      path: '/details/:id',
      name: 'details',
      component: HotelDetail
    },
    
  ]
})

export default router
