import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  }

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
   if(to.path === '/') {
     next({ path: '/home' })
   } else {
      next()
   }
})

export default router;
