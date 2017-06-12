<template>
  <!-- 设想是：这个界面左侧为列表栏，右侧为正文栏 -->

  <div class="container-fluid panel panel-default"id="test">
    <div class="panel-body">
      <button type="button" class="btn btn-primary" style="width:100%" @click="createNewFile">创建新文档</button>
      <div class="list-group" style="margin-top:10px">
          <!-- 这里写文件列表 -->
          <a v-for="(file,index) in fileList" class="list-group-item" v-bind:class="{active: isActiveList[index]}" @click="selectFile(index)">{{file.fileName}}</a>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  data(){
    return{
      fileList:[],
      isActiveList:[]
    }
  },
  mounted(){
    var thisVue = this;
    this.bus.$on('reflash-file-list',function(){
      thisVue.queryFileList();
    });
    this.bus.$on('clear-file-active',function(){
      thisVue.changeActiveStatus(-1);
    })
    this.queryFileList();
  },
  props:['uid'],
  methods:{
    queryFileList(){
      // 请求获得文件列表信息
      this.$http.post('/file/fileList',{
        uid:this.uid
      }).then(
        function(response){
          console.log(response);
          if(response.data.code == 200){
            this.fileList = response.data.result;
          }
        }
      );
    },
    createNewFile(){
      // 右侧界面切换到新增加文件模式
      this.changeActiveStatus(-1);
      this.bus.$emit('file-change-mode',-1);
    },
    selectFile(index){
      this.changeActiveStatus(index);
      this.bus.$emit('file-change-mode',this.fileList[index].id);
    },
    changeActiveStatus(index){
      var newStatus = [];
      for (var i = 0; i < this.fileList.length; i++) {
        if(i == index){
          newStatus[i] = true;
        }else{
          newStatus[i] = false;
        }
      }
      this.isActiveList = newStatus;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#test{overflow-y:auto;}
</style>
