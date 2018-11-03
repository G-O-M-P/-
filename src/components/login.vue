<style type="text/css">
    #app{ height: 100%; }
    html,body{ height: 100%; }
    .login_body{ background: #ccc; height: 100%; }
    .login_title{ background-color: #1d1d1d; background-image: none; margin: 0; padding: 0; height: auto; position: relative; background-size: 160px; background-position: top center; background-repeat: no-repeat; box-shadow: none; }
    .login_title h4{ text-indent: inherit; position: static; color: #fff; font-size: 20px; line-height: 2.8em; font-weight: 400; bottom: 0; width: 100%; text-align: center; margin: 0; padding: 0; border-bottom: 0; }
    .login_info{ margin: 14px 12px 0; padding: 0; }
    .login_info form{ margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; }
    .login_info form ul{ margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; }
    .login_info form .username,.password{ border-bottom: 0; border-radius: 6px 6px 0 0; margin-bottom: 0; background-color: #fff; border: 1px solid #d1d1d1; overflow: hidden; font-size: 100%; font: inherit; vertical-align: baseline; position: relative; height: 44px; }
    .login_info form input{ padding: 0 10px; width: 100%; font-size: 15px; height: 44px; background: 0 0; border: 0; box-sizing: border-box; position: absolute; top: 0; left: 0; }
    .login_info form .other{ margin: 14px 12px 20px; height: 14px; }
    .login_info form .login_button{ margin-top: 24px; margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; height: 53px; line-height: 53px; width: 100%; cursor: not-allowed; opacity: .6; background: linear-gradient(#6788d0,#4364bb); padding: 1px; box-sizing: border-box; box-shadow: 0 1px 1px -1px rgba(0,0,0,.8); overflow: hidden; text-align: center; border-radius: 6px; display: block; color: #fff; }
    .login_info form .other .auto_login{ float:left; display:block; color: #000; }
    .login_info form .other .turn_to_regit{ float:right; display:block; color: #000; }
</style>

<template>
    <div class="login_body">
        <div class="login_title">
            <h4>登录官网</h4>
        </div>
        <div class="login_info">
            <form action="">
                <ul>
                    <li class="username">
                        <input  placeholder="手机/邮箱号" type="text" /><br />
                        <span></span>
                        <span></span>
                    </li>
                    <li class="password">
                        <input placeholder="密码" type="password" />
                    </li>
                    <li class="other">
                        <a  class="auto_login" href=""><span>自动登录</span></a>
                        <a class="turn_to_regit" href="/#/regit"><span>注册</span></a>
                    </li>
                </ul>
                <a class="login_button" @click="loginUser">登录</a>
            </form>
        </div>
    </div>
</template>

<script type="text/javascript">
    import $ from 'jquery';
    export default{
        data(){
            return {
            }
        },
        methods:{
            loginUser: function(){

                var username = $(".username").find('input').val();
                var password = $(".password").find('input').val();
                var self = this;
                var useraccount;
                var reg_phone = /^1[3-9]\d{9}$/;
                var reg_email = /^[a-z0-9][\w\-\.]{2,15}@[0-9a-z][0-9a-z\-]{1,66}(\.[a-z\u2E80-\u9FFF]{2,6}){1,2}$/;
                if(!reg_phone.test(username)){
                    if(!reg_email.test(username)){
                       alert('账号不合法');
                        return false; 
                    }else{
                        $.ajax({
                            type: "get",
                            url: "http://localhost:5656/login",
                            async: true,
                            data: {username:username,password:password},
                            success: function(data) {
                                console.log(data)
                                if(data==="success"){
                                    
                                    useraccount = document.cookie.split("; ");
                                    console.log(useraccount)
                                    for(var x=0;x<useraccount.length;x++){
                                        if(useraccount[x].split("=").indexOf("useraccount")!==-1){
                                            document.cookie = "useraccount="+username+"&"+password+"; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
                                        }
                                    }
                                    window.location.href = "/#/home";
                                }else{
                                    console.log("用户名密码错误")
                                }
                            }
                        });
                    }
                }else{
                    $.ajax({
                        type: "get",
                        url: "http://localhost:5656/login",
                        async: true,
                        data: {username:username,password:password},
                        success: function(data) {
                            console.log(data)
                            if(data==="success"){
                                window.location.href = "/#/home"
                            }else{
                                console.log("用户名密码错误")
                            }
                        }
                    });
                }
            }
        }
    }
</script>