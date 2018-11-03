<style type="text/css">
    .login_info form .regit_button{ margin-top: 24px; margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; height: 53px; line-height: 53px; width: 100%; cursor: not-allowed; opacity: .6; background: linear-gradient(#6788d0,#4364bb); padding: 1px; box-sizing: border-box; box-shadow: 0 1px 1px -1px rgba(0,0,0,.8); overflow: hidden; text-align: center; border-radius: 6px; display: block; color: #fff; }
</style>

<template>
    <div class="login_body">
        <div class="login_title">
            <h4>注册账号</h4>
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
                    </li>
                </ul>
                <a @click="regitUser" class="regit_button" >注册</a>
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
            regitUser: function(){
                var username = $(".username").find('input').val();
                var password = $(".password").find('input').val();
                var self = this;
                var reg_phone = /^1[3-9]\d{9}$/;
                var reg_email = /^[a-z0-9][\w\-\.]{2,15}@[0-9a-z][0-9a-z\-]{1,66}(\.[a-z\u2E80-\u9FFF]{2,6}){1,2}$/;
                if(!reg_phone.test(username)){
                    if(!reg_email.test(username)){
                        alert('账号不合法');
                        return false;
                    }else{
                        $.ajax({
                            type: "get",
                            url: "http://localhost:5656/regit",
                            async: true,
                            data: {username:username,password:password},
                            success: function(data) {
                                if(data==="success"){
                                    window.location.href = "/#/home"
                                }else{
                                    console.log(false);
                                }
                            }
                        });
                    }
                }else{
                    $.ajax({
                        type: "get",
                        url: "http://localhost:5656/regit",
                        async: true,
                        data: {username:username,password:password},
                        success: function(data) {
                            if(data==="success"){
                                window.location.href = "/#/home"
                            }else{
                                console.log(false);
                            }
                        }
                    });
                }
                
            }
        }
    }

</script>