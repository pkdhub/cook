<template>
  <div class="search">
    <div class="search_head">
      <img @click="fh" width="21" src="../../assets/fh.png" alt="">
      <input type="text" placeholder="搜索：面食">
      <span>搜索</span>
    </div>
    <div class="search_head2">
        <p>热搜:</p>
        <ul>
          <li v-for="(item,i) of menulist" :key="i">{{item}}</li>
        </ul>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      value:"",
      menulist:["东北菜","羊肉","孕妇","排骨","烤箱","面包","土豆","鸡腿","甜品","猪肉","红烧排骨","湘菜"]
    }
  },
  methods:{
    fh(){
      this.$router.push("/")
    }
  }
}
</script>
<style>
 .search{
   background-color:#f4f0f0;
   width: 100%;
   height: 100%;
   position: fixed;
 }
 .search_head{
   width: 100%;
   background-color: #fff;
   display: flex;
   justify-content: space-around;
   align-items: center;
   padding-top:15px;
   padding-bottom: 15px;
 }
 input{
   width:70%;
    height:30px;
    font-size: 14px;
    border-radius: 0.99rem;
    border:0;
    background-color: #f4f0f0;
    background-image: url("../../assets/ss.png");
    background-repeat: no-repeat;
    padding-left: 27px;
 }
input:focus{
  outline: none;
}
.search_head2{
  width:100%;
  background-color: #fff;
}
.search_head2>p{
  position: fixed;
  color: #999;
  padding-left:10px ;
}
.search_head2>ul{
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-left:0 ;
  padding-top:50px;
  /* overflow: auto; */
 
}
.search_head2>ul>li{
  /* border:1px solid red; */
  padding:7px;
  margin:10px;
  border-radius: 0.25rem;
  text-align:center;
  background-color: #f4f0f0;
}
 
</style>