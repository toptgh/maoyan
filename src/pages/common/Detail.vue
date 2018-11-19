<template>
<transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
    <app-content class="box" >
        <app-header :title="id" line-ellipsis>
                <span class="backhome" @click="backAction()" slot="left">&lt;</span>
        </app-header>
    </app-content>
</transition>
</template>

<script>
export default {
  data(){
    return{
      id:this.$route.params.id
    }
  },
  methods: {
    backAction() {
      this.$router.back();
    }
  },

};
</script>

<style lang="scss" scoped>
.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
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
}
</style>
