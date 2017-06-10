<template>
  <div id="head">
    <!-- 这里放置一个头部的标题栏 -->
    <!-- 该页面中的注释内容部分是用于进行测试使用的 -->
      <!-- <div class="col-md-8 test1">
          {{msg}}
      </div>
      <div class="col-md-4 btn btn-primary" @click='toAlert(msg)'>
            {{msg}}
      </div> -->
      <nav class="navbar navbar-inverse" >
          <div class="container">
            <div class="navbar-header">
              <img class="head_icon" src="../../assets/logo.png"/>
            </div>
            <p class="navbar-text">ZKL-BLOG PORJECT 版本：v0.01</p>
            <div class="navbar-form navbar-right pull-right" style="margin-right:-25px" v-if='notLogeIn'>
              <div class="input-group col-lg-4  col-lg-offset-1">
                <span class="input-group-addon">用户名</span>
                <input type="text" class="form-control" placeholder="" v-model='usernameChild'>
              </div>
              <div class="input-group col-lg-4">
                <span class="input-group-addon">密码</span>
                <input type="password" class="form-control" placeholder="" v-model='passwordChild'>
              </div>
              <div class="btn-group" role="group" aria-label="...">
                <button type="button" class="btn btn-default" @click="login">登陆</button>
                <button type="button" class="btn btn-default" @click="regist">注册</button>
              </div>
            </div>
            <p class="navbar-text navbar-right" v-if='!notLogeIn'>账户：{{username}}</p>
          </div>
    </nav>
  </div>

</template>

<script>
export default {
  name: 'head',
  data(){
    return {
      notLogeIn:true,
      usernameChild:'',
      passwordChild:'',
      uidChilde:''
    }
  },
  created(){

  },
  methods:{
    login(){
      this.$emit('login', this.usernameChild, this.passwordChild);
    },
    regist(){
      this.$router.push({name:'Regist'});
    }
  },
  props:['username','uid'],
  watch:{
    uid(oldUid , newUid){
      // 当UID发生变化，只要不是0，就说明当前已经登陆
      if(newUid != '' && newUid != 0){
          this.notLogeIn = true;
      }else if(oldUid != '' && oldUid != 0){
        this.notLogeIn = false;
        this.uidChilde = newUid;
        this.usernameChild = this.username;
      }else{
        this.notLogeIn = true;
      }
    }
  }
}
</script>

<style scoped>
  /*.test1 {
    background: red;
    height: 60px
  };
  .test2 {
    background: black;
    height: 60px
  }*/
  .center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
  };
  .head_icon{
    height: 50px;
    width: 40px;
    padding-top: 10%;
    padding-bottom: 10%
  };

</style>
