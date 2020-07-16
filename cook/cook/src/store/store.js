import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {    //读取 this.$store.state.xxx
  	userInfo:"",      //当前登陆用户信息
  	userUname:JSON.parse(localStorage.getItem("userUname")) || ""
  },
  mutations: {   //this.$store.commit('setxxx',data)
  	setUserInfo(state,info){
  		state.userInfo=info
  	},
  	setUserUname(state,uname){
      localStorage.setItem('userUname', JSON.stringify(uname))
  		state.userUname=uname
  	},
//	delUname(state){
//		state.userUname=""
//	}
  },
  actions: {
  },
  modules: {
  }
})
