<template>
    <div id="app">
        <xheader />
        <category />
        <xfooter />
    </div>
</template>

<script>
    import xheader from '../components/xheader.vue';
    import xfooter from '../components/xfooter.vue';
    import category from '../components/category.vue';
    export default {
        data() {
            return {}
        },
        components: {
            xheader,
            xfooter,
            category
        }
    }
</script>