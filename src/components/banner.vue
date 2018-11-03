<template>
    <section>
        <ul class="banner" @touchend="bannerend" @touchmove="bannermove" @touchstart="bannertouch">
            <li  :class="{'auto-item':mode!==3}" :style="{left:(mode===1?position[0]:mode===2?position[2]:mode===3?position[1]:0)+'px'}">
                <a href="#"><img :src="pic[0].url" :alt="pic[0].No" /></a>
                
            </li>
            <li  :class="{'auto-item':mode!==1}" :style="{left:(mode===1?position[1]:mode===2?position[0]:mode===3?position[2]:0)+'px'}">
                <a href="#"><img :src="pic[1].url" :alt="pic[1].No" /></a>
                
            </li>
            <li  :class="{'auto-item':mode!==2}" :style="{left:(mode===1?position[2]:mode===2?position[1]:mode===3?position[0]:0)+'px'}">
                <a href="#"><img :src="pic[2].url" :alt="pic[2].No" /></a>
                
            </li>
        </ul>
        <div _ngcontent-c10="" class="short-cut-container">
            <div v-for="b in nav" _ngcontent-c10="" class="short-cut">
            <a _ngcontent-c10="" :href="b.link" target="_self">
            <img _ngcontent-c10="" alt="" :src="b.url">
            <p _ngcontent-c10="" v-text="b.title"></p>
            </a>
            </div>
        </div>
    </section>
</template>
<script>
    import $ from 'jquery';
    export default{

        data(){
            return{
                position: [],
                mode: 1,
                start: 0,
                end: 0,
                timer: 0,
                settime: function(){
                    if(this.mode===1){
                        this.mode = 2;
                    }else if(this.mode===2){
                        this.mode = 3;
                    }else if(this.mode===3){
                        this.mode = 1;
                    }
                },
                pic:[{
                    No: 1,
                    url: require("../assets/banner1.jpg")
                },{
                    No: 2,
                    url: require("../assets/banner2.png")
                },{
                    No: 3,
                    url: require("../assets/banner3.png")
                },{
                    No: 4,
                    url: require("../assets/banner1.jpg")
                }],
                nav:[{
                    title: "手机",
                    url: require("../assets/phoneico.png"),
                    link: "/#/sort/categoryphone"
                },{
                    title: "空气净化",
                    url: require("../assets/airfreshico.png"),
                    link: "/#/sort/categoryair"
                },{
                    title: "官方配件",
                    url: require("../assets/packageico.png"),
                    link: "/#/sort/categorypackage"
                },{
                    title: "品牌周边",
                    url: require("../assets/goodsico.png"),
                    link: "/#/sort/categoryshoes"
                },{
                    title: "以旧换新",
                    url: require("../assets/oldchangenewico.png"),
                    link: "/#/sort/categoryphone"
                }]
            }
        },
        mounted(){
            this.banners();
        },
        methods:{
            banners: function(){
                var arr = [0,$(".banner").find("li").width(),-$(".banner").find("li").width()]
                this.position = arr;
                this.timer = setInterval(this.settime.bind(this),3000)
            },
            bannermove: function(e){
                var range=0;
                this.end=e.targetTouches[0].clientX;
                range=this.end-this.start;
                var left = this.position;
                for(var i=0;i<$(".banner").find("li").length;i++){
                    $(".banner").find("li").eq(i).css({"left":(range+left[i]+"px")});
                }
                
            },
            bannertouch: function(e){
                this.start=e.targetTouches[0].clientX;
                clearInterval(this.timer);
                $(".auto-item").removeClass('auto-item');
            },
            bannerend: function(e){
                this.timer = setInterval(this.settime.bind(this),2000);
            }
        }
    }

</script>
<style>
    *{margin: 0;padding: 0;}
    ul,li{list-style: none;}
    section{
        margin: 64px 0 24px 0;
        width: 100%;
        display:block;
    }
    section .banner{
        position:relative;overflow:hidden;width: 100%;height: 149px;

    }
    section .banner li{position: absolute;display:block;border-radius:  5px;width: 100%;height: 100%;}

    section .banner li a{
        height: 100%;
        width: calc(100% - 1.2rem);
        display: block;
        border-radius: .4rem;
        overflow: hidden;
        margin: 0 auto;
    }
    section .banner li img{display:block;width: 100%;height: 100%;}
    section .banner .auto-item{
        transition:all 1s;
    }
    [_nghost-c10] index-bannerX 
    .item-nav-container{
        bottom:.5rem;
    }.layout-banner[_ngcontent-c10]{
        overflow:hidden;
    }.banner-container[_ngcontent-c10]{
        height:7rem;
        margin:14px 0 24px;
        border-radius:.4rem;
    }.banner-container[_ngcontent-c10]:before{
        border-radius:.57143rem;
        z-index:1;
        border:none;
    }.banner-container[_ngcontent-c10]:after{
        content:"";
        width:100%;
        height:100%;
        position:absolute;
        left:50%;
        top:50%;
        -webkit-transform:translate(-50%,-50%);
        transform:translate(-50%,-50%);
        width:107.14286%;
        height:113.57143%;
    }.short-cut-container[_ngcontent-c10]{
        display:flex;
        justify-content:center;
        flex-wrap:nowrap;
        text-align:center;
        margin:24px .6rem .9rem;
    }.short-cut-container[_ngcontent-c10]   .short-cut[_ngcontent-c10]{
        width:20%;
    }.short-cut-container[_ngcontent-c10]   .short-cut[_ngcontent-c10]   a[_ngcontent-c10]{
        text-align:center;
        display:inline-block;
        overflow:hidden;
        word-break:break-word;
        line-height:.8rem;
        font-size:.6rem;
        color:#666;
        text-overflow:ellipsis;
        text-decoration:none;
    }.short-cut-container[_ngcontent-c10]   .short-cut[_ngcontent-c10]   a[_ngcontent-c10]   img[_ngcontent-c10]{
        height:1.2rem;
        width:1.2rem;
        margin:.15rem;
    }.short-cut-container[_ngcontent-c10]   .short-cut[_ngcontent-c10]   a[_ngcontent-c10]   p[_ngcontent-c10]{
        margin-top:.05rem;
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
        font-size:.5rem;
    }.min-font-12px[_nghost-c10]   .short-cut-container[_ngcontent-c10]   .short-cut[_ngcontent-c10]   a[_ngcontent-c10]   p[_ngcontent-c10], .min-font-12px   [_nghost-c10]   .short-cut-container[_ngcontent-c10]   .short-cut[_ngcontent-c10]   a[_ngcontent-c10]   p[_ngcontent-c10]{
        -webkit-transform:scale(.83333);
        transform:scale(.83333);
        -webkit-transform-origin:50% 50%;
        transform-origin:50% 50%;
    }
</style>