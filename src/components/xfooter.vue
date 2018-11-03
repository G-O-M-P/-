<template>
	<ul _ngcontent-c2="" class="">
	<li  v-for="(a,index) in arr" :key="index" _ngcontent-c2="" :class="{'active':page===index}">
		<a @click="changePage(index)" _ngcontent-c2="" href="javascript:;">
		<div _ngcontent-c2="" :class="{'tag':countshow&&index===2}"><span _ngcontent-c2="" v-text="index===2?goodscount:''"></span></div>
		<img _ngcontent-c2="" :src=a.url>
		<h4 _ngcontent-c2="" v-text="a.title"></h4>
		</a>
	</li>
	</ul>
</template>

<script>
	export default {
		data() {
			return {
				page:0,
				goodscount: '',
				countshow: false,
				arr: [{
					title: "首页",
					url: require('../assets/homeico.png')
				}, {
					title: "分类",
					url: require('../assets/sortico.png')
				}, {
					title: "购物车",
					url: require('../assets/shopcartico.png')
				}, {
					title: "个人中心",
					url: require('../assets/myico.png')
				}]
			}
		},
		methods:{
			changePage(index){
				this.page = index;
				switch(index){
					case 0:
					location.href="#/home";
					break;
					case 1:
					location.href="#/sort";
					break;
					case 2:
					location.href="#/shopcart";
					break;
					case 3:
					location.href="#/my";
					break;
				}
			},
			checkgoods: function(){
				var self = this;
                var ids = sessionStorage.getItem("ids");
                if(ids!==null){
                	self.countshow = true;
                    ids = ids.split(",");
                    self.goodscount = ids.length;
                    console.log(self.goodscount)
                }else{
                    self.countshow = false;
                    self.goodscount = '';
                }
			}
		},
		mounted(){
			this.checkgoods();
		}
	}
</script>

<style>
	ul[_ngcontent-c2]{
		height:54px;
		position:fixed;
		bottom:0;
		display:flex;z-index:249;
		background:#fff;
		box-shadow:0 -11px 32px rgba(0,0,0,.08);
	}
	ul[_ngcontent-c2], ul[_ngcontent-c2]:before{left:0;
		right:0;
	}
	ul[_ngcontent-c2]:before{
		content:"";
		position:absolute;
		top:-1px;
		height:1px;
		background:rgba(0,0,0,.08);
		-webkit-transform-origin:0 100%;
		transform-origin:0 100%;
		-webkit-transform:scaleY(.66667);
		transform:scaleY(.66667);
	}
	li[_ngcontent-c2]{
		background:#fff;
		flex:1 1 100%;
	}
	li[_ngcontent-c2]  a[_ngcontent-c2]{
		display:inline-block;
		width:100%;
		position:relative;
	}
	li[_ngcontent-c2]  a[_ngcontent-c2], li[_ngcontent-c2]  a[_ngcontent-c2]  .tag[_ngcontent-c2]{
		text-align:center;
		}
	li[_ngcontent-c2]   a[_ngcontent-c2]   .tag[_ngcontent-c2]{position:absolute;box-sizing:border-box;left:calc(50% + 4px);top:3.66667px;height:48px;min-width:48px;line-height:1.6;padding:0 16px;border-radius:24px;background:#d44d44;font-size:30px;font-weight:700;color:#fff;text-shadow:0 -2px 0 rgba(0,0,0,.06);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.33333);transform:scale(.33333);box-shadow:0 3px 8px rgba(212,78,69,.4);}
	li[_ngcontent-c2]   a[_ngcontent-c2]   .tag.suplus[_ngcontent-c2]{padding-right:12px;}li[_ngcontent-c2]   a[_ngcontent-c2]   .tag.suplus[_ngcontent-c2]   span[_ngcontent-c2]:after{content:"\207A";}
	li[_ngcontent-c2]   a[_ngcontent-c2]   .tag[_ngcontent-c2]:before{content:"";box-sizing:border-box;border:1px solid rgba(3,3,3,.04);position:absolute;top:0;right:0;bottom:0;left:0;border-radius:24px;background:linear-gradient(0deg,rgba(0,0,0,.04),hsla(0,0%,100%,.04));}
	li[_ngcontent-c2]   a[_ngcontent-c2]   .tag[_ngcontent-c2]   span[_ngcontent-c2]{position:relative;}
	li[_ngcontent-c2]   a[_ngcontent-c2]   img[_ngcontent-c2]{display:block;margin:7px auto 2px;width:27px;}
	li[_ngcontent-c2]   a[_ngcontent-c2]   h4[_ngcontent-c2]{color:#9a9a9a;font-size:27px;height:40px;position:relative;width:300%;left:-100%;line-height:40px;-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transform:scale(.33333);transform:scale(.33333);}
	li.active[_ngcontent-c2]{background:linear-gradient(0deg,hsla(0,0%,100%,.05),rgba(0,0,0,.05));position:relative;box-shadow:inset 5px 0 3px -3px rgba(0,0,0,.01),inset -5px 0 3px -3px rgba(0,0,0,.01);}
	li.active[_ngcontent-c2]:after, li.active[_ngcontent-c2]:before{content:"";width:1px;position:absolute;top:-25%;height:150%;-webkit-transform:scale(.66667);transform:scale(.66667);background:linear-gradient(0deg,hsla(0,0%,100%,.03),rgba(0,0,0,.03));}
	li.active[_ngcontent-c2]:before{left:0;-webkit-transform-origin:0,50%;transform-origin:0,50%;}
	li.active[_ngcontent-c2]:after{right:0;-webkit-transform-origin:100%,50%;transform-origin:100%,50%;}
	li.active[_ngcontent-c2]   a[_ngcontent-c2]   h4[_ngcontent-c2]{color:#666;}
</style>