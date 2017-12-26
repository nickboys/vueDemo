<template>
    <body class="am-with-topbar-fixed-top">
    <header class="am-topbar am-topbar-fixed-top" style="background-color: #3c3c3c;color:beige">
        <div class="am-container">
            <h1 class="am-topbar-brand">
                <a href="#/music" style="color: #FFFFFF">音乐会员</a>
            </h1>

            <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-secondary am-show-sm-only"
                    data-am-collapse="{target: &#39;#collapse-head&#39;}"><span class="am-sr-only">导航切换</span> <span
                    class="am-icon-bars"></span></button>

            <div class="am-collapse am-topbar-collapse" id="collapse-head">
                <ul class="am-nav am-nav-pills am-topbar-nav">
                    <li class="am-active"><a href="#/music" style="color: #FFFFFF">首页</a></li>
                    <li><a href="#/billboard" style="color: #FFFFFF">音乐包</a></li>
                    <li><a href="#/music" style="color: #FFFFFF">常见问题</a></li>
                    <li><a href="#/music" style="color: #FFFFFF">激活码兑换</a></li>
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

    <div class="get">
        <div data-am-widget="slider" class="am-slider am-slider-c3" data-am-slider='{&quot;controlNav&quot;:false}'>
            <ul class="am-slides">
                <li>
                    <img src="/src/assets/imgs/banner01.jpg">
                    <div class="am-slider-desc">
                        <div class="am-slider-counter"><span class="am-active">1</span>/2</div>
                    </div>

                </li>
                <li>
                    <img src="/src/assets/imgs/banner03.jpg">
                    <div class="am-slider-desc">
                        <div class="am-slider-counter"><span class="am-active">2</span>/2</div>
                    </div>

                </li>
            </ul>
        </div>

    </div>

    <div>
        <div class="hope">
            <div class="am-g am-container">
                <div class="am-u-lg-4 am-u-md-6 am-u-sm-12 hope-img">
                    <img src="/src/assets/i/examples/landing.png" alt=""
                         data-am-scrollspy="{animation:&#39;slide-left&#39;, repeat: false}"
                         class="am-scrollspy-init am-scrollspy-inview am-animation-slide-left">
                    <hr class="am-article-divider am-show-sm-only hope-hr">
                </div>
                <div class="am-u-lg-8 am-u-md-6 am-u-sm-12">
                    <h2 class="hope-title">同我们一起打造你的音乐网站</h2>

                    <p>
                        在互联网这个爆炸的年代，我们不愿成为音乐的过客，拥抱多媒体音乐，获得自我灵魂的升华。
                    </p>
                </div>
            </div>
        </div>

    </div>
    <footer class="footer">
        <p>全力做好网上治安秩序打击整治专项行动，打造晴朗网络空间
            网站地图 | 联系我们 | 广告服务 | 诚聘英才 | 用户服务协议 | 隐私政策 | 酷我音乐网站免责声明 | 酷我音乐网站著作保护声明 | 未成年人家长监护工程
            北京酷我科技有限公司版权所有 网络文化经营许可证： 京网文[2015]0525-205号 信息网络传播视听节目许可证0109362号 增值电信业务经营许可证B2-20090418 京ICP证060261号
            广播电视节目制作经营许可证京字第2037号 营业性演出许可证京市演1574 京公网安备 11010502030216号 京ICP备09014827号</p>
    </footer>

    </body>
</template>
<script>
    export default {
        name: 'vip',
        data () {
            return {
                todos: [
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
            }
        },
    }
</script>