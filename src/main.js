// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource);

Vue.http.interceptors.push(function(request, next) {
  // 统一在请求头中添加COOKIE信息
  request.headers.set("Z-Blog-Cookie", getCookie("Z-Blog-Cookie"));
  // 统一增加请求的地址前面一段
  request.url="http://localhost:8081" + request.url;
  next((response)=>{
      if(response.data.code == 200){

      }else{
        
        this.$router.push({name:'Hello'});
      }
  });
});

function getCookie(cname){
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++)
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  VueResource,
  template: '<App/>',
  components: { App }
})
