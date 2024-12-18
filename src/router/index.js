
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CreateView from '../views/CreateView.vue'
import UpdateView from '../views/UpdateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView
    },
    {
      path: '/update/:id',
      name: 'update',
      component: UpdateView,
      props: true
    }
  ]
})

export default router
