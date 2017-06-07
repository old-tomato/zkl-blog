<template>
  <div id="app">
    <!-- 这里放置一个头部的标题栏 -->
    <titleBar :userId='userId' :username='username' v-on:jumpToFileList='toFileList'></titleBar>
    <router-view></router-view>
  </div>
</template>

<script>
import titleBar from './components/head/TitleBar.vue'

export default {
  name: 'app',
  data(){
    return {
      userId:-1,
      username:''
    }
  },
  components:{
    titleBar
  },
  // 启动以后，访问COOKIE查看是否存在已经登陆的内容，如果存在，就进行一次验证，如果不存在，显示默认内容
  created(){
    console.log("start to get data");
    var self = this;

    this.$http.post('http://localhost:8081/login/checkInfo',{
      username:'zkl',
      password:'123456'
    }).then(function(data){
      this.username = data.body.username;
      this.userId = data.body.strCookie;
    });
  },
  methods:{
    toFileList(){
      // 注意这里使用的不是$route , 而是 $router
      this.$router.push({name:'PrivateFileList'});
    }
  }
}
</script>

<style>
</style>
