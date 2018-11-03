<template>
    <div id="app">
        <myinfo />
        <xfooter />
    </div>
</template>

<script>
    import xfooter from '../components/xfooter.vue';
    import myinfo from '../components/myinfo.vue';
    export default {
        data() {
            return {}
        },
        components: {
            xfooter,
            myinfo
        }
    }
</script>