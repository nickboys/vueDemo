<template>
    <div>
        <header class="am-topbar am-topbar-fixed-top">
            <div class="am-container">
                <h1 class="am-topbar-brand">
                    <a href="#/music">我的音乐我做主</a>
                </h1>

                <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-secondary am-show-sm-only"
                        data-am-collapse="{target: &#39;#collapse-head&#39;}"><span class="am-sr-only">导航切换</span> <span
                        class="am-icon-bars"></span></button>

                <div class="am-collapse am-topbar-collapse" id="collapse-head">
                    <ul class="am-nav am-nav-pills am-topbar-nav">
                        <li><a href="#/music">首页</a></li>
                        <li><a href="#/billboard">榜单</a></li>
                        <li class="am-active"><a href="#/music">歌手</a></li>
                        <li><a href="#/music">会员</a></li>
                    </ul>

                    <div class="am-topbar-right">
                        <button class="am-btn am-btn-secondary am-topbar-btn am-btn-sm" @click="register"><span
                                class="am-icon-pencil"></span>
                            注册
                        </button>
                    </div>

                    <div class="am-topbar-right">
                        <button id="login" class="am-btn am-btn-primary am-topbar-btn am-btn-sm" @click="login"><span
                                class="am-icon-user"></span> 登录
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <footer class="am-footer-default">
            2222
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'singer',
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