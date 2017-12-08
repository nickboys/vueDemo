<template>
    <el-container>
      <el-header height=115px></el-header>
      <el-container>
        <el-aside  style="width:1000px;background-image:url(/src/assets/imgs/5.jpg;margin-bottom: -146px;"></el-aside>
        <el-main >
                   <el-form :label-position="labelPosition" label-width="80px" >
                        <el-form-item label="用户名">
                          <el-input ></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                          <el-input ></el-input>
                        </el-form-item>
                        <el-form-item label="验证码">
                          <el-input ></el-input>
                        </el-form-item>
                        <el-form-item >
                          <el-button type="primary"> 登陆 </el-button>
                          <el-button type="primary">忘记密码</el-button>
                        </el-form-item>
                      </el-form>
              </el-main>
      </el-container>
    </el-container>

</template>
<style>
     .el-header{
        background-color:black
      }

    .el-main .el-form{
           height: 30em;
           margin-top: 15em;
    }
    .el-aside{
       margin-bottom: -146px;
    }
    .el-main{
       margin-bottom: -146px;
    }

</style>
