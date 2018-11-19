<template>
   <app-content :style="{top: '88px'}" class="box" >
    
       <label  for="">
            <input class="fristInp" type="text" placeholder="请输入手机号">
            <a>获取验证码</a>
       </label>
       <label class="last" for="">
            <input class="password" type="password" placeholder="请输入短信验证码">
       </label>

       <div class="contentbox">
       <div class="btnbox">
        <a class="btn">登录</a>
       </div>
       <div class="registerbox">
           <a class="register">立即注册</a>
           <a class="possword">找回密码</a>
       </div>
        <div class="copybox">
            <span class="copyright">© 猫眼电影 客服电话：<a href="tel:1008611">400-670-5335</a></span>
        </div>
    </div>
   </app-content>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
label {
  padding: 10px;
  display: block;
  background: #fff;
  border-bottom: 1px solid #ccc;
  .fristInp {
    width: 70%;
  }
  a {
    display: inline-block;
    width: 25%;
    margin-left: 10px;
    line-height: 30px;
    background: rgb(230, 230, 230);
    font-size: 13px;
    color: #999;
    text-align: center;
    border-radius: 5px;
  }
  .password{
      background: rgb(230, 230, 230);
      border-radius: 5px;
  }
  input {
    width: 100%;
    display: inline-block;
    line-height: 30px;
    border: 0;
    outline: none;
    padding-left: 5px;
    &:focus {
      background: rgb(230, 230, 230);
      border-radius: 5px;
    }
  }
}

.contentbox {
  padding: 20px 10px;
  .btnbox {
    .btn {
      background: rgb(230, 230, 230);
      display: block;
      border-radius: 2px;
      text-align: center;
      line-height: 44px;
      color: #999;
    }
  }

  .registerbox {
    margin: 10px 0 10px 0;
    font-size: 14px;
    height: 20px;
    .register {
      float: left;
      color: #df2d2d;
    }
    .possword {
      float: right;
      color: #df2d2d;
    }
  }

  .copybox {
    text-align: center;
    font-size: 14px;
    a {
      color: #df2d2d;
    }
  }
}
</style>