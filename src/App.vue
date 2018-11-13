<template>
  <div id="app">
    
    <router-view/>

    <tabs v-model="selectIndex">
      <tab-item v-for="(tabItem, index) in tabList" :key="index" 
        :name="tabItem.name">
      </tab-item> 
    </tabs>
    
  </div>
</template>

<script>
export default {
  data(){
    return {
      selectIndex: 0,
      tabList: [
        {name: '电影', path: '/movie'},
        {name: '影院', path: '/cinema'},
        {name: '我的', path: '/mine'}
      ]
    }
  },
  watch: {
    selectIndex: {
      handler(newVal){
        this.$router.push(this.tabList[newVal].path);
      }
    }
  }
}
</script>


<style lang="scss">





</style>
