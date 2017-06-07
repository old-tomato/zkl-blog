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
      <nav class="navbar navbar-inverse"  role="navigation">
          <div class="container">
            <div class="navbar-header">
              <img class="head_icon" src="../../assets/logo.png"/>
            </div>
            <p class="navbar-text">ZKL-BLOG PORJECT 版本：v0.01</p>
            <form class="navbar-form navbar-left" style="width:500px">
              <div class="input-group" style="width:100%">
                <input type="text" class="form-control col-md-8" placeholder="搜索公开的文档" >
                <span class="btn btn-default input-group-addon" >搜索</span>
              </div>
            </form>
            <button type="button" class="btn btn-inverse navbar-btn navbar-right" v-if='notLogeIn'>登陆</button>
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
      notLogeIn:true
    }
  },
  created(){

  },
  methods:{
    // toAlert(msg){
    //   alert(msg);
    // }
  },
  props:['userId','username'],
  watch:{
    userId(oldId,newId){
      if(this.userId != -1){
        this.notLogeIn = false;
        // 变更以后，刷新首页进入到blog列表界面
        this.$emit('jumpToFileList');
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
