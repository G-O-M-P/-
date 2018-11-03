<style>
    .detail-body{ width: 100%; height: 100%; background: #ccc; }
    .detail-body .title-bar{ background: #1d1d1d; background-image: linear-gradient(#1d1d1d,#181818); height: 50px; position: fixed; top: 0; left: 0; right: 0; z-index: 199; }
    .detail-body .title-bar .nav-back{ background: linear-gradient(#131313,#070707); color: #fff; border-radius: 4px; box-sizing: border-box; font-size: 12px; height: 32px; line-height: 1; position: absolute; top: 50%; transform: translateY(-50%); padding: 10px 10px 0 20px; left: 6px; }
    .detail-body .title-bar .nav-back::before{ background: url("../assets/reversearrow.png") no-repeat; background-size: cover; content: " "; height: 100%; width: 6px; position: absolute; top: 50%; left: 9px; -webkit-transform: translateY(-50%); transform: translateY(-50%); }
    .detail-body .title-bar .nav-back::after{ background: linear-gradient(#2a2a29,#151515); box-shadow: inset 0 1px 1px hsla(0,0%,100%,.1), inset 0 0 1px rgba(0,0,0,.5); border-radius: 3px; content: " "; position: absolute; top: 1px; bottom: 1px; left: 1px; right: 1px; z-index: -1; }
    .detail-body .title-bar .nav-title{ color: #fff; font-size: 18px; line-height: 20px; padding: 16px 0 0; text-align: center; position: absolute; top: 0; left: 60px; right: 60px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .detail-body .detail-main{ margin-top: 100px; margin-bottom: 54px; width: 100%; height: 100%; }
    .detail-body .detail-main .nav-bar{ padding: .45rem .3rem; z-index: 99; background: #fff; box-shadow: 0 5px 13px rgba(0,0,0,.12); position: fixed; left: 0; right: 0; top: 50px; }
    .detail-body .detail-main .nav-bar ul{ position: relative; font-size: .675rem; font-weight: 700; box-sizing: border-box; display: flex; text-align: center; border-radius: .15rem; }
    .detail-body .detail-main .nav-bar::after{ content: ""; width: 100%; height: 1px; position: absolute; left: 0; right: 0; bottom: 0; background: #d8d8d8; }
    .detail-body .detail-main .nav-bar ul::before{ border-radius: .21429rem; border-color: #000; content: ""; position: absolute; top: -1px; bottom: -3.85714%; left: 10px; right: 3.14286%; border: 1px solid #f0f0f0; }
    .detail-body .detail-main .nav-bar ul::after{ width: 1px; height: 100%; top: 0; left: auto; right: 0; bottom: 0; }
    .detail-body .detail-main .nav-bar ul li{ flex-basis: 25%; padding: .4rem 0; position: relative; color: #606060; }
    .detail-body .detail-main .nav-bar ul li::after{ background: #d4d4d4; width: 1px; height: 100%; top: 0; left: auto; right: 0; bottom: 0; content: ""; background: #ebebeb; position: absolute; }
    .detail-body .detail-main .nav-bar ul li span{ color: #606060; }
    .detail-body .detail-main .nav-bar ul li >div{ position: absolute; left: 0; right: 0; top: -.45rem; bottom: -.45rem; color: #606060; }
    .detail-body .detail-main .detail-box{ position: relative; box-shadow: 0 5px 13px rgba(0,0,0,.1); margin-bottom: 6px; background: #fff; }
    .detail-body .detail-main .detail-box ul{ height: 80vw; width: 100%; overflow: hidden; position: relative; transform-style: preserve-3d; background: #fff; white-space: nowrap; padding: 0; margin: 0; font-size: 0; }
    .detail-body .detail-main .detail-box ul li{ display: inline-block; list-style: none; font-size: 14px; left: -100%; text-align: center; width: 100%; height: 100%; overflow: hidden; transform-style: preserve-3d; }
    .detail-body .detail-main .detail-box ul li img{ height: 100%; margin: auto; text-align: center; font-size: 14px; }
    .detail-body .detail-main .detail-info{ position: relative; box-shadow: 0 5px 13px rgba(0,0,0,.1); margin-bottom: 6px; background: #fff; }
    .detail-body .detail-main .detail-info .info-title{ position: relative; padding: 0 .6rem; height: 40px; }
    .detail-body .detail-main .detail-info .info-title h1{ line-height: 40px; font-size: .75rem; font-weight: 700; color: #666; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .detail-body .detail-main .detail-info .info-title::after{ content: ""; width: 100%; height: 1px; position: absolute; left: 0; right: 0; bottom: 0; background: #ebebeb; }
    .detail-body .detail-main .detail-info .goods-detail{ padding: .8rem .9rem; }
    .detail-body .detail-main .detail-info .goods-detail h2{ font-size: .75rem; margin-bottom: .4rem; color: #333; }
    .detail-body .detail-main .detail-info .goods-detail p{ font-size: .6rem; color: #7f7f7f; margin-bottom: .4rem; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 3; overflow: hidden; }
    .detail-body .detail-main .detail-info .goods-detail .price{ margin-right: .2rem; font-weight: 700; color: #d44d44; font-size: .7rem; display: inline-block; white-space: nowrap; }
    .detail-body .detail-main .detail-info .goods-detail .price span{ margin-right: .2rem; font-size: .8rem; }
    .detail-body .buy-bar{ position: fixed; bottom: 0; left: 0; right: 0; display: flex; align-content: center; justify-content: space-between; background: #fff; height: 2.75rem; padding: 0 .4%; z-index: 202; box-shadow: 0 -11px 27px rgba(0,0,0,.08); }
    .detail-body .buy-bar li{ display: flex; align-items: center; justify-content: center; flex-basis: 100%; box-sizing: border-box; flex-grow: 1; flex-shrink: 1; margin: 0 .7%; }
    .detail-body .buy-bar .shop-cart{ flex-shrink: 0; flex-basis: 2.5rem; display: flex; align-items: center; }
    .detail-body .buy-bar .shop-cart a{ display: inline-block; width: 100%; text-align: center; position: relative; }
    .detail-body .buy-bar .shop-cart a img{ display: block; margin: .35rem auto; width: 1.35rem; text-align: center; }
    .detail-body .buy-bar .buy-now span{ background: linear-gradient(#6e98f4,#4b77ee); color: #fff; width: 98%; height: 1.9rem; font-size: .75rem; font-weight: 700; border-radius: .2rem; display: flex; justify-content: center; align-items: center; }
    .detail-body .buy-bar .buy-now span a{ color:#fff; }
    .detail-body .buy-bar .add-cart span{ width: 98%; height: 1.9rem; font-size: .75rem; font-weight: 700; border-radius: .2rem; display: flex; justify-content: center; align-items: center; background-image: linear-gradient(#fff,#fcfcfc); color: #8c8c8c; }
    .detail-body .buy-bar .add-cart span a{ color: inherit; }
    .detail-body .buy-bar .shop-cart a .tag{ position: absolute; box-sizing: border-box; left: calc(50% + 4px); top: 3.66667px; height: 48px; min-width: 48px; line-height: 1.6; padding: 0 16px; border-radius: 24px; background: #d44d44; font-size: 30px; font-weight: 700; color: #fff; text-shadow: 0 -2px 0 rgba(0,0,0,.06); -webkit-transform-origin: 0 0; transform-origin: 0 0; -webkit-transform: scale(.33333); transform: scale(.33333); box-shadow: 0 3px 8px rgba(212,78,69,.4); }
</style>

<template>
    <div class="detail-body">
        <ul class="buy-bar">
            <li class="shop-cart">
                <a href="#/shopcart">
                    <div _ngcontent-c2="" :class="{'tag':countshow}"><span _ngcontent-c2="" v-text="goodscount"></span></div>
                    <img src="../assets/shopcartico.png" alt="" />
                </a>
            </li>
            <li class="add-cart"><span><a @click="addCart">加入购物车</a></span></li>
            <li class="buy-now"><span><a>现在购买</a></span></li>
        </ul>
        <div class="title-bar" v-for="goods in goodsinfo">
            <a @click="goback" class="nav-back">返回</a>
            <h1 class="nav-title" v-text="goods.shop_info.sku_mobile_title"></h1>
        </div>
        <div class="detail-main" v-for="goods in goodsinfo">
        <div class="nav-bar">
            <ul>
                <li>商品<div></div></li>
                <li>详情<div></div></li>
                <li>参数<div></div></li>
                <li>推荐<div></div></li>
            </ul>
        </div>
        <div class="detail-box">
            <ul>
                <li><img :src="goods.shop_info.ali_image" alt="" /></li>
            </ul>
        </div>
        <div class="detail-info">
            <div class="info-title">
                <h1>商品信息</h1>
            </div>
            <div class="goods-detail">
                <h2 v-text="goods.shop_info.sku_mobile_title"></h2>
                <p v-text="goods.shop_info.sku_mobile_sub_title"></p>
                <div class="price"><i>￥</i><span v-text="goods.price">23424</span></div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    export default{
        data(){
            return{
                goodsinfo:[],
                goodscount: '',
                countshow: false
            }
        },
        methods:{
            getinfo: function(){
                var self = this;
                var id = this.$route.query.id;
                $.ajax({
                    type: "get",
                    url: "http://localhost:5656/getinfo",
                    async: true,
                    data: {id:id},
                    success: function(data) {
                        console.log(JSON.parse(data),self,self.goodsinfo)
                        var goodsdb = JSON.parse(data).data.list;
                        self.goodsinfo = goodsdb;
                    }
                });
            },
            goback: function(){
                window.history.go(-1);
            },
            addCart: function(){
                var ids;
                var self = this;
                var check = sessionStorage.getItem("ids");
                if(check!==null){
                    check = JSON.parse(check);
                    if(check.indexOf(self.goodsinfo[0].id)<0){
                        check.push(self.goodsinfo[0].id);
                        sessionStorage.setItem("ids", `[${check}]`);
                    }
                }else{
                    ids=self.goodsinfo[0].id;
                    sessionStorage.setItem("ids", `[${ids}]`);
                }
            },
            checkgoods: function(){
                var self = this;
                var ids = sessionStorage.getItem("ids");
                if(ids!==null){
                    self.countshow = true;
                    ids = ids.split(",");
                    self.goodscount = ids.length;
                    console.log(self.goodscount)
                }else{
                    self.countshow = false;
                    self.goodscount = '';
                }
            }
        },
        mounted(){
            this.checkgoods();
            this.getinfo();
        }
    }
</script>