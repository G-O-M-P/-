<template>
    <div id="app">
        <xheader />
        <banner />
        <goodslist />
        <xfooter />
    </div>
</template>

<script>
    import xheader from '../components/xheader.vue';
    import banner from '../components/banner.vue';
    import goodslist from '../components/goodslist.vue';
    import xfooter from '../components/xfooter.vue';
    export default {
        data() {
            return {}
        },
        components: {
            xheader,
            banner,
            goodslist,
            xfooter
        }
    }
</script>