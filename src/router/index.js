import Vue from 'vue'
import VueRouter from 'vue-router'
import {utils} from "@/utils/js";

Vue.use(VueRouter)

utils.resolveDupRoute();


export const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/home/Home'),
    meta: {
      title: "购物街",
      cache: {}
    }
  },
  {
    path: '/category',
    component: () => import('@/views/category/Category'),
    meta: {
      title: "分类"
    }
  },
  {
    path: '/cart',
    component: () => import('@/views/cart/Cart'),
    meta: {
      title: "购物车"
    }
  },
  {
    path: '/profile',
    component: () => import('@/views/profile/Profile'),
    meta: {
      title: "个人中心"
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
  }

});


router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "购物街";

  next();
});

export default router
