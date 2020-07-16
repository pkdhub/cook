<template>
  <div class="login">
    <div class="fh">
    <img @click="goback" src="../../assets/fh.png" alt="">
    </div>
    <span>请登录账号</span>
    <div class="login_1">
      <input type="text" v-model="uname" placeholder="用户名">
      <input type="password" v-model="upwd" placeholder="密码">
      
    </div>
    <mt-button size="large" type="danger" @click="logining">登录</mt-button>
    <div class="login_2">
      <span @click="register">注册</span>
      <span>|</span>
      <span>忘记密码？</span>
    </div>
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
        upwd:"",  
    }
  },
  methods:{
    logining(){
      var reg = /^[a-z0-9]{3,20}$/i;
      var uname = this.uname;
      var upwd = this.upwd;
      if(uname===''||upwd===''){
        this.$toast("账号或密码不能为空")
        return
      }
      if(!reg.test(uname)){
          this.$messagebox("消息","用户名格式不正确");
           return;//停止程序运行
           }
         //4:验证用户密码如果格式不正确，提示错误信息
           if(!reg.test(upwd)){
             this.$messagebox("消息","密码格式不正确");
             return;//停止程序运行  
           }
           //5:创建url变量,保存请求服务器地址
           //6:创建obj变量,保存请求时参数
           var obj = {uname:uname,upwd:upwd};
//         console.log(obj)
           //7:发送ajax请求
           this.axios.post("/user/login",obj).then(res=>{
              //8:接收服务器返回结果
              //9:如果-1  提示用户名和密码有误
              //10:如果1  跳转商品列表组件  /Product 
//            console.log(res)
              var userInfo=res.data.userInfo.uid
              var useruname=res.data.userInfo.uname
//            console.log(userInfo)
//            console.log(useruname)
              if(res.data.code==200){
              	  this.$store.commit("setUserInfo",userInfo)
                  this.$store.commit("setUserUname",useruname)
              	this.$toast("登录成功");
                  this.$router.push("/cook");
                 
              }else{
                  this.$messagebox("消息","用户名或密码有误");
              }
           })
    },
    goback(){
      this.$router.push("/cook");
    },
    register(){
      this.$router.push("/login/register");
    }
  }
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
    background-image: url("../../assets/logining.png");
  }
  .login_1>input:last-child{
    background-image: url("../../assets/login_pass.png");
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