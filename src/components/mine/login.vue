<template>
<div>
    <app-header title="猫眼电影">
      <span class="backhome" @click="backAction()" slot="left">&lt;</span>
    </app-header>
    <app-content :style="{top: '44px'}" class="box" >
        <div class="sub-header">
            <nav class="nav">
                <li v-for="(item, index) in navList" :key="index" 
                @click="changeAction(index)"
                :class="{active: index == navIndex}">
                    {{item}}
                </li>
            </nav>
        </div>   

      <div v-if="navIndex==0" class="lableBox"> 
        <label class="label">
              <input ref="user" type="text" placeholder="账户名/手机号/Email">
        </label>
        <label class="label" >
              <input ref="psd" type="password" placeholder="请输入你的密码">
        </label>
      </div>

      <div v-if="navIndex==1" class="lableBox2">
        <label class="label">
              <input ref="user" class="fristInp" type="text" placeholder="请输入手机号">
              <a v-text="msg"></a>
        </label>
        <label class="label">
              <input ref="psd" class="password" type="password" placeholder="请输入短信验证码">
        </label>
      </div>  


      <div class="contentbox">
        <div class="btnbox">
          <a @click="loginAction(loginName)" class="btn" v-text="loginName"></a>
        </div>
        <div class="registerbox">
            <a class="register" @click="registerAction(registerName)" v-text="registerName"></a>
            <a class="possword">找回密码</a>
        </div>
        <div class="copybox">
            <span class="copyright">© 猫眼电影 客服电话：<a href="tel:4006705335">400-670-5335</a></span>
        </div>
        
      </div>
    </app-content>
</div>
</template>

<script>
export default {
  data() {
    return {
      navList: ["美团账号登录", "手机验证登录"],
      navIndex: 0,
      user: "",
      psd: "",
      loginName: "登录",
      registerName: "立即注册",
      msg: "获取验证码"
    };
  },
  methods: {
    backAction() {
      this.$router.push("/");
    },
    changeAction(index) {
      this.user = "";
      this.psd = "";
      this.navIndex = index;
    },
    loginAction(loginName) {
      if (loginName == "注册") {
        this.user = this.$refs.user.value;
        this.psd = this.$refs.psd.value;
        if (this.user == "" || this.psd == "") {
          alert("不能为空");
        } else {
          alert("注册成功");
          localStorage.setItem("token", this.user);
          localStorage.setItem("user", this.user);
          localStorage.setItem("psd", this.psd);
          this.loginName = "登录";
          this.registerName = "立即注册";
        }
      }
      if (loginName == "登录") {
        let token = localStorage.getItem("token");
        let user = localStorage.getItem("user");
        let psd = localStorage.getItem("psd");
        if (this.$refs.user.value == user && this.$refs.psd.value == psd) {
          this.$router.push("/mine");
        }
        else if (this.$refs.user.value == "" || this.$refs.psd.value == "") {
          alert("不能为空");
        }
        else if (this.$refs.user.value != user && this.$refs.psd.value != psd) {
          alert("用户名或密码错误");
        }
      }
    },
    registerAction(name) {
      if (name == "立即注册") {
        this.loginName = "注册";
        this.registerName = "立即登录";
      }
      if (name == "立即登录") {
        this.loginName = "登录";
        this.registerName = "立即注册";
        this.$refs.user.value = "";
        this.$refs.psd.value = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.backhome {
  position: absolute;
  top: -2px;
  line-height: 44px;
  font-size: 30px;
  padding: 0 10px;
  color: #fff;
}
.box {
  z-index: 5;
  background: #f8f8f8;
  .sub-header {
    width: 100%;
    height: 44px;
    display: flex;
    .nav {
      width: 100%;
      display: flex;
      color: #666;
      font-size: 14px;
      border-bottom: 2px solid #ccc;
      li {
        flex: 1;
        text-align: center;
        line-height: 44px;
        margin: 0 20px;
        font-weight: 700;
        font-size: 15px;
        &.active {
          color: #f03d37;
          border-bottom: 2px solid #f03d37;
        }
      }
    }
  }
  .lableBox {
    .label {
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
        padding-left: 5px;
        &:focus {
          background: rgb(230, 230, 230);
          border-radius: 5px;
        }
      }
    }
  }

  .lableBox2 {
    .label {
      padding: 10px;
      display: block;
      background: #fff;
      border-bottom: 1px solid #ccc;
    }
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
    .password {
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
        background: #df2d2d;
        display: block;
        border-radius: 2px;
        text-align: center;
        line-height: 44px;
        color: #fff;
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
      font-size: 14px;
      text-align: center;
      a {
        color: #df2d2d;
      }
    }
  }
}
</style>

