<style type="text/css">
    .edition{ position:absolute; top: 50%; right: 0; color:#fff; font-size: 14px; line-height: 20px; padding: 16px 0 0; text-align: center; top: 0; right: 15px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    main .product-list .piclink{height: 100%;position: relative; display:block; align-items: center;float:left;}
    main .product-list .rightside{float:left;margin-top: 10px;}
    main .product-list{overflow:hidden;}
    main .product-list .number{width: 20px;border:0;text-align: center; color:#d44d44;}
    main .product-list .minus,.plus{ line-height: 14px;display:inline-block; width: 14px;height: 14px;text-align: center;border:1px solid #d44d44;border-radius: 50%;}
    main .product-list .chose{display:block;top: 25%;position:absolute;z-index: 999;left: 0;}
    .bottom-bar{position: fixed;
    height: 54px;
    padding: 0 12px;
    bottom: 54px;
    left: 0;
    right: 0;
    z-index: 90;
    background: #fafafa;
    box-shadow: 0 -0.2rem 1rem rgba(0,0,0,.1);
    font-size: 12px;
    color: #666;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;}
    .bottom-bar .select-info{height: fit-content;
    display: flex;
    align-items: center;    font-size: 12px;
    color: #666;}
    .bottom-bar .select-info .m-blue-checkbox-new{    position: relative;
    display: inline-block;
    width: 23px;
    height: 23px;
    background: url("../assets/checkbox.png") no-repeat;
    background-size: 100% auto;
    background-position: 0 -76px;}
    .bottom-bar .select-info .m-blue-checkbox-active{
        display: inline-block;
    width: 23px;
    height: 23px;
    background: url("../assets/checkbox.png") no-repeat;
    background-size: 100% auto;
    background-position: 0 -26px;
    }
    main .product-list .m-blue-checkbox-active{position: relative;
    display: inline-block;
    width: 23px;
    height: 23px;
    background: url("../assets/checkbox.png") no-repeat;
    background-size: 100% auto;
    background-position: 0 -26px;}
    .bottom-bar .select-info >span{    color: #999;
    margin-left: 8px;}
    .bottom-bar .select-info >span i{font-weight: 900;
    font-size: .7rem;}
    .bottom-bar .sum-info{    margin-right: 120px;}
    .bottom-bar .sum-info .total-price{    font-weight: 700;
    color: #333;
    z-index: 10;
    position: relative;
    font-size: 10px;}
    .bottom-bar .sum-info .total-price span{    color: #d44d44;
    font-size: 12px;}
    .bottom-bar .blue-btn{position: absolute;
    width: 110px;
    right: 11px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    font-weight: 700;height: 40px;
    line-height: 40px;
    box-shadow: inset 0 -1px 1px rgba(0,0,0,.2), 0 0 1px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.2);
    font-size: 14px;
    display: block;
    border-radius: 6px;
    text-align: center;
    text-shadow: 0 -1px 0 rgba(0,0,0,.15);
    color: #fff;}
    .bottom-bar .btn-disabled{background: linear-gradient(#bfbfbf,#999);}
    .bottom-bar .btn-actived{background: linear-gradient(#6f94e8,#5178df);}
    .bottom-bar .btn-delete{background: linear-gradient(#db6962,#d0453d);}
    main .product-list .m-blue-checkbox-new{    position: relative;
    display: inline-block;
    width: 23px;
    height: 23px;
    background: url("../assets/checkbox.png") no-repeat;
    background-size: 100% auto;
    background-position: 0 -76px;}
</style>

<template>
    <main>
        <div class="bottom-bar">
            <div class="select-info">
            <div class="checkbox-container">
                <ul class="allcheck">
                <span @click="allactive" class="m-blue-checkbox-new"></span>
                </ul>
            </div>
            <span>已选
                <i class="" v-text="chose_number"></i> 件
            </span>
            </div>
            <div class="sum-info">
            <div class="desc">
                <p class="total-price">合计：<span><i>¥</i><span v-text="totalprice"></span></span></p>
            </div>
            <div @click="deleteGoods" :class="is_dis?'blue-btn btn-disabled':is_delete?'blue-btn btn-delete':'blue-btn btn-actived'" v-text="is_delete?'删除所选':'现在结算'"></div>
            </div>
        </div>
        <div class="my-header">
            <h1> 购物车 </h1>
            <span @click="edit" class="edition" v-text="is_show?'完成':'编辑'"></span>
        </div>
        <div v-for="(goods,index) in goodsinfo" class="product-list">
            <ul class="chose">
                <span @click="active" class="m-blue-checkbox-new"></span>
            </ul>
            <a class="piclink" :href="'/#/item?id='+goods.id">
            <img :src="goods.shop_info.ali_image" alt="" />
            </a>
            <div class="rightside">

                <h1 v-text="goods.shop_info.sku_mobile_title"></h1>
                <p class="goods-title" v-text="goods.shop_info.sku_mobile_sub_title"></p>
                <p class="goods-price">
                    <span @click="minus(index)" v-show="is_show" class="minus">-</span>
                    <input v-show="is_show" class="number" type="number" value="1" />
                    <span @click="plus(index)" v-show="is_show" class="plus">+</span><br v-show="is_show" />
                    <i>￥</i>
                    <span class="cart-price" v-text="goods.price"></span>
                </p>
            </div>
            
        </div>
    </main>
</template>

<script>
    import $ from 'jquery';
    export default{
        data(){
            return{
                goodsinfo:[],
                is_show: false,
                number: 1,
                is_dis: true,
                is_allcheck: true,
                chose_number: 0,
                totalprice: 0,
                is_delete: false,
                is_cancel: false
            }
        },
        methods:{
            getinfo: function(){
                var self = this;
                var ids = sessionStorage.getItem("ids");
                console.log(typeof(ids))
                if(ids!==null){
                    ids = JSON.parse(ids);
                    console.log(ids)
                    $.ajax({
                        type: "get",
                        url: "http://localhost:5656/cart",
                        async: true,
                        data:{ids:ids},
                        success: function(data) {
                            var goodsdb = JSON.parse(data).data.list;
                            self.goodsinfo = goodsdb;
                        }
                    });
                }else{
                    console.log(1)
                }
            },
            edit: function(){
                this.is_show = !this.is_show;
                this.is_delete = !this.is_delete;
            },
            plus: function(index){
                var goodsnumber = $(".number").eq(index).val();
                var price = this.goodsinfo[index].price;
                goodsnumber++;
                this.number = goodsnumber;
                $(".number").eq(index).val(goodsnumber);
                $(".cart-price").eq(index).text(price*goodsnumber.toFixed(2));
                this.sum();
            },
            minus: function(index){
                var goodsnumber = $(".number").eq(index).val();
                var price = this.goodsinfo[index].price;
                goodsnumber--;
                if(goodsnumber<1){
                    goodsnumber=1;
                }
                this.number=goodsnumber;
                $(".number").eq(index).val(goodsnumber);
                $(".cart-price").eq(index).text(price*goodsnumber.toFixed(2));
                this.sum();
            },
            sum: function(){
                this.totalprice = 0;
                for(var x=0;x<$(".cart-price").length;x++){
                    if($(".chose").find("span").eq(x).attr("class")==="m-blue-checkbox-active"){
                        this.totalprice += Number($(".cart-price").eq(x).text());
                    }
                }
            },
            active: function(e){
                var count=0;
                if($(e.target).attr("class")==="m-blue-checkbox-new"){
                    $(e.target).attr("class","m-blue-checkbox-active");
                    this.chose_number++;
                    for(var y = 0;y<$(".chose").find("span").length;y++){
                        if($(".chose").find("span").eq(y).attr("class")==="m-blue-checkbox-active"){
                            count++;
                        }
                    }
                    if(count===this.goodsinfo.length){
                        $(".allcheck").find("span").attr("class","m-blue-checkbox-active");
                        this.sum();
                    }
                    this.sum();
                    this.is_dis = false;
                }else{
                    var count = this.goodsinfo.length;
                    $(e.target).attr("class","m-blue-checkbox-new")
                    this.chose_number--;
                    $(".allcheck").find("span").attr("class","m-blue-checkbox-new");
                    this.is_cancel = !this.is_cancel;
                    for(var y = 0;y<$(".chose").find("span").length;y++){
                        if($(".chose").find("span").eq(y).attr("class")==="m-blue-checkbox-new"){
                            count--;
                        }
                    }
                    if(count===0){
                        this.is_dis=true;
                    }
                    this.sum();
                }
            },
            allactive: function(e){
                if($(e.target).attr("class")==="m-blue-checkbox-new"){
                    for(var x=0;x<$(".cart-price").length;x++){
                        $(".chose").find("span").eq(x).attr("class","m-blue-checkbox-active");
                    }
                    this.is_allcheck = false; 
                    $(e.target).attr("class","m-blue-checkbox-active")
                }else{
                    for(var x=0;x<$(".cart-price").length;x++){
                        $(".chose").find("span").eq(x).attr("class","m-blue-checkbox-new");
                    }  
                    this.is_allcheck = true;
                    $(e.target).attr("class","m-blue-checkbox-new")
                }
                
                if(this.is_allcheck){
                    this.chose_number = 0;
                    this.is_dis = true;
                    this.totalprice = 0;
                }else{
                    
                    this.chose_number = this.goodsinfo.length;
                    this.is_dis = false;
                    this.totalprice = 0;
                    for(var x=0;x<$(".cart-price").length;x++){
                        if($(".chose").find("span").eq(x).attr("class")==="m-blue-checkbox-active"){
                            this.totalprice += Number($(".cart-price").eq(x).text());
                        }
                    }
                    console.log(this.chose_number,this.totalprice)
                }
            },
            deleteGoods: function(){
                var str;
                if(this.is_dis===false&&this.is_delete===true){
                    console.log(this.goods)
                    var ids = sessionStorage.getItem("ids");
                    if(ids!==null){
                        ids = JSON.parse(ids);
                        for(var x=0;x<this.goodsinfo.length;x++){
                            if($(".chose").find("span").eq(x).attr("class")==="m-blue-checkbox-active"){
                                str = $(".piclink").eq(x).attr("href").split("=");
                                ids.splice(ids.indexOf(Number(str[1])),1);
                                console.log(ids);
                                if(ids.length!==0){
                                    sessionStorage.setItem("ids",JSON.stringify(ids));
                                }else{
                                    sessionStorage.removeItem("ids");
                                }
                            }
                        }
                        window.location.reload();
                    }
                }
            }
        },
        mounted(){
            this.getinfo();
        }
    }
</script>