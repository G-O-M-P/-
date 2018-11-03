<template>
    <div id="app">
        <xheader />
        <categoryair />
        <xfooter />
    </div>
</template>

<script>
    import xheader from '../components/xheader.vue';
    import xfooter from '../components/xfooter.vue';
    import categoryair from '../components/categoryair.vue';
    export default {
        data() {
            return {}
        },
        components: {
            xheader,
            xfooter,
            categoryair
        }
    }
</script>