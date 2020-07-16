<template>
    <div>
        <!-- 底部导航及对应面板 -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="firstpage">
                <firstpage></firstpage>
            </mt-tab-container-item>
            
            <mt-tab-container-item id="shop">
                <threepage></threepage>
            </mt-tab-container-item>
            <mt-tab-container-item id="vip">
                <secondpage></secondpage>
            </mt-tab-container-item>
            <mt-tab-container-item id="message">
                <fourpage></fourpage>
            </mt-tab-container-item>
            <mt-tab-container-item id="me">
                <fivepage></fivepage>
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="firstpage" method="{methods:gofirstpage}" >
                <img src="../../assets/sy_select.png"  alt="" slot="icon" v-if="this.selected=='firstpage'">
                <img  src="../../assets/sy_normal.png" alt="" slot="icon" v-else>
                首页
            </mt-tab-item>
            
            <mt-tab-item id="shop" method="{methods:goshop">
                <img  src="../../assets/sc_select.png" alt="" slot="icon" v-if="this.selected=='shop'">
                <img src="../../assets/sc.png" alt="" slot="icon" v-else>
                商城  
            </mt-tab-item>
            <mt-tab-item id="vip" method="{methods:govip}">
                <img  src="../../assets/vip_select.png" alt="" slot="icon" v-if="this.selected=='vip'">
                <img src="../../assets/vip_normal.png" alt="" slot="icon" v-else>
                vip会员
            </mt-tab-item>
            <mt-tab-item id="message" method="{methods:gomessage}">
                <img src="../../assets/xx_select.png" slot="icon" alt="" v-if="this.selected=='message'">
                <img src="../../assets/xx_normal.png"  alt="" slot="icon" v-else>
                消息
            </mt-tab-item>
            <mt-tab-item id="me" method="{methods:gome}">
                <img src="../../assets/my_select.png"  alt="" slot="icon" v-if="this.selected=='me'">
                <img src="../../assets/my_normal.png" alt="" slot="icon" v-else>
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
import Firstpage  from  "./Firstpage.vue"
import Secondpage from  "./Secondpage.vue"
import Threepage  from  './Threepage.vue'
import Fourpage   from  './Fourpage.vue'
import Fivepage   from  './Fivepage.vue'
export default {
    data(){
        return{
            selected:"me",
        }
    },
    methods:{
        gofirstpage(){
            if(this.$route.name !=='firstpage'){
                this.$router.push({
                    name:'firstpage'
                })
            }
        },
        govip(){
            if(this.$route.name!=='vip'){
                this.$router.push({
                    name:'vip'
                })
            }
        },
        goshop(){
            if(this.$route.name!=='shop'){
                this.$router.push({
                    name:'shop'
                })
            }
        },
        gomessage(){
            if(this.$route.name!=='message'){
             this.$router.push({
                 name:'message'
             })   
            }
        },
        gome(){
            if(this.$route.name!=='me'){
                this.$router.push({
                    name:'me'
                })
            }
        }
    },
    components:{
        "firstpage":Firstpage,
        "secondpage":Secondpage,
        "threepage":Threepage,
        "fourpage":Fourpage,
        "fivepage":Fivepage
    }
}
</script>
<style scoped>
.mint-tabbar > .mint-tab-item.is-selected {
    background-color: #faf5f5;
    color: #d81e06;
}

</style>
