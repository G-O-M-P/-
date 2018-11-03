<style>
    *{margin: 0;padding: 0;}
    ul,li{list-style: none;}
    main{margin-top: 50px;margin-bottom: 54px;width: 100%;height: 100%;background: #ccc;}
    main .allbox{background: #fff;margin-bottom: 5px;}
    main .allbox h1{
        margin: 0 .6rem;
        height: 40px;
        line-height: 40px;
        font-size: .75rem;
        font-weight: 700;
        color: #666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: elli;
    }
    main .allbox .intro-pic-box{padding: .7rem .6rem;}
    main .allbox .intro-pic-box .intro-pic-box-case{border-radius: .25rem;overflow: hidden;}
    main .allbox .intro-pic-box .intro-pic-box-case img{width: 100%;height: 4.3rem;}
    main .allbox .goods-menu .goods-list{height: 3rem;line-height: 3rem;}
    main .allbox .goods-menu .goods-list a { display: flex; align-items: center; box-sizing: border-box; position: relative; height: 3rem; line-height: 3rem; }
    main .allbox .goods-menu .goods-list a img{ height: 1.8rem; width: 1.8rem; margin: 0 .6rem; flex: 0 0 auto; }
    main .allbox .goods-menu .goods-list a span{ overflow: hidden; text-overflow: ellipsis; word-break: break-word; line-height: 1.2; font-size: .6rem; font-weight: 700; color: rgba(0,0,0,.8); white-space: nowrap; }

</style>

<template>
<main>
    <div class="allbox" v-for="(titles,index) in title">
        <h1 class="title" v-text="titles.name"></h1>
        <div class="intro-pic-box">
            <div class="intro-pic-box-case">
                <img :src=titles.url :alt="index" />
            </div>
        </div>
        <ul class="goods-menu">
            <li class="goods-list" v-if="goods.product_info.is_mobile===1&&index===0" v-for="goods in goodsinfo">
                <a :href="'/#/item?id='+goods.id"><img :src=goods.shop_info.ali_image alt="" />
                <span v-text="goods.shop_info.sku_mobile_title"></span></a>
            </li>
            <li class="goods-list" v-if="(goods.product_info.category_id==='23'&&index===1)||(goods.product_info.category_id==='94'&&index===1)||(goods.product_info.category_id==='73'&&index===1)||(goods.product_info.category_id==='70'&&index===1)" v-for="goods in goodsinfo">
                <a :href="'/#/item?id='+goods.id"><img :src=goods.shop_info.ali_image alt="" />
                <span v-text="goods.shop_info.sku_mobile_title"></span></a>
            </li>
            <li class="goods-list" v-if="goods.product_info.category_id==='56'&&index===2" v-for="goods in goodsinfo">
                <a :href="'/#/item?id='+goods.id"><img :src=goods.shop_info.ali_image alt="" />
                <span v-text="goods.shop_info.sku_mobile_title"></span></a>
            </li>
            <li class="goods-list" v-if="goods.product_info.category_id==='25'&&index===3||goods.product_info.category_id==='26'&&index===3" v-for="goods in goodsinfo">
                <a :href="'/#/item?id='+goods.id"><img :src=goods.shop_info.ali_image alt="" />
                <span v-text="goods.shop_info.sku_mobile_title"></span></a>
            </li>
            <li class="goods-list" v-if="(goods.product_info.category_id==='80'&&index===4)||(goods.product_info.category_id==='83'&&index===4)||(goods.product_info.category_id==='84'&&index===4)" v-for="goods in goodsinfo">
                <a :href="'/#/item?id='+goods.id"><img :src=goods.shop_info.ali_image alt="" />
                <span v-text="goods.shop_info.sku_mobile_title"></span></a>
            </li>
            <li class="goods-list" v-if="(goods.product_info.category_id==='39'&&index===5)||(goods.product_info.category_id==='48'&&index===5)||(goods.product_info.category_id==='91'&&index===5)||(goods.product_info.category_id==='48'&&index===5)" v-for="goods in goodsinfo">
                <a :href="'/#/item?id='+goods.id"><img :src=goods.shop_info.ali_image alt="" />
                <span v-text="goods.shop_info.sku_mobile_title"></span></a>
            </li>
            <li class="goods-list" v-if="(goods.product_info.category_id==='49'&&index===6)" v-for="goods in goodsinfo">
                <a :href="'/#/item?id='+goods.id"><img :src=goods.shop_info.ali_image alt="" />
                <span v-text="goods.shop_info.sku_mobile_title"></span></a>
            </li>
        </ul>
    </div>
</main>
</template>

<script>
    import $ from 'jquery';
    export default{
        data(){
            return{
                title: [{
                    name:"手机",
                    url: require("../assets/category_phone.png")
                },{
                    name:"壳套膜",
                    url: require("../assets/category_case.png")
                },{
                    name:"充电线材",
                    url: require("../assets/category_charge.png")
                },{
                    name:"耳机音箱",
                    url: require("../assets/category_earphone.png")
                },{
                    name:"空气净化",
                    url: require("../assets/category_air.png")
                },{
                    name:"鞋服",
                    url: require("../assets/category_shoes.png")
                },{
                    name:"图书",
                    url: require("../assets/category_book.png")
                }],
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

