<template>
    <div class="goodslist-box">
        <div class="goodsbox">
        <div class="title"><a href="javascript:;"><h1>热销商品</h1></a></div>
        <ul class="goodslist">
            <li v-if="goods.product_info.is_mobile===1" v-for="goods in goodsinfo">
                <div>
                    <a :href="'/#/item?id='+goods.id">
                    <img :src=goods.shop_info.ali_image alt="" />
                    <h2 v-text="goods.shop_info.sku_mobile_title"></h2>
                    <p v-text="goods.shop_info.sku_mobile_sub_title"></p>
                    <p class="price"><i>￥</i><span v-text="goods.price"></span></p>
                    </a>
                </div>
            </li>
        </ul>
        <div class="title"><a href="javascript:;"><h1>商品一览</h1></a></div>
        <ul class="goodslist-all">
            <li v-if="goods.product_info.is_mobile!==1" v-for="goods in goodsinfo">
                <div>
                    <a :href="'/#/item?id='+goods.id">
                    <img :src=goods.shop_info.ali_image alt="" />
                    <h2 v-text="goods.shop_info.sku_mobile_title"></h2>
                    <p v-text="goods.shop_info.sku_mobile_sub_title"></p>
                    <p class="price"><i>￥</i><span v-text="goods.price"></span></p>
                    </a>
                </div>
            </li>
        </ul>
        </div>
    </div>
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
                        var goodsdb = JSON.parse(data).data.list
                        self.goodsinfo = goodsdb;
                        console.log(self.goodsinfo[9])
                    }
                });
            }
        },
        mounted(){
            this.getinfo();
        }
    }

</script>

<style>
    *{margin: 0;padding: 0;}
    ul,li{list-style: none;}
    .goodslist-box{background: #ccc;padding-top: 5px;margin-bottom: 54px;}
    .goodslist-box .goodsbox{width: 100%;background: #fff;}
    .goodslist-box .goodsbox .title{
        position:relative;
        width: 100%;
    }
    .goodslist-box .goodsbox .title h1{
        height: 40px;
        line-height: 40px;
        font-size: .75rem;
        font-weight: 700;
        color: #666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0 .6rem;
    }
    .goodslist-box .goodsbox .title::before{
        content: "";
        display: inline-block;
        width: .3rem;
        height: .5rem;
        position: absolute;
        right: .6rem;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        background: url("../assets/arrow.png") no-repeat 50%;
        background-size: contain;
    }
    .goodslist-box .goodsbox .title::after{
        content: "";
        width: 100%;
        height: 1px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: #ebebeb;
        -webkit-transform: scaleY(.667);
        transform: scaleY(.667);
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
    }
    .goodslist-box .goodslist{
        display: flex;
        align-content: center;
        justify-content: space-between;
        flex-wrap: nowrap;
        padding: 0 .6rem;
        -webkit-overflow-scrolling: touch;
        overflow-y: hidden;
        overflow-x: auto;
    }
    .goodslist-box .goodslist li{
        width: 36%;
        flex-shrink: 0;
        padding-right: .4rem;
    }
    .goodslist-box .goodslist li img{display:block;width: 126px;height: 126px;}
    .goodslist-box .goodslist li h2{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0;
        font-size: .6rem;
        color: #333;
    }
    .goodslist-box .goodslist li div p:nth-child(3){
        margin-top: .3rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: .5rem;
        line-height: 1.2;
        color: #7f7f7f;
        min-height: .6rem;
    }
    .goodslist-box .goodslist li div p:nth-child(4){
        color: #d44d44;
        display: inline-block;
        white-space: nowrap;
        font-weight: 700;
        font-size: .6rem;
    }
    i{
        font-style: normal;
        font-size: .5rem;
    }
    .goodslist-box .goodslist-all{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 .6rem;
    }
    .goodslist-box .goodslist-all li{
        width: 46%;
        flex-shrink: 0;
        padding-right: .4rem;
    }
    .goodslist-box .goodslist-all li img{
        height: 100%;
        width: 100%;
    }
    .goodslist-box .goodslist-all li h2{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0;
        font-size: .6rem;
        color: #333;
    }
    .goodslist-box .goodslist-all li div p:nth-child(3){
        margin-top: .3rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: .5rem;
        line-height: 1.2;
        color: #7f7f7f;
        min-height: .6rem;
    }
    .goodslist-box .goodslist-all li div p:nth-child(4){
        color: #d44d44;
        display: inline-block;
        white-space: nowrap;
        font-weight: 700;
        font-size: .6rem;
    }
    .goodslist-box .goodslist-all li div{
        font-size: 0;
    }
</style>