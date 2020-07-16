<template>
  <div class="fourpage">
    <div class="fourpage_head">
      <img src="../../assets/shopping_cart.png" width="7%"  alt="" class="fourpage_head_img1">
      <span>消息</span>
      <img src="../../assets/wt.png" width="7%" alt="" class="fourpage_head_img2" >
    </div>
    <div class="fourpage_body">
      <ul>
      <li><img  width="25px" src="../../assets/pr.png" alt=""></li>
      <li>官方小秘书</li>
      </ul>
      <ul>
        <li v-if="!userUname">登陆后显示您的消息</li>
        <li><mt-button type="danger" size="normal" plain @click="login" v-if="!userUname">请登录</mt-button></li>
      </ul>
    </div>
  </div>
</template>
<script>
	import {mapState} from "vuex"
export default {
  data(){
    return{

    }
  },
  computed:{
		...mapState(["userUname"])
	},
  methods:{
    login(){
      this.$router.push("/login")
    }
  }
}
</script>
<style scoped>
  .fourpage{
    margin-bottom: 100px;
  }
  .fourpage_head{
    position: fixed;
    z-index: 999;
    width: 100%;
    padding-top:10px;
    padding-bottom:10px ;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
  }
  .fourpage_head_img1{
    padding-left:15px ;
  }
  .fourpage_head_img2{
    padding-right:15px ;
  }
  .fourpage_body{
   padding-top:45px;
   background-color: #f4f0f0; 
    height: 100%;
    width: 100%;
    position: fixed;
  }
  .fourpage_body>ul{
    list-style: none;
    display: flex;
    align-items: center;
   
  }
  
  ul>li:nth-child(2){
    color: green;
    padding-left: 10px;
  }
  .fourpage_body>ul:nth-child(2){
    display: block;
    text-align: center;
    margin-top:70%;
     padding-left: 0;
  }
  button{
    margin-top: 20px;
  }
</style>