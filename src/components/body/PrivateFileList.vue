<template>
  <!-- 设想是：这个界面左侧为列表栏，右侧为正文栏 -->
    <div class="container" id="PrivateFileList">
      <FileLeftList class="col-md-3" v-bind:style="{height:height+'px'}" :uid="uid"></FileLeftList>
      <FileRight class="col-md-9" style="padding-left:2%" v-bind:style="{height:height+'px'}" :uid="uid"></FileRight>
    </div>
</template>

<script>
import FileLeftList from './file_info/FileLeftList.vue';
import FileRight from './file_info/FileRight.vue';

export default {
  data(){
    return {
      contentHeight:{},
      height:300
    };
  },
  components:{
    FileLeftList,FileRight
  },
  mounted(){
    // 计算当前需要的滚动条的高度
    this.height = document.documentElement.clientHeight - window.document.getElementById('PrivateFileList').offsetTop - 30;
  },
  props:['uid']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
