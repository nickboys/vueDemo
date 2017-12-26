<template>
    <body>
    <div class="header">
        <div class="am-g">
            <div class="am-g">
                <img src="../assets/imgs/banner04.jpg">
            </div>
        </div>
        <hr>
    </div>
    <div class="am-g">
        <div class="am-u-lg-6 am-u-md-8 am-u-sm-centered">
            <h3>注册</h3>
            <hr>
            <br>
            <br>

            <form method="post" class="am-form">
                <label for="email">邮箱:</label>
                <input type="email" name="" id="email" value="" v-model="username" placeholder="请输入邮箱">
                <br>
                <label for="password">密码:</label>
                <input type="password" name="" id="password" value="" v-model="password" placeholder="请输入密码">
                <br>
                <label for="remember-me">
                    <input id="remember-me" type="checkbox">
                    记住密码
                </label>
                <br>
                <div class="am-cf">
                    <input type="submit" name="" value="注册" class="am-btn am-btn-primary am-btn-sm am-fl"
                           @click="doRegister">
                    <input type="submit" name="" value="忘记密码 ^_^? " class="am-btn am-btn-default am-btn-sm am-fr">
                </div>
            </form>
            <hr>
            <p>© 2014 AllMobilize, Inc. Licensed under MIT license.</p>
        </div>
    </div>

    </body>
</template>

<script>
    export default {
        name: 'doRegister',
        data () {
            return {
                names: []
            }
        },
        methods: {
            //跨域请求
            doRegister(){
                this.$http.post("http://localhost:8088/user/register", {
                    "username": this.username,
                    "password": this.password
                }, {emulateJSON: true}).then((response) => {
                    console.log(response)
                    let body = response.body;
                    if (body.code == 200) {
                        this.$router.push({path: 'login'})
                    }
                })
            }

        },
    }
</script>

<style>
    .header {
        text-align: center;
    }

    .header h1 {
        font-size: 200%;
        color: #333;
        margin-top: 30px;
    }

    .header p {
        font-size: 14px;
    }
</style>