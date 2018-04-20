import Vue from 'vue'
import Router from 'vue-router'
import Care from '@/pages/care/care'
import Share from '@/pages/share/share'
import MovHot from '@/pages/share/component/mov_hot';
import MovNew from '@/pages/share/component/mov_new';

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Care',
      component: Care
    },
    {
      path: '/share',
      name: 'Share',
      component: Share,
      children:[
        {
          path: '/',
          name: '/hot',
          component: MovHot
        },
        {
          path: '/hot',
          name: 'MovHot',
          component: MovHot
        },
        {
          path: '/new',
          name: 'MovNew',
          component: MovNew
        }
      ]
    }
  ]
})
