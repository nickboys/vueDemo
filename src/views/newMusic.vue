<template>
    <body class="am-with-topbar-fixed-top">
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
                    <li class="am-active"><a href="#/music">首页</a></li>
                    <li><a href="#/billboard">榜单</a></li>
                    <!--<li class="am-dropdown" data-am-dropdown="">-->
                    <!--<a class="am-dropdown-toggle" data-am-dropdown-toggle="" href="javascript:;">-->
                    <!--下拉菜单 <span class="am-icon-caret-down"></span>-->
                    <!--</a>-->
                    <!--<ul class="am-dropdown-content">-->
                    <!--<li class="am-dropdown-header">标题</li>-->
                    <!--<li><a href="http://amazeui.org/examples/landing.html#">1. 默认样式</a></li>-->
                    <!--<li><a href="http://amazeui.org/examples/landing.html#">2. 基础设置</a></li>-->
                    <!--<li><a href="http://amazeui.org/examples/landing.html#">3. 文字排版</a></li>-->
                    <!--<li><a href="http://amazeui.org/examples/landing.html#">4. 网格系统</a></li>-->
                    <!--</ul>-->
                    <!--</li>-->
                    <li><a href="#/singer">歌手</a></li>
                    <li><a href="#/vip">会员</a></li>
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
                    <img src="../assets/imgs/2.jpg">
                    <div class="am-slider-desc">
                        <div class="am-slider-counter"><span class="am-active">1</span>/4</div>
                        远方 有一个地方 那里种有我们的梦想
                    </div>

                </li>
                <li>
                    <img src="../assets/imgs/3.jpg">
                    <div class="am-slider-desc">
                        <div class="am-slider-counter"><span class="am-active">2</span>/4</div>
                        某天 也许会相遇 相遇在这个好地方
                    </div>

                </li>
                <li>
                    <img src="../assets/imgs/4.jpg">
                    <div class="am-slider-desc">
                        <div class="am-slider-counter"><span class="am-active">3</span>/4</div>
                        不要太担心 只因为我相信 终会走过这条遥远的道路
                    </div>

                </li>
                <li>
                    <img src="../assets/imgs/5.jpg">
                    <div class="am-slider-desc">
                        <div class="am-slider-counter"><span class="am-active">4</span>/4</div>
                        OH PARA PARADISE 是否那么重要 你是否那么地遥远
                    </div>

                </li>
            </ul>
        </div>


    </div>

    <div class="detail">
        <div class="am-g am-container">
            <div class="am-u-lg-12">
                <h2 class="detail-h2">演绎激情的歌曲，期待和你一起去实现!</h2>

                <div class="am-g">
                    <div class="am-u-lg-3 am-u-md-6 am-u-sm-12 detail-mb">

                        <!--<h3 class="detail-h3">-->
                        <!--<i class="am-icon-mobile am-icon-sm"></i>-->
                        <!--为移动而生-->
                        <!--</h3>-->

                        <!--<p class="detail-p">-->
                        <!--Amaze UI 采用业内先进的 mobile first 理念，从小屏逐步扩展到大屏，最终实现所有屏幕适配，适应移动互联潮流。-->
                        <!--</p>-->
                        <label id="ig1"><img src="/src/assets/imgs/1511532796880_.jpg"></label>

                    </div>
                    <div class="am-u-lg-3 am-u-md-6 am-u-sm-12 detail-mb">
                        <!--<h3 class="detail-h3">-->
                        <!--<i class="am-icon-cogs am-icon-sm"></i>-->
                        <!--组件丰富，模块化-->
                        <!--</h3>-->

                        <!--<p class="detail-p">-->
                        <!--Amaze UI 含近 20 个 CSS 组件、10 个 JS 组件，更有 17 款包含近 60 个主题的-->
                        <!--Widgets，可快速构建界面出色、体验优秀的跨屏页面，大幅度提升你的开发效率。-->
                        <!--</p>-->
                        <label id="ig2"><img src="/src/assets/imgs/1512712903703_.jpg"></label>
                    </div>
                    <!--<div class="am-u-lg-3 am-u-md-6 am-u-sm-12 detail-mb">-->
                    <!--<h3 class="detail-h3">-->
                    <!--<i class="am-icon-check-square-o am-icon-sm"></i>-->
                    <!--本地化支持-->
                    <!--</h3>-->

                    <!--<p class="detail-p">-->
                    <!--相比国外的前端框架，Amaze UI 专注解决中文排版优化问题，根据操作系统调整字体，实现最佳中文排版效果；针对国内主流浏览器及 App-->
                    <!--内置浏览器提供更好的兼容性支持，为你节省大量兼容性调试时间。-->
                    <!--</p>-->
                    <!--</div>-->
                    <!--<div class="am-u-lg-3 am-u-md-6 am-u-sm-12 detail-mb">-->
                    <!--<h3 class="detail-h3">-->
                    <!--<i class="am-icon-send-o am-icon-sm"></i>-->
                    <!--轻量级，高性能-->
                    <!--</h3>-->

                    <!--<p class="detail-p">-->
                    <!--Amaze UI 非常注重性能，基于轻量的 Zepto.js 开发，并使用 CSS3 来做动画交互，平滑、高效，更适合移动设备，让你的 Web 应用可以高速载入。-->
                    <!--</p>-->
                    <!--</div>-->
                </div>
            </div>
        </div>
    </div>

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

    <!--<div class="about">-->
    <!--<div class="am-g am-container">-->
    <!--<div class="am-u-lg-12">-->
    <!--<h2 class="about-title about-color">Amaze UI 崇尚开放、自由，非常欢迎大家的参与</h2>-->

    <!--<div class="am-g">-->
    <!--<div class="am-u-lg-6 am-u-md-4 am-u-sm-12">-->
    <!--<form class="am-form">-->
    <!--<label for="name" class="about-color">你的姓名</label>-->
    <!--<input id="name" type="text">-->
    <!--<br>-->
    <!--<label for="email" class="about-color">你的邮箱</label>-->
    <!--<input id="email" type="email">-->
    <!--<br>-->
    <!--<label for="message" class="about-color">你的留言</label>-->
    <!--<textarea id="message"></textarea>-->
    <!--<br>-->
    <!--<button type="submit" class="am-btn am-btn-primary am-btn-sm"><i class="am-icon-check"></i>-->
    <!--提 交-->
    <!--</button>-->
    <!--</form>-->
    <!--<hr class="am-article-divider am-show-sm-only">-->
    <!--</div>-->

    <!--<div class="am-u-lg-6 am-u-md-8 am-u-sm-12">-->
    <!--<h4 class="about-color">关于我们</h4>-->

    <!--<p>AllMobilize Inc (美通云动科技有限公司)-->
    <!--由前微软美国总部IE浏览器核心研发团队成员及移动互联网行业专家在美国西雅图创立，旨在解决网页在不同移动设备屏幕上的适配问题。基于国际专利技术并结合最前沿的HTML5技术，云适配解决方案可以帮助企业快速将桌面版网站适配到各种移动设备终端的屏幕上，不仅显著地提高了企业网站的用户体验以及销售转化率，而且大幅度地节省了企业开发和维护移动网站的费用。</p>-->
    <!--<h4 class="about-color">团队介绍</h4>-->

    <!--<p>AllMobilize Inc-->
    <!--获得了微软创投孵化器的支持，其领先科技已得到全球多家企业及机构的认可与信赖，客户包括全球500强企业、美国政府、国内政府机关、国内外上市公司、以及互联网标准化组织W3C。</p>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->

    <footer class="footer">
        <p>© 2014 <a href="" target="_blank">NK, Inc.</a> Licensed under <a
                href="" target="_blank">MIT license</a>. by the Nickboy.</p>
    </footer>
    </body>
</template>

<style>
    .get {
        background: #1E5B94;
        color: #fff;
        text-align: center;
        padding: 0px 0;
        margin-top: -108px;
    }

    .detail {
        background: #fff;
    }

    .detail-h2 {
        text-align: center;
        font-size: 150%;
        margin: 40px 0;
    }

    .detail-h3 {
        color: #1f8dd6;
    }

    .detail-p {
        color: #7f8c8d;
    }

    .detail-mb {
        margin-bottom: 30px;
    }

    .hope {
        background: #0bb59b;
        padding: 50px 0;
    }

    .hope-img {
        text-align: center;
    }

    .hope-hr {
        border-color: #149C88;
    }

    .hope-title {
        font-size: 140%;
    }

    .about {
        background: #fff;
        padding: 40px 0;
        color: #7f8c8d;
    }

    .about-color {
        color: #34495e;
    }

    .about-title {
        font-size: 180%;
        padding: 30px 0 50px 0;
        text-align: center;
    }

    .footer p {
        color: #7f8c8d;
        margin: 0;
        padding: 15px 0;
        text-align: center;
        background: #2d3e50;
    }

    #ig1 {
        margin-left: -137px;
    }

    #ig2 {
        margin-left: -150px;
    }

</style>
<script>
    export default {
        name: 'indexP',
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
            },
            doLogin(){
                this.$http.post("http://127.0.0.1:8080/app/user/login", {
                    username: 0,
                    password: 15
                }).then((response) => {
                    response = response.body;
                    console.log(response.data);//需要这样获取到数组
                })
            }

        },
    }
</script>