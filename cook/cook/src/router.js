import Vue from 'vue'          //引入Vue对象
import Router from 'vue-router'//引入路由
//引入自定义组件
import Cook from "./components/page/Cook.vue"
import Cook1 from "./components/page/Cook1.vue"
import Search from "./components/page/Search.vue"
import Shopdetail from "./components/page/Shopdetail.vue"
import Login from "./components/page/Login.vue"
import Register from "./components/page/Register.vue"
Vue.use(Router)               
export default new Router({
  mode:'history',
  //配置组件-:访问路径
  routes: [
    {path:"",component:Cook},
    {path:"/cook",component:Cook1},
    {path:"/search" ,component:Search},
    {path:"/shopdetail",component:Shopdetail},
    {path:"/login",component:Login},
    {path:"/login/register",component:Register}
  ]
})
