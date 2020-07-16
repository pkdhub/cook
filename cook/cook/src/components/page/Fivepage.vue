<template>
  <div class="fivepage">
    <div class="fivepage_head">
      <div>
      	<div v-if="userUname">
        <img src="../../assets/login.png" alt="">
        <span>欢迎您<span class="wol">{{uname}}</span></span></br>
        </div>
        <div v-if="!userUname">
        <img src="../../assets/login.png" alt="">
        <span @click="login()">请登录</span>
        </div>
         
        <span @click="loginOut()" v-if="userUname">退出</span>
      </div>
      <ul>
        <li>
          <span>0</span>
          <p>帖子</p>
        </li>
        <li>
          <span>0</span>
          <p>菜谱</p>
        </li>
        <li>
          <span>0</span>
          <p>关注</p>
        </li>
      </ul>
    </div>
    <div class="fivepage_2">
      <ul>
        <li>
          <span>我的豆豆</span>
          <p>0</p>
        </li>
        <li>
          <span>我的积分</span>
          <p>0</p>
        </li>
        <li>
          <span>优惠卷</span>
          <p>0</p>
        </li>
      </ul>
    </div>
    <div class="fivepage3">
      <div class="fivepage_3">
            <span>vip</span>
            <span style="color:#774a4a">开通会员</span><span>1000个名厨秘法</span> <span>立即加入 &gt;</span>
        </div>
      </div>
      <div class="fivepage4">
        <mt-cell style="border-bottom:1px solid #f4f0f0" title="我的订单" is-link></mt-cell>
        <mt-cell style="border-bottom:1px solid #f4f0f0" title="任务中心" is-link></mt-cell>
        <mt-cell style="border-bottom:1px solid #f4f0f0" title="我的收藏" is-link></mt-cell>
        <mt-cell  title="浏览历史" is-link></mt-cell>
        
      </div>
      <div class="fivepage5">
        <mt-cell title="反馈帮助" is-link></mt-cell>
        <mt-cell title="设置">
          <span style="color:#aaa;font-size:12px">版本号：最新</span>
        </mt-cell>
      </div>
  </div>
</template>
<script>
import {mapState} from "vuex"
export default {
  data(){
    return{
    uname:this.$store.state.userUname
    }
  },
computed:{
		...mapState(["userUname"])
	},
  methods:{
    login(){
      this.$router.push("/login")
    },
    loginOut(){
    	this.$store.commit('setUserUname',"")
//  	console.log(this.uname)
    }
  }
}
</script>
<style scoped>
	.wol{
		color:red;
		font-size: 20px;
	}
  .fivepage{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #f4f0f0;
  }
  .fivepage_head{
    background-image: url("../../assets/19.png");
    opacity: 0.9;
  }
  .fivepage_head>div{
    display: flex;
    justify-content: space-between;
    align-items: center;
     padding-top: 15px;
     
  }
  .fivepage_head>div>div{
    padding-left:30px;
    display: flex;
    align-items: center;
  }

  .fivepage_head>div>span{
    padding-right: 15px;
  }
  ul{
    list-style: none;
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding-left: 15px;
  }
  div .fivepage_2>ul{
    background-color: #fff;
    padding-top:15px ;
    margin:0;
    
  }
  .fivepage3{
    background-color: #fff;
    margin-top:15px;
    padding-top: 10px;
    height: 60px;
    text-align: center;
    
  }
  .fivepage_3{
    background-color:#f5f5af;
    width: 92%;
   margin-left: 15px;
    height:50px;
    text-align: center;
    line-height: 50px;
  }
  .fivepage_3>span:first-child{
  background-image: url("../../assets/vip_span.png");
  background-repeat: no-repeat;
  color: #f5f5af;
  padding-right:5px ;
  }
.fivepage_3>span:nth-child(3),.fivepage_3>span:nth-child(4){
    font-size: 13px;
    color:#80694e;
    padding-left:10px; 
}
.fivepage4,.fivepage5{
  margin-top: 15px;
}

</style>