<template>
  <!-- 设想是：这个界面左侧为列表栏，右侧为正文栏 -->

  <div class="container-fluid panel panel-default"id="test">
    <div class="panel-body">
      <ul class="nav nav-pills">
        <li role="presentation" class="active"><a href="#">新文档</a></li>
        <li role="presentation"><a href="#">保存</a></li>
      </ul>
      <div class="list-group">
          <!-- 这里写文件列表 -->

      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  created(){
    // 请求获得文件列表信息
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#test{overflow-y:auto;}
</style>
