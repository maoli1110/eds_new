import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'


import content from '../views/content.vue'


import main from '../views/main.vue'

import qiye from '../views/content/qiye'
import shuju from '../views/content/shuju'
import quanxian from '../views/content/quanxian'
import bim from '../views/content/bim'
import goujian from '../views/content/goujian'
import dinge from '../views/content/dinge'
import jiage from '../views/content/jiage'
import zhibiao from '../views/content/zhibiao'
import shezhi from '../views/content/shezhi'

import survey from '../views/content/qiye/survey'
import organization from '../views/content/qiye/organization'
import space from '../views/content/qiye/space'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'content',
      redirect: '/content/qiye/survey',
      component: content,
      children: [
      	{
          path: '/content/qiye',
          redirect: '/content/qiye/survey',
          component: qiye,
          name: 'qiye',
          children: [
            {
              path: '/content/qiye/survey',
              component: survey,
              name: 'survey',
            },
            {
              path: '/content/qiye/organization',
              component: organization,
              name: 'organization',
            },
            {
              path: '/content/qiye/space',
              component: space,
              name: 'space',
            }
          ]
        },
        {
          path: '/content/shuju',
          component: shuju,
          name: 'shuju'
        },
        {
          path: '/content/quanxian',
          component: quanxian,
          name: 'quanxian'
        },
        {
          path: '/content/bim',
          component: bim,
          name: 'bim'
        },
        {
          path: '/content/goujian',
          component: goujian,
          name: 'goujian'
        },
        {
          path: '/content/dinge',
          component: dinge,
          name: 'dinge'
        },
        {
          path: '/content/jiage',
          component: jiage,
          name: 'jiage'
        },
        {
          path: '/content/zhibiao',
          component: zhibiao,
          name: 'zhibiao'
        },
        {
          path: '/content/shezhi',
          component: shezhi,
          name: 'shezhi'
        },
      ]
    },
    

  ]
})
