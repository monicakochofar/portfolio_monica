import { createRouter, createWebHistory } from 'vue-router'
import CompaniesPage from '@/pages/CompaniesPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CompaniesPage
    },
    // { // TODO: add back when ready
    //   path: '/projects',
    //   name: 'projects',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../components/pages/ProjectsPage.vue')
    // }
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (to.path !== from.path) {
      return {
        el: '#router-view',
        top: 30,
      }
    }
  }
})

export default router
