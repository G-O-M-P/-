<template>
	<div id="app">
        <router-view />
	</div>
</template>

<script>
    import goodslist from './components/goodslist.vue';
	import xheader from './components/xheader.vue';
	import xfooter from './components/xfooter.vue';
    import banner from './components/banner.vue';
	export default {
		data() {
			return {
				name: "父组件"
			}
		},
		components: {
			xheader,
			xfooter,
            banner,
            goodslist
		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
</style>