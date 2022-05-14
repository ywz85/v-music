import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'square', // 路由重定向，设置默认页面
    name: 'index',
    component: () => import('../views/Index.vue'),
    children: [
      {
        path: 'square',
        component: () => import('../views/Square.vue')
      },
      {
        path: 'radio',
        component: () => import('../views/Radio.vue')
      },
      {
        path: 'mv',
        component: () => import('../views/Mv.vue')
      },
      {
        path: 'list',
        component: () => import('../views/List.vue')
      },
      {
        path: 'history',
        component: () => import('../views/History.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
