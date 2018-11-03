<template>
    <main>
        <div v-for="goods in goodsinfo" class="product-list" v-if="(goods.product_info.category_id==='39')||(goods.product_info.category_id==='48')||(goods.product_info.category_id==='91')||(goods.product_info.category_id==='48')">
            <a class="arealink" :href="'/#/item?id='+goods.id">
            <img :src="goods.shop_info.ali_image" alt="" />
            <div class="right-side">
                <h1 v-text="goods.shop_info.sku_mobile_title"></h1>
                <p class="goods-title" v-text="goods.shop_info.sku_mobile_sub_title"></p>
                <p class="goods-price"><i>￥</i><span v-text="goods.price"></span></p>
            </div>
            </a>
        </div>
    </main>

</template>

<script>
    import $ from 'jquery';
    export default{
        data(){
            return{
                goodsinfo:[]
            }
        },
        methods:{
            getinfo: function(){
                var self = this;
                $.ajax({
                    type: "get",
                    url: "http://localhost:5656/getinfo",
                    async: true,
                    success: function(data) {
                        console.log(JSON.parse(data),self,self.goodsinfo)
                        var goodsdb = JSON.parse(data).data.list;
                        console.log(goodsdb[0].product_info)
                        self.goodsinfo = goodsdb;
                    }
                });
            }
        },
        mounted(){
            this.getinfo();
        }
    }
</script>