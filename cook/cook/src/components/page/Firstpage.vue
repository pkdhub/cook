<template>
    <div class="fistpage">
        <div class="firstpage_head"     >
            <img src="../../assets/shopping_cart.png" width="7%"  alt="" class="firstpage_head_img1">
            <input class="firstpage_head_input" type="text" @click="s" placeholder="大家都在搜：面食">
            <img src="../../assets/wt.png" width="7%" alt="" class="firstpage_head_img2" >
        </div>
        <div class="swipe">
            <mt-swipe :auto="4000">
                <mt-swipe-item>
                    <img src="../../assets/lb1.png" width="100%" height="150px" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../../assets/lb2.png" width="100%" height="150px"  alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../../assets/lb3.png" width="100%" height="150px"  alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../../assets/lb4.png"  width="100%" height="150px"  alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div>
            <ul class="food_list">
                <li>
                    <img src="../../assets/food_list.png" width="45px" alt="">
                    <span>菜谱分类</span>
                </li>
                <li>
                    <img src="../../assets/dinner.png" width="45px" alt="">
                    <span>一日三餐</span>
                </li>
                <li>
                    <img src="../../assets/good.png" width="45px" alt="">
                    <span>本周佳作</span>
                </li>
                <li>
                    <img src="../../assets/shop.png" width="45px" alt="">
                    <span>物品商城</span>
                </li>
                <li>
                    <img src="../../assets/ys.png" width="45px" alt="">
                    <span>养生主场</span>
                </li>
            </ul>
            <ul class="food_list">
                <li>
                    <img src="../../assets/jcc.png" width="45px" alt="">
                    <span>家常菜肴</span>
                </li>
                <li>
                    <img src="../../assets/hp.png" width="45px" alt="">
                    <span>甜式烘培</span>
                </li>
                <li>
                    <img src="../../assets/xfc.png" width="45px" alt="">
                    <span>下饭香菜</span>
                </li>
                <li>
                    <img src="../../assets/zjf.png" width="45px" alt="">
                    <span>专区积分</span>
                </li>
                <li>
                    <img src="../../assets/jb.png" width="45px" alt="">
                    <span>活动专区</span>
                </li>
            </ul>
        </div>
        <div class="gotovip">
            <span>vip</span>
            <span style="color:#774a4a">开通会员</span><span>1000个名厨秘法</span> <span>立即加入 &gt;</span>
        </div>
        <!-- <div class="food_video">
            <ul class="tab-head" >
                <li class="tab-head-item"  >关注</li>
                <li class="tab-head-item">推荐</li>
                <li class="tab-head-item">菜谱</li>
                <li class="tab-head-item">美食圈</li>
                <li class="tab-head-item">烘培</li>
                <li class="tab-head-item">宅家必备</li>
                <li class="tab-head-item">小技巧</li>
            </ul>
        </div> -->
        <div class="food_video scrollContainer" ref="scroll" id="searchBar" >
        <mt-navbar v-model="selected" class="isFixed" >
            <mt-tab-item class="tab-head-item" id="1">关注</mt-tab-item>
            <mt-tab-item class="tab-head-item" id="2">菜谱</mt-tab-item>
            <mt-tab-item class="tab-head-item" id="3">美食圈</mt-tab-item>
            <mt-tab-item class="tab-head-item" id="4">烘培</mt-tab-item>
            <mt-tab-item class="tab-head-item" id="5">小技巧</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                
                    <ul class="fistnav">
                        <li v-for="(item,i) of images2" :key="i" ><img width="170" :src="require(`../../assets/${item}`)" alt=""></li>
                    </ul>
                
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <ul class="fistnav">
                    <li v-for="(item,i) of images" :key="i" ><img width="170" :src="require(`../../assets/${item}`)" alt=""></li>
                </ul>
                
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <ul class="fistnav">
                    <li v-for="(item,i) of images1" :key="i" ><img width="170" :src="require(`../../assets/${item}`)" alt=""></li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <ul class="fistnav">
                    <li v-for="(item,i) of images3" :key="i" ><img width="170" :src="require(`../../assets/${item}`)" alt=""></li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="5">
                <ul class="fistnav">
                    <li v-for="(item,i) of images4" :key="i" ><img width="170" :src="require(`../../assets/${item}`)" alt=""></li>
                </ul>
            </mt-tab-container-item>
            
        </mt-tab-container>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:["1","2","3","4","5","6","7","8","9","10"],
            images:['32.png','35.png','30.png','33.png','34.png','31.png','36.png','37.png','38.png','39.png'],
            images1:['33.png','34.png','38.png','36.png','37.png','35.png','39.png','30.png','31.png','32.png'],
            images2:['39.png','38.png','37.png','36.png','35.png','34.png','33.png','32.png','31.png','30.png'],
            images3:['34.png','33.png','32.png','31.png','39.png','38.png','37.png','36.png','35.png','34.png'],
            images4:['37.png','38.png','36.png','35.png','34.png','33.png','32.png','31.png','30.png','39.png'],
            selected:"2",
            
        }
    },
    mounted () {
        
            },
    computed:{
       
    },
    methods:{
      s(){
        //   console.log(1);
        this.$router.push({path:"/search"})
      },
    
    },
    
}



</script>
<style scoped>
.firstpage{
    margin-bottom: 100px;
}
.firstpage_head{
    position: fixed;
    z-index: 999;
    width: 100%;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #fff;
}
.firstpage_head_img1{
    padding-left:15px;
}
.firstpage_head_img2{
    padding-right: 15px;
}
.firstpage_head_input{
    width:70%;
    height:30px;
    font-size: 14px;
    border-radius: 0.99rem;
    border:0;
    background-color: #f3f0f0;
    background-image: url("../../assets/ss.png");
    background-repeat: no-repeat;
    padding-left: 27px;
}
.firstpage_head_input:focus{
    outline: none;
}
.swipe{
    width: 92%;
    height:150px; 
    padding-top:60px ;
    padding-left:15px ;
}
.food_list{
    width: 92%;
    padding-left:15px;
    list-style:  none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; 
    text-align: center;
    
}
.food_list>li>span{
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    padding-top:5px; 
}
.gotovip{
    background-color:#f5f5af;
    width:92%;
    height:50px;
    margin-left:15px ;
    text-align: center;
    line-height: 50px;
}
.gotovip>span:first-child{
background-image: url("../../assets/vip_span.png");
background-repeat: no-repeat;
color: #f5f5af;
padding-right:5px ;
}
.gotovip>span:nth-child(3),.gotovip>span:nth-child(4){
    font-size: 13px;
    color:#80694e;
    padding-left:10px; 
}
/* .food_video{
    background-color:#ece7e0;
    padding-left:15px;
}
 .tab-head{
     list-style-type: none;
     display:flex;
     flex-wrap:nowrap;
     justify-content:space-between;
     padding:0;
     overflow:auto;
     }
 .tab-head-item{
     flex:1 0 auto;
     color:#000;
     padding-top: 13px;
     margin-right:17px;
     font-size: 20px;
    }
.tab-head-item:hover{
    border-bottom:3px solid #d81e06;
} */

.food_video{
    background-color: #f2eaea;
}
.mint-navbar .mint-tab-item{
    background-color: #f2eaea;
    margin-top:5px;
}
.mint-navbar .mint-tab-item.is-selected{
    border-bottom: 3px solid red;
    font-size: 20px;
    color:#000;
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





</style>
