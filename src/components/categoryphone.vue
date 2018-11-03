<style>
    *{margin: 0;padding: 0;}
    ul,li{list-style: none;}
    main{margin-top: 50px;margin-bottom: 54px;width: 100%;height: 100%;}
    main .product-list{ width: 100%;box-sizing: border-box; width: 100%; padding: .6rem; background: #fff; position:relative; }
    main .product-list img{ width: 6.05rem; height: 6.05rem; box-sizing: border-box; flex-shrink: 0; margin-right: 1.55rem;display:inline-block; }
    main .product-list h1{ white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 700; font-size: .6rem; line-height: .75rem; color: #333; }
    main .product-list .goods-title{  margin-top: .2rem; color: #7f7f7f; font-size: .5rem; line-height: 1.2; white-space: nowrap; overflow-x: hidden; text-overflow: ellipsis; }
    main .product-list .goods-price i{ font-style: normal; font-size: .5rem; display: inline-block; white-space: nowrap; font-weight: 700; color: #d44d44;}
    main .product-list .goods-price span{ color: #d44d44; white-space: nowrap; font-weight: 700; }
    main .product-list .arealink{ width: 100%;height: 100%;position: relative; display: flex; align-items: center;}
    main .product-list .right-side{display:inline-block;height: 100%;}
</style>

<template>
    <main>
        <div v-for="goods in goodsinfo" class="product-list" v-if="goods.product_info.is_mobile===1">
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