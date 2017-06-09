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
            <form class="navbar-form navbar-left" style="padding:0px">
              <div class="input-group  col-lg-offset-2" style="width:300px">
                <input type="text" class="form-control" placeholder="搜索公开的文档" >
                <span class="btn btn-default input-group-addon" >搜索</span>
              </div>
            </form>

            <div class="row navbar-form navbar-right pull-right" style="margin-right:-25px">
              <div class="input-group col-lg-4  col-lg-offset-2">
                <span class="input-group-addon">用户名</span>
                <input type="text" class="form-control" placeholder="" v-model='username'>
              </div>
              <div class="input-group col-lg-4 ">
                <span class="input-group-addon">密码</span>
                <input type="password" class="form-control" placeholder="" v-model='password'>
              </div>
              <div class="input-group">
                <button type="button" class="btn btn-default" @click="login">登陆</button>
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
      username:'',
      password:''
    }
  },
  created(){

  },
  methods:{
    login(){
      this.$emit('login',this.username,this.password);
    }
  },
  props:[],
  watch:{
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
