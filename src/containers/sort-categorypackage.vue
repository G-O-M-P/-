<template>
    <div id="app">
        <xheader />
        <categorypackage />
        <xfooter />
    </div>
</template>

<script>
    import xheader from '../components/xheader.vue';
    import xfooter from '../components/xfooter.vue';
    import categorypackage from '../components/categorypackage.vue';
    export default {
        data() {
            return {}
        },
        components: {
            xheader,
            xfooter,
            categorypackage
        }
    }
</script>