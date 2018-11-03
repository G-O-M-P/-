<template>
    <div id="app">
        <cart />
        <xfooter />
    </div>
</template>

<script>
    import xfooter from '../components/xfooter.vue';
    import cart from '../components/cart.vue';
    export default {
        data() {
            return {}
        },
        components: {
            xfooter,
            cart
        }
    }
</script>