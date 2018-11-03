import Vue from 'vue'
//var Vue = require("vue")
import hammer from './hammer.vue'
import $ from 'jquery'
window.$ = $;
import "weui";
import VueRouter from 'vue-router';
import home from './containers/home.vue';
import sort from './containers/sort.vue';
import my from './containers/my.vue';
import shopcart from './containers/shopcart.vue';
import sortCategoryphone from './containers/sort-categoryphone.vue';
import sortCategoryair from './containers/sort-categoryair.vue';
import sortCategorypackage from './containers/sort-categorypackage.vue';
import sortCategoryshoes from './containers/sort-categoryshoes.vue';
import item from './containers/item.vue';
import login from './containers/login-page.vue';
import regit from './containers/regit-page.vue';
Vue.use(VueRouter);
Vue.config.productionTip = false
//引入状态管理
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	//状态
	state: {
		searchText: "",
		isShowGallery:false,
		galleryUrl:""
	},
	//
	mutations: {
		changeSearchText(state, data) {
			state.searchText = data;
		}
	},
	actions: {
		setSearchText(context, data) {
			context.commit('changeSearchText', data)
		},
	},
	getters:{
		getSearchText(state){
			return state.searchText
		}
	}
	//actions---(commit)--->mutations----->state
})
const routes = [{
	path: '/home',
	component: home
},{
	path: '/shopcart',
	component: shopcart
},{
	path: '/my',
	component: my
},{
	path: '/sort',
	component: sort
},{
	path:'/sort/categoryphone',
	component: sortCategoryphone
},{
	path:'/sort/categoryair',
	component: sortCategoryair
},{
	path:'/sort/categorypackage',
	component: sortCategorypackage
},{
	path:'/sort/categoryshoes',
	component: sortCategoryshoes
},{
	path:'/item',
	component: item
},{
	path:'/login',
	component: login
},{
	path:'/regit',
	component: regit
}]
const router = new VueRouter({
	routes
})
new Vue({
	store,
	router,
	render: h => h(hammer)
}).$mount('#app')