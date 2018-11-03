<template>
    <div id="app">
        <xheader />
        <categoryshoes />
        <xfooter />
    </div>
</template>

<script>
    import xheader from '../components/xheader.vue';
    import xfooter from '../components/xfooter.vue';
    import categoryshoes from '../components/categoryshoes.vue';
    export default {
        data() {
            return {}
        },
        components: {
            xheader,
            xfooter,
            categoryshoes
        }
    }
</script>