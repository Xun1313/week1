import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'background',
      component: () => import(/* webpackChunkName: "background" */ './views/background.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import(/* webpackChunkName: "home" */ './views/home.vue'),
        },
        {
          path: '/todo',
          name: 'todo',
          component: () => import(/* webpackChunkName: "todo" */ './views/todo.vue'),
        },
        {
          path: '/statistic',
          name: 'statistic',
          component: () => import(/* webpackChunkName: "statistic" */ './views/statistic.vue'),
        },
      ],
    },
  ],
})
