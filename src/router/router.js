import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue') // 懒加载
  },
  // 动态路由
  {
    path: '/argu/:name',
    component: () => import('@/views/argu.vue')
  },

  {
    path: '/users/register',
    name: 'register',
    component: () => import('@/views/user/register.vue')
  },
  // 嵌套路由
  {
    path: '/parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },

  {
    path: '*',
    component: () => import('@/views/404.vue')
  }
]
