<template>
    <body>
    <div class="header">
        <div class="am-g">
            <h1>Web ide</h1>
            <p>Integrated Development Environment<br>代码编辑，代码生成，界面设计，调试，编译</p>
        </div>
        <hr>
    </div>
    <div class="am-g">
        <div class="am-u-lg-6 am-u-md-8 am-u-sm-centered">
            <h3>登录</h3>
            <hr>
            <div class="am-btn-group" style="display: none">
                <a href="http://amazeui.org/examples/login.html#" class="am-btn am-btn-secondary am-btn-sm"><i
                        class="am-icon-github am-icon-sm"></i> Github</a>
                <a href="http://amazeui.org/examples/login.html#" class="am-btn am-btn-success am-btn-sm"><i
                        class="am-icon-google-plus-square am-icon-sm"></i> Google+</a>
                <a href="http://amazeui.org/examples/login.html#" class="am-btn am-btn-primary am-btn-sm"><i
                        class="am-icon-stack-overflow am-icon-sm"></i> stackOverflow</a>
            </div>
            <br>
            <br>

            <form method="post" class="am-form">
                <label for="email">邮箱:</label>
                <input type="email" name="" id="email" value="" placeholder="请输入邮箱">
                <br>
                <label for="password">密码:</label>
                <input type="password" name="" id="password" value="" placeholder="请输入密码">
                <br>
                <label for="remember-me">
                    <input id="remember-me" type="checkbox">
                    记住密码
                </label>
                <br>
                <div class="am-cf">
                    <input type="submit" name="" value="登 录" class="am-btn am-btn-primary am-btn-sm am-fl"
                           @click="doLogin" v-model="username">
                    <input type="submit" name="" v-model="password" value="忘记密码 ^_^? "
                           class="am-btn am-btn-default am-btn-sm am-fr">
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
        name: 'doLogin',
        data () {
            return {
                names: [
                    {text: 'Learn JavaScript'},
                    {text: 'Learn Vue'},
                    {text: 'Build something awesome'}
                ]
            }
        },
        methods: {
            login(){
                this.$router.push({path: 'login'})
            },
            register(){
                this.$router.push({path: 'register'})
            },
            //跨域请求
            doLogin(){
                this.$http.post("http://localhost:8088/user/login", {
                    "username": this.username,
                    "password": this.password
                }, {emulateJSON: true}).then((response) => {
                    console.log(response)
                    let body = response.body;
                    if (body.code == 200) {
                        this.$router.push({path: 'music'})
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
