<template>
  <!-- 设想是：这个界面左侧为列表栏，右侧为正文栏 -->
  <div class="container-fluid" id="PrivateFileList">
  <FileLeftList class="col-md-4" v-bind:style="{height:height+'px'}"></FileLeftList>
  <FileLeftList class="col-md-8" v-bind:style="{height:height+'px'}" ></FileLeftList>
  </div>
</template>

<script>
import FileLeftList from './file_info/FileLeftList.vue';
export default {
  data(){
    return {
      contentHeight:{},
      aaa:{'hegiht':300},
      height:300
    };
  },
  components:{
    FileLeftList
  },
  mounted(){
    console.log("!!!!!!!!!!!!!!");
    // console.log(this);
    console.log(window.document.getElementById('PrivateFileList').offsetTop);
    console.log(document.documentElement.clientHeight);
    this.height = document.documentElement.clientHeight - window.document.getElementById('PrivateFileList').offsetTop - 30
    console.log(this.height);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
