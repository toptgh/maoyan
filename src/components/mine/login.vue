<template>
   <app-content :style="{top: '88px'}" class="box" >
    
       <label for="">
            <input type="text" placeholder="账户名/手机号/Email">
       </label>
       <label class="last" for="">
            <input type="password" placeholder="请输入你的密码">
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
            <span class="copyright">© 猫眼电影 客服电话：<a href="tel:4006705335">400-670-5335</a></span>
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
  input {
    width: 100%;
    display: block;
    line-height: 30px;
    border: 0;
    outline: none;
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
      background: #df2d2d;
      display: block;
      border-radius: 2px;
      text-align: center;
      line-height: 44px;
      color: #fff;
    }
  }

  .registerbox {
    display: block;
    margin-top: 10px;
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
    font-size: 14px;
    padding:10px 50px;
    a{
        color: #df2d2d;
    }
  }
}
</style>

