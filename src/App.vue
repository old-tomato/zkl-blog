<template>
  <div id="app">
    <!-- 这里放置一个头部的标题栏 -->
    <titleBar :username='username' :uid='uid' v-on:login="login"></titleBar>
    <div >
      <router-view v-on:login="login"></router-view>
    </div>
  </div>
</template>

<script>
import titleBar from './components/head/TitleBar.vue'

export default {
  name: 'app',
  data(){
    return {
      username:'',
      password:'',
      uid:''
    }
  },
  components:{
    titleBar
  },
  // 启动以后，访问COOKIE查看是否存在已经登陆的内容，如果存在，就进行一次验证，如果不存在，显示默认内容
  created(){
  },
  methods:{
    login(username , password){
      // 自动登陆然后跳转到正确的界面中
        this.$http.post('/login/login',{
          username:username,
          password:password
        }).then(function(response){
          console.log(response);
          if(response.data.code == 200){
            toastr.success("登陆成功");
            this.username = response.data.result.username;
            this.uid = response.data.result.uid;
            this.$router.push({name:'PrivateFileList'});
          }else{
            toastr.error(response.data.message);
          }
        });
    }
  }
}
</script>

<style>
</style>
