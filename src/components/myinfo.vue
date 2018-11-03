<style>
    .my-header{ background: #1d1d1d; background-image: linear-gradient(#1d1d1d,#181818); height: 50px; position: fixed; top: 0; left: 0; right: 0; z-index: 199; }
    .my-header h1{ color: #fff; font-size: 18px; line-height: 20px; padding: 16px 0 0; text-align: center; position: absolute; top: 0; left: 60px; right: 60px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .my-body{ background: #ccc; margin-top: 50px; margin-bottom: 54px; padding: .7rem .6rem 0; height: 100%; }
    .my-body .my-login_regit{ position: relative; height: 4.15rem; line-height: 4.15rem; padding-left: 4.35rem; margin-bottom: 0; border-bottom: 0; border-radius: .4rem .4rem 0 0; font-size: .85rem; color: #333; box-shadow: none; background: #fff; }
    .my-body .my-login_regit::before{ content: " "; display: block; position: absolute; left: 14px; top: 14px; background: url("../assets/avatar-1.png") no-repeat; background-size: 2.66rem; width: 2.66rem; height: 2.66rem; border-radius: 50%; }
    .my-body .my-login_regit::after{ content: ""; display: inline-block; width: .3rem; height: .5rem; position: absolute; right: .6rem; top: 50%; -webkit-transform: translateY(-50%); transform: translateY(-50%); background: url("../assets/avatar-2.png") no-repeat 50%; background-size: contain; }
    .my-body .my-login_regit .avatar{ width: 2.66rem; height: 2.66rem; border-radius: 50%; position: absolute; left: .9rem; top: 50%; width: 2.66rem; height: 2.66rem; -webkit-transform: translateY(-50%); transform: translateY(-50%); }
    .my-body .my-nav{ position: relative; overflow: hidden; border-radius: 0 0 .4rem .4rem; border-radius: .4rem; background: #fff; margin-bottom: .7rem; box-shadow: 0 1px 2px rgba(0,0,0,.1), 0 18px 20px -10px rgba(0,0,0,.03), 0 18px 20px -10px rgba(0,0,0,.03), 0 10px 20px -10px rgba(0,0,0,.03); background: #fff; }
    .my-body .my-nav::before{ position: absolute; left: 0; right: 0; top: 0; content: ""; width: 100%; height: 1px; background: #f2f2f2; }
    .my-body .my-nav li{ float: left; width: 25%; height: 4rem; text-align: center; font-size: .5rem; box-sizing: border-box; position: relative; }
    .my-body .my-nav li::before{ position: absolute; top: 0; right: 0; content: ""; width: 1px; height: 100%; background: #f2f2f2; }
    .my-body .my-nav li a{ position: relative; display: block; text-decoration: none; color: #333; padding: 2rem 0 .5rem; font-size: .5rem; }
    .my-body .my-nav li a::before{ background: url("../assets/my-nav-1.png") no-repeat 50%; background-size: .8rem; content: " "; display: block; position: absolute; top: 50%; left: .9rem; width: 1.2rem; height: 1.2rem; transform: translateY(-50%); top: .4rem; left: 50%; transform: translateX(-50%); }
    .my-body .my-nav-list{ position: relative; overflow: hidden; border-radius: 0 0 .4rem .4rem; border-radius: .4rem; background: #fff; margin-bottom: .7rem; box-shadow: 0 1px 2px rgba(0,0,0,.1), 0 18px 20px -10px rgba(0,0,0,.03), 0 18px 20px -10px rgba(0,0,0,.03), 0 10px 20px -10px rgba(0,0,0,.03); background: #fff; }
    .my-body .my-nav-list li{ height: 3rem; line-height: 3rem; position: relative; font-size: .85rem; box-sizing: border-box; }
    .my-body .my-nav-list li::before{ position: absolute; left: 0; right: 0; bottom: 0; content: ""; width: 100%; height: 1px; background: #f2f2f2; transform: scaleY(.667); transform-origin: bottom; }
    .my-body .my-nav-list li::after{ content: ""; display: inline-block; width: .3rem; height: .5rem; position: absolute; right: .6rem; top: 50%; transform: translateY(-50%); background: url("../assets/avatar-2.png") no-repeat 50%; background-size: contain; }
    .my-body .my-nav-list li a{ padding-left: 0; text-indent: .93rem; height: 100%; position: relative; display: block; text-decoration: none; color: #333; font-size: .85rem; line-height: 3rem; }
</style>

<template>
    <div>
    <div class="my-header"><h1> 个人中心 </h1></div>
    <div class="my-body">
        <div @click="toLogin" class="my-login_regit" >
            <img class="avatar" src="../assets/default-user-avatar.png" alt=""  />
            <span v-text="username"></span>
        </div>
        <ul class="my-nav">
            <li><a href="">全部订单</a></li>
            <li><a href="">待付款</a></li>
            <li><a href="">待收货</a></li>
            <li><a href="">售后</a></li>
        </ul>
        <ul class="my-nav-list">
            <li><a href="">地址管理</a></li>
            <li><a href="">我的优惠劵</a></li>
            <li><a href="">优先购买码</a></li>
            <li><a href="">提货兑换卡</a></li>
        </ul>
        <ul class="my-nav-list">
            <li><a href="">常见问题</a></li>
            <li><a href="">服务支持</a></li>
        </ul>
        <ul class="my-nav-list">
            <li><a href="">以旧换新</a></li>
            <li><a href="">意外碎屏保修服务</a></li>
            <li><a href="">延长保修服务</a></li>
        </ul>
    </div>
    </div>
</template>

<script type="text/javascript">
    export default{
        data(){
            return{
                is_login: false,
                username: "登录注册"
            }
        },
        methods:{
            toLogin: function(){
                if(!this.is_login){
                    window.location.href="/#/login";
                }
            },
            checkLogin: function(){
                var useraccount = document.cookie.split("; ");
                var self = this;
                for(var x=0;x<useraccount.length;x++){
                    console.log(0)
                    if(useraccount[x].split("=").indexOf("useraccount")!==-1){
                        console.log(2)
                        self.is_login = true;
                        self.username = useraccount[x].split("=")[1].split("&")[0];
                        return;
                    }else{
                        console.log(1)
                        self.is_login = false;
                    }
                }
            }
        },
        mounted(){
            this.checkLogin();
        }
    }

</script>