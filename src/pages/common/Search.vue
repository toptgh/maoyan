<template>
<transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
    <app-content class="box" >
        <app-header title="猫眼电影">
                <span class="backhome" @click="backAction()" slot="left">&lt;</span>
        </app-header>

        <div class="contentbox">
            <div class="inpbox">
                <input type="text" placeholder="搜电影、搜影院">
                <a class="btn" @click="backAction()">取消</a>
            </div>
            <p class="hot">热门搜索</p>
        </div>
    </app-content>
</transition>
</template>

<script>
export default {
  props: {
    type: Array
  },
  methods: {
    backAction() {
      this.$router.back();
    }
  },
  created() {
    console.log(this.type);
  }
};
</script>

<style lang="scss" scoped>
.box {
  position: absolute;
  left: 0;
  top: 0;
  background: #f5f5f5;
  z-index: 9;
  .backhome {
    position: absolute;
    top: -2px;
    line-height: 44px;
    font-size: 30px;
    padding: 0 10px;
    color: #fff;
  }
  .contentbox {
    position: absolute;
    top: 44px;
    left: 0;
    width: 100%;
    .inpbox {
        padding: 10px 20px;
        width: 100%;
        height: 100%;
      input {
        padding-left: 10px;
        outline: none;
        border-radius: 5px;
        line-height: 30px;
        width: 75%;
        display: inline-block;
        border: 0;
        margin-right: 10px;
      }
      .btn {
        color: #df2d2d;
      }
    }

    .hot {
      width: 100%;
      height: 50px;
      background: #fff;
      line-height: 50px;
      padding-left: 20px;
    }
  }
}
</style>
