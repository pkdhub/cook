<template>
  <div>
    <div class="detail_head">
      <img @click="back" width="20" src="../../assets/fh.png" alt="">
      <img width="30" src="../../assets/qx.png" alt="">
      <span>好产品</span>
      <img width="30" src="../../assets/fx.png" alt="">
    </div>
    <div class="swipe">
      <mt-swipe :auto="4000" :show-indicators="false">
                <mt-swipe-item>
                    <img src="../../assets/detail1.png" width="100%" height="300px" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../../assets/detail2.png" width="100%" height="300px"  alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../../assets/detail3.png" width="100%" height="300px"  alt="">
                </mt-swipe-item>
            </mt-swipe>
    </div>
    <div class="detail_">
      <p style="color:red;margin-top:12px">￥36.90</p>
      <p>优质产品，无添加防腐剂，无香精色素
        <img width="30" src="../../assets/fx.png" alt="">
      </p>
      <p>
        <img width="30" src="../../assets/yz.png" alt="">
        <span>有赞担保</span>
        <span>全程护航，请放心购买</span>
      </p>
    </div>
    <div class="detail_2">
      <mt-cell title="运费 免运费"></mt-cell>
      
    </div>
    <mt-cell title="服务 收货后结算.快递发货" is-link></mt-cell>
    <mt-cell title="选择 规格" is-link></mt-cell>
    <div class="detail_2">
      <mt-cell title="商品评价" value="暂无评价"></mt-cell>
    </div>
    <div class="detail_tabbar">
      <div>
        <img width="30" src="../../assets/xx_normal.png" alt="">
        <p>客服</p>
      </div>
      <div>
        <img width="30" src="../../assets/xx_normal.png" alt="">
        <p>店铺</p>
      </div>
      <div>
        <img width="30" src="../../assets/xx_normal.png" alt="">
        <p>收藏</p>
      </div>
      <div class="detail_d" style="padding:4px">
      <mt-button type="primary">加入购物车</mt-button>
      <mt-button type="danger">立即购买</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    back(){
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
p{
  margin:1px;
}
.detail_head{
  position: fixed;
  z-index: 999;
  display: flex;
  width: 97%;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding-top:15px ;
  padding-bottom: 14px;
  
}
.detail_head>span{
  padding-right: 170px;
  
}
.detail_head>img:nth-child(1){
  padding-left: 15px;
}
.swipe{
    width: 100%;
    height:300px; 
    padding-top:60px ;
}
.detail_2{
  padding-top:10px;
  background-color: #f4f0f0;
  padding-bottom:10px ;
}
.detail_tabbar{
  margin-top: 72px;
  position: fixed;
  width: 100%;
  display: flex;
  background-color: #fff;
  z-index: 999;
}
.detail_tabbar>div{
  padding-left: 10px;
}


</style>