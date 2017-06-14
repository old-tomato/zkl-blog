<template>
  <div>
    <div v-show="fileId === 0">
        <div class="form-group">
           <div class="jumbotron">
                <h1>欢迎创建文档</h1>
                <p>点击左侧“创建新文档”创建文档</p>
              </p>
        </div>
    </div>
    </div>
    <form v-show="fileId === -1 || fileId > 0">
      <div class="form-group">
        <form class="form-horizontal">
          <div class="form-group">
          <div class="col-md-10">
            <input type="text" class="form-control" placeholder="标题" v-model="fileName">
          </div>
          <div class="btn-group col-md-2">
            <label class="btn btn-primary" @click="saveFile" v-if="fileId === -1">保存</label>
            <label class="btn btn-primary" @click="updateFile" v-if="fileId > 0">更新</label>
            <label class="btn btn-danger" @click="deleteFile">删除</label>
          </div>
          </div>
        </form>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="描述" v-model="fileDesc">
      </div>
      <div class="form-group" id="FileContent">
        <textarea class="form-control" style="resize:none;" v-bind:style="{height:height + 'px'}" v-model="content"></textarea>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data(){
    return {
      height:0,
      fileName:'',
      fileDesc:'',
      content:'',
      fileId:0
    }
  },
  props:['uid'],
  methods:{
    saveFile(){
      this.$http.post('/file/saveFile',{
        fileName:this.fileName,
        fileDesc:this.fileDesc,
        uid:this.uid,
        content:this.content
      }).then(function(response){
        if(response.data.code == 200){
          // 通知左侧更新列表
          this.bus.$emit('reflash-file-list');
          this.bus.$emit('file-change-mode' , response.data.result);
        }
      });
    },
    readFile(){
      this.$http.post('/file/readFile',{
        id:this.fileId
      }).then(function(response){
        console.log(response);
        if(response.data.code == 200){
          // 计算文本框需要的高度
          // TODO 这里的高度存在很多问题！！！
          this.height = document.documentElement.clientHeight - window.document.getElementById('FileContent').offsetTop - 200;
          var fileInfo = response.data.result;
          this.content = fileInfo.content;
          this.fileName = fileInfo.fileName;
          this.fileDesc = fileInfo.fileDesc;
        }
      });
    },
    updateFile(){
      this.$http.post('/file/updateFile',{
        fileName:this.fileName,
        fileDesc:this.fileDesc,
        uid:this.uid,
        content:this.content,
        id:this.fileId
      }).then(function(response){
        if(response.data.code == 200){
          // 通知左侧更新列表
          this.bus.$emit('reflash-file-list');
          this.bus.$emit('file-change-mode' , response.data.result);
        }
      });
    },
    deleteFile(){
      if(this.fileId > 0){
        this.$http.post('/file/deleteFile',{
          id:this.fileId
        }).then(function(response){
          if(response.data.code == 200){
            // 通知左侧更新列表
            this.bus.$emit('reflash-file-list');
            this.bus.$emit('file-change-mode' , 0);
          }
        });
      }else{
        // 刷新界面
        this.bus.$emit('file-change-mode' , -1);
      }
    }
  },
  mounted(){
    var thisVue = this;
    this.bus.$on('file-change-mode',function(id){
      if(id == -1){
        thisVue.fileName='',
        thisVue.fileDesc='',
        thisVue.content='',
        thisVue.fileId = id;
        // 计算文本框需要的高度
        // TODO 这里的高度存在很多问题！！！
        thisVue.height = document.documentElement.clientHeight - window.document.getElementById('FileContent').offsetTop - 200;
      }else if(id > 0){
        // 读取文档
        thisVue.fileId = id;
        thisVue.readFile();
      }else if(id == 0){
        thisVue.fileId = 0;
        this.bus.$emit('clear-file-active');
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
