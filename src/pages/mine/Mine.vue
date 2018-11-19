<template>

    <div class="page" id="mine">

        <app-header title="猫眼电影">
            <span class="backhome" @click="backAction()" slot="left">&lt;</span>
        </app-header>

        <!-- 子标题 -->
        <div class="sub-header">
            <nav class="nav">
                <li v-for="(item, index) in navList" :key="index" 
                @click="changeAction(index)"
                :class="{active: index == navIndex}">
                    {{item}}
                </li>
            </nav>
        </div>

        <div class="bgcolor"></div>
        <!-- 账号登录 -->
        <login v-if="navIndex == 0"/>
        <!-- 手机号登录 -->
        <phoneLogin v-if="navIndex == 1"/>

    </div>

</template>


<script>
import login from "../../components/mine/login";
import phoneLogin from "../../components/mine/phoneLogin";
export default {
  components: {
    login,
    phoneLogin
  },
  data() {
    return {
      navList: ["美团账号登录", "手机验证登录"],
      navIndex: 0
    };
  },
  methods: {
    backAction() {
      this.$router.back();
    },
    changeAction(index) {
      this.navIndex = index;
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
.sub-header {
  width: 100%;
  height: 44px;
  position: absolute;
  top: 44px;
  left: 0;
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

.box{
    z-index: 5;
    background-color: #f8f8f8;
}

</style>

