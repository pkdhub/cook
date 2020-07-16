<template>
  <div class="login">
    <div class="fh">
    <img @click="goback()" src="../../assets/fh.png" alt="">
    </div>
    <span>手机号注册/登录</span>
    <p>首次登录自动为您注册</p>
    <div class="login_1">
    	<input type="text" v-model="phone" placeholder="手机号">
      <input type="text" v-model="uname" placeholder="用户名">
      <div class="yzm">
      <input type="password" v-model="upwd1" placeholder="请输入密码">
      </div>
      <div class="yzm">
      <input type="password" v-model="upwd2" placeholder="请确认密码">
      </div>
    </div>
    <mt-button size="large" type="danger" @click="logining">注册</mt-button>

    <div class="login_3">
      <img src="../../assets/QQ.png" alt="">
      <img src="../../assets/wei-xin.png" alt="">
      <img src="../../assets/weibo.png" alt="">
      <img src="../../assets/youxiang.png" alt="">
    </div>
    <div class="login_4">
      <span>注册/登录即代表同意</span>
      <span>《用户协议》</span>
      <span>和</span>
      <span>《隐私协议》</span>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      	uname:"",
        phone:"",
        upwd1:"",
        upwd2:"", 
    }
  },
  methods:{
    logining(){
    	var phone=this.phone;
    	var uname=this.uname;
    	var upwd1=this.upwd1;
    	var upwd2=this.upwd2;
    	var reg = /^[0-9]{11}$/i;
    	var reg1 = /^[a-z0-9]{3,20}$/i;
    	  if(uname===''||phone===''||upwd1===''||upwd2===""){
        this.$toast("用户名或手机号或密码不能为空")
        return
      }
    	if(!reg.test(phone)){
    		this.$messagebox("消息","手机号格式有误");
    		return;
    	}
    	if(!reg1.test(uname)){
    		this.$messagebox("消息","用户名格式有误");
    		return;
    	}
    
      if(upwd1!==upwd2){
      	this.$messagebox("消息","两次输入密码不一致");
      	return
      }
      var obj={uname:uname,phone:phone,upwd:upwd1}
      console.log(obj)
      this.axios.post("/user/registers",obj).then(res=>{
      	console.log(res)
      	if(res.data.code==200){
      		this.$toast("注册成功")
      		this.$router.push("/login")
      	}else if(res.data.code==400){
      		this.$messagebox("消息","手机号或用户名被注册了!")
      	}else{
      		this.$messagebox("消息","注册失败")
      	}
      })
      }
    },
  }

</script>
<style scoped>
.fh{
  text-align: start;
}
.fh>img{
  width:25px;
}
.login{
  background-color: #fff;
  padding: 20px;
  text-align: center;
}
.login>span{
  font-weight: bold;
  font-size: 30px;
}
.login>p{
  font-size: 14px;
  color: #aaa;
}
.login_1{
  margin-top: 50px;
  padding-bottom: 50px;
}
input{
    background-color: #fff;
    border-radius: 0;
    border-bottom: 1px solid #ccc;
    width: 89%;
    height: 40px;
    padding-left: 40px;
    margin-top: 10px;
    
  }

  .login_1>input:first-child{
    background-image: url("../../assets/phone.png");
  }
  .yzm{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
  }
  .yzm>input{
    background-image: url("../../assets/yzm.png");
    width: 50%;
    border-bottom: 0;
  }
  .yzm>span{
    height: 14px;
    margin-top:18px;
    border: 1px solid orangered;
    padding:6px 8px;
    font-size: 12px;
    color: orangered;
  }
  .login_2{
    margin-top: 20px;
    color: #aaa;
  }
  .login_2>span{
  padding-right: 5px;
  }
  .login_3{
    margin-top:300px;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .login_3>img{
    width: 60px;
  }
  .login_4{
    margin-top: 20px;
  }
  .login_4>span{
    font-size: 14px;
  }
  .login_4>span:first-child,.login_4>span:nth-child(3){
    color: #aaa;
  }
</style>