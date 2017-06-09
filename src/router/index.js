import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/body/Hello.vue'
import PrivateFileList from '@/components/body/PrivateFileList.vue'
import Login from '@/components/body/Login.vue'

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
      path:'/login',
      name:'Login',
      component:Login
    }
  ]
})
