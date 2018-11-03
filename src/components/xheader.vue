<template>
	<div>
	<div _ngcontent-c1="show" class="title-bar">
	<a @click="show" _ngcontent-c1="" class="nav-toggle" title="菜单"></a>
	<h1 _ngcontent-c1="" class="nav-logo">
	<a _ngcontent-c1="" href="/#/home">锤子科技商城</a>
	</h1><a _ngcontent-c1="" class="nav-search" title="搜索"></a>
	</div>
	<nav>
		<ul class="nav-shop">
			<li v-for="cla in classname" :class="cla.name" >
				<a><span v-text="cla.title"></span></a>
			</li>
		</ul>
	</nav>
	</div>
</template>

<script>
	import $ from 'jquery';
	export default {
		data(){
			return{
				is_show: false,
				classname:[{
					name:"nav-shop-item shopping",
					title: "锤子科技商城"
				},{
					name:"nav-shop-item jianguopro2s",
					title: "坚果 Pro 2S"
				},{
					name:"nav-shop-item r1",
					title: "坚果 R1"
				},{
					name:"nav-shop-item tnt",
					title: "坚果 TNT 工作站"
				},{
					name:"nav-shop-item u3",
					title: "坚果 3"
				},{
					name:"nav-shop-item jianguopro2",
					title: "坚果 Pro2"
				},{
					name:"nav-shop-item nav-os",
					title: "Smartisan OS"
				},{
					name:"nav-shop-item apps",
					title: "应用"
				},{
					name:"nav-shop-item bbs",
					title: "论坛"
				},{
					name:"nav-shop-item support",
					title: "服务支持"
				}]
			}
		},
		methods:{
			show: function(){
				this.is_show = !this.is_show;
				if(this.is_show){
					$("nav").css({"top":"50px"});
				}else{
					$("nav").css({"top":"-100%"});
				}
			}
		}
	}
</script>

<style>
	nav{ background: #000; width: 100%; height: 100%; position:fixed; top: -100%; z-index: 999; transition:all 0.5s; }
	nav .nav-shop .nav-shop-item{ background: url("../assets/navicons.png") no-repeat; background-size: auto 54.85rem; background-origin: content-box; box-sizing: border-box; float: left; font-size: 12px; height: 3.6rem; width: 25%; padding: 0 1px 1px 0; text-align: center; position: relative; }
	nav .nav-shop .nav-shop-item a{ box-sizing: border-box; color: #ddd; display: block; height: 100%; line-height: 1; padding: 2.55rem 0 0; position:relative; }
	nav .nav-shop .nav-shop-item a span{ font-size: 12px; text-align: center; white-space: nowrap; position: absolute; transform: translateX(-50%) scale(.83333); left: 50%; }
	nav .nav-shop .shopping{ background-position: 50% -4.15rem; }
	nav .nav-shop .jianguopro2s{ background-position: 50% -51.65rem; }
	nav .nav-shop .r1{ background-position: 50% -40.15rem; }
	nav .nav-shop .tnt{ background-position: 50% -43.85rem; }
	nav .nav-shop .u3{ background-position: 50% -36.25rem; }
	nav .nav-shop .jianguopro2{ background-position: 50% -47.85rem; }
	nav .nav-shop .nav-os{ background-position: 50% -16.3rem; }
	nav .nav-shop .apps{ background-position: 50% -20.25rem; }
	nav .nav-shop .bbs{ background-position: 50% -24.4rem; }
	nav .nav-shop .support{ background-position: 50% -32.25rem; }
	.title-bar[_ngcontent-c1] { background: #1d1d1d; background-image: linear-gradient(#1d1d1d,#181818); height: 50px; position: fixed; top: 0; left: 0; right: 0; z-index: 399; }
	.title-bar[_ngcontent-c1] .nav-logo[_ngcontent-c1] a[_ngcontent-c1] { height: 100%; display: block; text-indent: -9999px; }
	.title-bar[_ngcontent-c1] .nav-logo[_ngcontent-c1] { background: url('../assets/nav-logo.f28bcf8a8822503b73bec6c09a784851.png') no-repeat 0 0; background-size: cover; height: 100%; margin: 0 auto; width: 50px; }
	.title-bar[_ngcontent-c1] .nav-search[_ngcontent-c1] { background: url('../assets/searchico.png') no-repeat 0 0; background-size: cover; background-origin: content-box; float: left; height: 100%; padding: 0 5px; width: 50px; transition: none; background-size: 43% 43%; background-position: 50% 50%; float: none; position: absolute; right: 0; top: 0; }
	.title-bar[_ngcontent-c1]  .nav-toggle[_ngcontent-c1] { background: url('../assets/menuico.png') no-repeat 0 0; background-size: cover; background-origin: content-box; float: left; height: 100%; padding: 0 5px; width: 50px; transition: none; }

</style>