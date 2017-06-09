<template>
  <div id="app">
    <!-- 这里放置一个头部的标题栏 -->
    <titleBar @login="login"></titleBar>
    <router-view></router-view>
  </div>
</template>

<script>
import titleBar from './components/head/TitleBar.vue'

export default {
  name: 'app',
  data(){
    return {
      username:'',
      password:''
    }
  },
  components:{
    titleBar
  },
  // 启动以后，访问COOKIE查看是否存在已经登陆的内容，如果存在，就进行一次验证，如果不存在，显示默认内容
  created(){
  },
  methods:{
    login(username,password){
      console.log(username + "==============" + password);
    }
  }
}
</script>

<style>
</style>
