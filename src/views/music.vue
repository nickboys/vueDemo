<template>
 <div>
 <el-container>
   <el-header>
              <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-menu-item index="1">处理中心</el-menu-item>
              <el-submenu index="2">
                <template slot="title">我的工作台</template>
              </el-submenu>
              <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
               <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">会员中心</a></el-menu-item>
            </el-menu>
   </el-header>
   <el-main>
      <el-carousel :interval="4000" type="card" height="500px">
           <el-carousel-item index="1">
                         <h3><img src="/src/assets/imgs/2.jpg"></h3>
          </el-carousel-item>

           <el-carousel-item index="2">
                        <h3><img src="/src/assets/imgs/3.jpg"></h3>
           </el-carousel-item>

            <el-carousel-item index="2">
                         <h3><img src="/src/assets/imgs/4.jpg"></h3>
            </el-carousel-item>

           <el-carousel-item index="2">
                         <h3><img src="/src/assets/imgs/5.jpg"></h3>
           </el-carousel-item>

           <el-carousel-item index="2">
                         <h3><img src="/src/assets/imgs/6.jpg"></h3>
           </el-carousel-item>

           <el-carousel-item index="2">
                          <h3><img src="/src/assets/imgs/1.jpg"></h3>
           </el-carousel-item>

        </el-carousel>
   </el-main>
   <el-footer>
           <el-menu
             :default-active="activeIndex2"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b">
             <h style="color:yellow">全力做好网上治安秩序打击整治专项行动，打造晴朗网络空间</h>
           </el-menu>

   </el-footer>
 </el-container>

  </div>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-header{
       margin-top: -59px;height: 79px;
  }
</style>