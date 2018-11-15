<template>
<div>
    <li class="playing-item" v-for="(item,index) in List" :key="index">
        <div class="item-img">
            <img :src="item.img"/>
        </div>
        <div class="item-content">
            <h3>{{item.nm}}</h3>
        </div>
    </li>
</div>
</template>

<script>
export default {
  props: {
    playingList: Array
  },
  data() {
    return {
      List: []
    };
  },
  watch: {
    playingList: function(newVal, oldVal) {
      if (newVal) {
        this.List.push(...newVal);
      }
    }
  }
};
</script>

<style <style lang="scss">

.playing-item {
    display: flex;
    padding: 8px;
    .item-img {
      width: 64px;
    }
    .item-content {
      flex: 1;
      margin-left: 10px;
      border-bottom: 1px solid #e6e6e6;
    }
  }
</style>
