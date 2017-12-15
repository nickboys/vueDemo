<template>
    <body>
    <header class="am-topbar am-topbar-fixed-top">
        <div class="am-container">
            <h1 class="am-topbar-brand">
                <a href="#">我的音乐我做主</a>
            </h1>

            <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-secondary am-show-sm-only"
                    data-am-collapse="{target: '#collapse-head'}"><span class="am-sr-only">导航切换</span> <span
                    class="am-icon-bars"></span></button>

            <div class="am-collapse am-topbar-collapse" id="collapse-head">
                <ul class="am-nav am-nav-pills am-topbar-nav">
                    <li><a href="#/music">首页</a></li>
                    <li class="am-active"><a href="#">榜单</a></li>
                    <li><a href="#">歌手</a></li>
                    <li><a href="#">会员</a></li>
                </ul>

                <div class="am-topbar-right">
                    <button class="am-btn am-btn-secondary am-topbar-btn am-btn-sm"><span class="am-icon-pencil"></span>
                        注册
                    </button>
                </div>

                <div class="am-topbar-right">
                    <button class="am-btn am-btn-primary am-topbar-btn am-btn-sm"><span class="am-icon-user"></span> 登录
                    </button>
                </div>
            </div>
        </div>
    </header>

    <div class="main">
        <div class="left">
            <ul>
                <li data-name="Billboard榜">
                    <a href="javascript:;" data-name="Billboard榜"><img
                            src="/src/assets/imgs/1481781261118_.png"></a>
                    <a class="name clicked" href="" data-name="Billboard榜">Billboard榜</a>
                </li>

                <li data-name="iTunes音乐榜">
                    <a href="javascript:;" data-name="iTunes音乐榜"><img
                            src="/src/assets/imgs/1481781343391_.png"></a>
                    <a class="name" href="" data-name="iTunes音乐榜">iTunes音乐榜</a>
                </li>

                <li data-name="英国UK榜">
                    <a href="javascript:;" data-name="英国UK榜"><img
                            src="/src/assets/imgs//1481781590327_.png"></a>
                    <a class="name" href="" data-name="英国UK榜">英国UK榜</a>
                </li>

                <li data-name="台湾Hito榜">
                    <a href="javascript:;" data-name="台湾Hito榜"><img
                            src="/src/assets/imgs/1481781489903_.png"></a>
                    <a class="name" href="" data-name="台湾Hito榜">台湾Hito榜</a>
                </li>

                <li data-name="韩国M-net榜">
                    <a href="" data-name="韩国M-net榜"><img
                            src="/src/assets/imgs/1481781405506_.png"></a>
                    <a class="name" href="" data-name="韩国M-net榜">韩国M-net榜</a>
                </li>

                <li data-name="日本公信榜">
                    <a href="javascript:;" data-name="日本公信榜"><img
                            src="/src/assets/imgs/1481781468616_.png"></a>
                    <a class="name" href="" data-name="日本公信榜">日本公信榜</a>
                </li>

                <li data-name="香港电台榜">
                    <a href="javascript:;" data-name="香港电台榜"><img
                            src="/src/assets/imgs/1512641164299_.jpg"></a>
                    <a class="name" href="" data-name="香港电台榜">香港电台榜</a>
                </li>

            </ul>
        </div>
        <div class="right">
            <div class="top">
                <label><img src="/src/assets/imgs/bang_billboard.png"></label>
            </div>
            <div class="musicList">
                <table class="am-table am-table-bordered am-table-striped am-table-hover .am-table-compact" style="width: 60em">
                    <thead style="background: cornflowerblue">
                    <tr>
                        <th></th>
                        <th>歌曲</th>
                        <th>歌手</th>
                        <th>热度</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr >
                        <td>1</td>
                        <td><a href="http://www.kuwo.cn/yinyue/28661685?catalog=yueku2016">Rockstar</a></td>
                        <td><a href="http://www.kuwo.cn/artist/content?name=21%20Savage&Post%20Malone">21 Savage</a></td>
                        <td>★</td>
                        <td>
                            <button class="am-btn-primary ">播放</button>
                        </td>
                    </tr>
                    <tr >
                        <td>2</td>
                        <td><a href="http://www.kuwo.cn/yinyue/28661685?catalog=yueku2016">Rockstar</a></td>
                        <td><a href="http://www.kuwo.cn/artist/content?name=21%20Savage&Post%20Malone">21 Savage</a></td>
                        <td>★</td>
                        <td>
                            <button class="am-btn-primary ">播放</button>
                        </td>
                    </tr>
                    <tr >
                        <td>3</td>
                        <td><a href="http://www.kuwo.cn/yinyue/28661685?catalog=yueku2016">Rockstar</a></td>
                        <td><a href="http://www.kuwo.cn/artist/content?name=21%20Savage&Post%20Malone">21 Savage</a></td>
                        <td>★</td>
                        <td>
                            <button class="am-btn-primary ">播放</button>
                        </td>
                    </tr>
                    <tr >
                        <td>4</td>
                        <td><a href="http://www.kuwo.cn/yinyue/28661685?catalog=yueku2016">Rockstar</a></td>
                        <td><a href="http://www.kuwo.cn/artist/content?name=21%20Savage&Post%20Malone">21 Savage</a></td>
                        <td>★</td>
                        <td>
                            <button class="am-btn-primary ">播放</button>
                        </td>
                    </tr>
                    <tr >
                        <td>5</td>
                        <td><a href="http://www.kuwo.cn/yinyue/28661685?catalog=yueku2016">Rockstar</a></td>
                        <td><a href="http://www.kuwo.cn/artist/content?name=21%20Savage&Post%20Malone">21 Savage</a></td>
                        <td>★</td>
                        <td>
                            <button class="am-btn-primary ">播放</button>
                        </td>
                    </tr>
                    <tr >
                        <td>6</td>
                        <td><a href="http://www.kuwo.cn/yinyue/28661685?catalog=yueku2016">Rockstar</a></td>
                        <td><a href="http://www.kuwo.cn/artist/content?name=21%20Savage&Post%20Malone">21 Savage</a></td>
                        <td>★</td>
                        <td>
                            <button class="am-btn-primary ">播放</button>
                        </td>
                    </tr>
                    <tr >
                        <td>7</td>
                        <td><a href="http://www.kuwo.cn/yinyue/28661685?catalog=yueku2016">Rockstar</a></td>
                        <td><a href="http://www.kuwo.cn/artist/content?name=21%20Savage&Post%20Malone">21 Savage</a></td>
                        <td>★</td>
                        <td>
                            <button class="am-btn-primary ">播放</button>
                        </td>
                    </tr>
                    <tr >
                        <td>8</td>
                        <td><a href="http://www.kuwo.cn/yinyue/28661685?catalog=yueku2016">Rockstar</a></td>
                        <td><a href="http://www.kuwo.cn/artist/content?name=21%20Savage&Post%20Malone">21 Savage</a></td>
                        <td>★</td>
                        <td>
                            <button class="am-btn-primary ">播放</button>
                        </td>
                    </tr>
                    <tr >
                        <td>9</td>
                        <td><a href="http://www.kuwo.cn/yinyue/28661685?catalog=yueku2016">Rockstar</a></td>
                        <td><a href="http://www.kuwo.cn/artist/content?name=21%20Savage&Post%20Malone">21 Savage</a></td>
                        <td>★</td>
                        <td>
                            <button class="am-btn-primary ">播放</button>
                        </td>
                    </tr>
                    <tr class="">
                        <td>10</td>
                        <td><a href="">100degrees</a></td>
                        <td><a href="">THE RAMPAGE from EXILE TRIBE </a></td>
                        <td>★</td>
                        <td>
                            <button class="am-btn-primary ">播放</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>


    <footer class="footer">
        <p>© 2014 <a href="" target="_blank">AllMobilize, Inc.</a> Licensed under <a
                href="" target="_blank">MIT license</a>. by the Nk.</p>
    </footer>
    </body>
</template>

<style>
    .main {
        position: relative;
        height: 146em;
    }

    .left {
        float: left;
        width: 30em;
        border: 1px;
        solid: #F00;
        margin-top: -47px;
    }

    .right {
        float: left;
        width: 50%;
        border: 1px;
        solid: #F00;
        margin-top: -47px;
    }

    table thead tr td th {
        border: 0px solid #000;
    }

</style>