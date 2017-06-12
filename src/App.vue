<template>
  <div id="app">
    <!-- 这里放置一个头部的标题栏 -->
    <titleBar :username='username' :uid='uid' v-on:login="login" v-on:logout="logout"></titleBar>
    <div >
      <router-view v-on:login="login" :uid="uid"></router-view>
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
  created(){
    // 检查是否存在COOKIE 如果存在 需要访问服务器请求当前用户是否合法，如果不合法，跳转到首页
    var cookie = this.getCookie("Z-Blog-Cookie");
    if(cookie ==""){
      // 跳转到首页
      this.$router.push({name:'Hello'});
    }else{
      // 请求网络
      this.$http.post('/login/autoLogin',{
          // 自动登录时需要在内容体中加入COOKIE信息
          cookie:cookie
      }).then(function(response){
        console.log(response);
        if(response.data.code == 200){
          this.uid = response.data.result.uid;
          // 加载首页的数据
          this.changeUserTitleInfo(response.data.result.username, this.uid);
          toastr.success("登陆成功");
        }
      });
    }
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
            this.changeUserTitleInfo(response.data.result.username, response.data.result.uid);
            var cookie = response.data.result.cookie;
            if(cookie != ''){
              // 保存COOKIE信息，默认的保存时间是7天
              var d = new Date();
              d.setDate(d.getDate() + 7);
              document.cookie = "Z-Blog-Cookie=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
              document.cookie="Z-Blog-Cookie=" + cookie + "; expires=" + d.toUTCString();
            }
            toastr.success("登陆成功");
            this.$router.push({name:'PrivateFileList'});
          }else{
            toastr.error(response.data.message);
          }
        });
    },
    logout(){
      document.cookie = "Z-Blog-Cookie=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      this.changeUserTitleInfo("","");
      this.$router.push({name:'Hello'});
    },
    getCookie(cname){
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i=0; i<ca.length; i++)
      {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
      }
      return "";
    },
    changeUserTitleInfo(username,uid){
      this.username = username;
      this.uid = uid;
    }
  }
}
</script>

<style>
</style>
