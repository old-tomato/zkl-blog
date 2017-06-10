import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/body/Hello.vue'
import PrivateFileList from '@/components/body/PrivateFileList.vue'
import Regist from '@/components/body/Regist.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/fileList',
      name:'PrivateFileList',
      component:PrivateFileList
    },
    {
      path:'/regist',
      name:'Regist',
      component:Regist
    }
  ]
})
