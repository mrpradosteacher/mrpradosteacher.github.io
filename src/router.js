import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'rescue' }
  },
  {
    path: '/rescue',
    component: () => import(/* webpackChunkName: "rescue" */ './views/rescue/Rescue.vue'),
    children: [
      { 
        path: ':id', 
        name: 'rescue-view',
        component: () => import(/* webpackChunkName: "rescue-view" */ './views/rescue/RescueView.vue'),
      },
      { 
        path: '', 
        name: 'rescue',
        component: () => import(/* webpackChunkName: "rescue-list" */ './views/rescue/RescueList.vue'),
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
