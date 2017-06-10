<template>
  <div class="container col-sm-10 col-sm-offset-1">
    <div class="panel panel-default">
      <div class="panel-body">
        <form class="form-horizontal">
          <div class="page-header">
            <h1>注册
              <small>欢迎使用任何方法攻击这个网站！！！</small>
            </h1>
          </div>
          <div class="form-group center-block">
            <label for="username" class="col-sm-2 control-label">用户名</label>

            <div class="col-sm-10">
              <input type="text" class="form-control" id="username" placeholder="" v-model="username">
            </div>
          </div>
          <div class="form-group center-block">
            <label for="password" class="col-sm-2 control-label">密码</label>

            <div class="col-sm-10">
              <input type="password" class="form-control" id="password" placeholder="" v-model="password">
            </div>
          </div>
          <div class="form-group center-block">
            <label for="mailAddress" class="col-sm-2 control-label">邮箱</label>

            <div class="col-sm-10">
              <input type="email" class="form-control" id="mailAddress" placeholder="" v-model="mailAddress">
            </div>
          </div>
          <div class="row ">
            <button type="button" class="btn btn-default center-block" @click="regist">提交</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        username:"",
        password:"",
        mailAddress:""
      }
    },
    methods:{
      regist(){
      // 进行自动登陆操作
        if(this.username == '' || this.password == '' || mailAddress == ''){
          toastr.error("数据没有填写完整");
          return;
        }
        // 注册
        this.$http.post('/login/regist',{
          username:this.username,
          password:this.password,
          mailAddress:this.mailAddress
        }).then(function(response){
          console.log(response);
          if(response.data.code == 200){
            toastr.success("注册成功，将会自动跳转");
            // 保存COOKIE信息
            var d = new Date();
            d.setDate(d.getDate() + 7);
            document.cookie="Z-Blog-Cookie=" + response.data.result + "; expires=" + d.toUTCString();
            this.$emit('login', this.username, this.password);
          }else{
              toastr.error(response.data.message);
          }
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
