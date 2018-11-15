<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <tabs v-model="selectIndex">
      <tab-item v-for="(tabItem, index) in tabList" :key="index" 
        :name="tabItem.name" :icon="tabItem.iconfont">
      </tab-item> 
    </tabs>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectIndex: 0,
      tabList: [
        { name: "电影", path: "/movie", iconfont: "iconfont icon-movie" },
        { name: "影院", path: "/cinema", iconfont: "iconfont icon-yingyuanA" },
        { name: "我的", path: "/mine", iconfont: "iconfont icon-home" }
      ]
    };
  },
  watch: {
    selectIndex: {
      handler(newVal) {
        this.$router.push(this.tabList[newVal].path);
      }
    }
  }
};
</script>


<style lang="scss">
</style>
