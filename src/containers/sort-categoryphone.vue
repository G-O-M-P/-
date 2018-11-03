<template>
    <div id="app">
        <xheader />
        <categoryphone />
        <xfooter />
    </div>
</template>

<script>
    import xheader from '../components/xheader.vue';
    import xfooter from '../components/xfooter.vue';
    import categoryphone from '../components/categoryphone.vue';
    export default {
        data() {
            return {}
        },
        components: {
            xheader,
            xfooter,
            categoryphone
        }
    }
</script>