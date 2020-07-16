<template>
  <div class="threepage">
    <div class="threepage_head">
      <div>
        <img  src="../../assets/fl.png" alt="">
        <p>分类</p>
      </div>
      <span>品质优选</span>
      <div>
        <img src="../../assets/shopping_cart.png" alt="">
        <p>购物车</p>
      </div>
    </div>
    <div class="threepage_body">
    <input class="threepage_input" type="text"  placeholder="搜索商品">
    <div class="swipe">
            <mt-swipe :auto="4000">
                <mt-swipe-item>
                    <img src="../../assets/lb12.png" width="100%" height="150px" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../../assets/lb13.png" width="100%" height="150px"  alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../../assets/lb14.png" width="100%" height="150px"  alt="">
                </mt-swipe-item> 
            </mt-swipe>
        </div>
        <div class="threepage_body_1">
          <span>
            <img width="20" src="../../assets/pz.png" alt="">
            100%正品
          </span>
          <span>
            <img width="20" src="../../assets/sj.png" alt="">48小时发货</span>
          <span>
            <img width="20" src="../../assets/xx.png" alt="">五星无忧售后</span>
        </div>
        <div class="threepage_body_cj">
          <img src="../../assets/cjfl.png" alt="">
        </div>
        <div class="threepage_body_2">
          <img src="../../assets/re1.png" alt="">
          <img src="../../assets/re2.png" alt="">
          <img src="../../assets/re3.png" alt="">
        </div>
        <div class="threepage_body_3">
          <mt-navbar v-model="selected">
            <mt-tab-item id="1">全部</mt-tab-item>
            <mt-tab-item id="2">热销美食</mt-tab-item>
            <mt-tab-item id="3">餐厨好物</mt-tab-item>
            <mt-tab-item id="4">居家生活</mt-tab-item>
            <mt-tab-item id="5">美妆洗护</mt-tab-item>
            <mt-tab-item id="6">母婴产品</mt-tab-item>
          </mt-navbar>

          <!-- tab-container -->
          <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
              <ul class="fistnav">
                    <li v-for="(item,i) of navlist" :key="i" @click="detail"><img width="170" height="200" :src="require(`../../assets/${item}`)" alt="">
                    <p>行动要快！</p>
                    <p>￥19.7</p>
                    </li>
              </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
              <ul class="fistnav">
                    <li v-for="(item,i) of navlist1" :key="i" @click="detail" ><img width="170" height="200" :src="require(`../../assets/${item}`)" alt="">
                    <p>正宗好吃</p>
                    <p>￥15.70</p>
                    </li>
              </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
              <ul class="fistnav">
                    <li v-for="(item,i) of navlist2" :key="i" @click="detail" ><img width="170" height="200" :src="require(`../../assets/${item}`)" alt="">
                    <p>好吃不贵，吃了还想吃</p>
                    <p>29.79</p>
                    </li>
              </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
              <ul class="fistnav">
                    <li v-for="(item,i) of navlist" :key="i" @click="detail" ><img width="170" height="200" :src="require(`../../assets/${item}`)" alt="">
                    <p>新鲜营养，家乡的味道</p>
                    <p>￥17.70</p>
                    </li>
              </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="5">
              <ul class="fistnav">
                    <li v-for="(item,i) of navlist1" :key="i" @click="detail" ><img width="170" height="200" :src="require(`../../assets/${item}`)" alt="">
                    <p>味道也会让你流连忘返</p>
                    <p>￥27.80</p>
                    </li>
              </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="6">
              <ul class="fistnav">
                    <li v-for="(item,i) of navlist2" :key="i" @click="detail" ><img width="170" height="200" :src="require(`../../assets/${item}`)" alt="">
                    <p>营养美味，就是这个味儿</p>
                    <p>￥37.90</p>
                    </li>
              </ul>
            </mt-tab-container-item>
          </mt-tab-container>
          </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      value:"",
      selected:"1",
      navlist:['32.png','35.png','30.png','33.png','34.png','31.png','36.png','37.png','38.png','39.png'],
      navlist1:['36.png','37.png','38.png','33.png','34.png','31.png','32.png','35.png','30.png','39.png'],
      navlist2:['39.png','34.png','30.png','33.png','35.png','31.png','36.png','37.png','38.png','32.png'],
    }
  },
  methods:{
    detail(){
      this.$router.push("/shopdetail")
    }
  }
}
</script>
<style scoped>
  .threepage_head{
    display: flex;
    position: fixed;
    z-index: 999;
    justify-content: space-between;
    padding-top:5px;
    padding-bottom: 7px;
    align-items: center;
    text-align: center;
    background-color: #fff;
    width: 100%;
  }
  .threepage_head>div>img{
    width: 25px;
    padding: 15px;
    padding-bottom: 0;
  }
  .threepage_head>div{
    font-size: 12px;
  }
  .threepage_head>span{
    font-size: 20px;
  }
  p{
  margin: 0;
  }
  .threepage_body{
    background-color: #f4f0f0;
    height: 100%;
  }
  .threepage_input{
    width: 84%;
    margin-left: 15px;
    margin-top:80px;
    background-color: #fff;
  }
  .swipe{
    width: 92%;
    height:150px; 
    margin-top:12px ;
    padding-left:15px ;
    padding-right: 15px;
    background-color: #fff;
    padding-top: 1px;
}
img{
  border-radius: 10px;
}
.threepage_body_1{
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  padding-top:7px;
}
.threepage_body_1>span{
  height: 30px;
  font-size: 14px;
  color: #e9ab0f;
  align-items: center;
}
.threepage_body_cj{
  background-color: #fff;
}
.threepage_body_cj>img{
  width: 92%;
  height: 100px;
  padding-left: 15px;
}
.threepage_body_2{
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  padding-top: 7px;
}
.threepage_body_2>img{
  width:110px;
}
.threepage_body_2>img:nth-child(1){
  padding-left: 10px;
}
.threepage_body_2>img:nth-child(3){
  padding-right: 10px;
}
.mint-navbar .mint-tab-item.is-selected{
    border-bottom: 3px solid red;
    font-size: 20px !important;
    color:red;
}
.fistnav{
    padding-left:0;
    padding-bottom: 50px;
    list-style: none;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: #f2eaea;
}
.fistnav>li{
  height: 300px;
  background-color: #fff;
  margin-bottom:10px ;
  border-radius: 10px;
}
.fistnav>li>p{
  padding-top: 15px;
  padding-left:5px ;
}
.fistnav>li>img{
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.fistnav>li>p:nth-child(3){
  color:red;
}
</style>