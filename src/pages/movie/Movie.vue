<template>
<div class="page" id="movie">

    <!-- 标题 -->
    <app-header title="猫眼电影"></app-header>

    <!-- 子标题 -->
    <div class="sub-header">
        <span class="city-icon">深圳</span>
        <nav class="nav">
            <li v-for="(item, index) in navList" :key="index" 
                @click="changeAction(index)"
                :class="{active: index == navIndex}">
                {{item}}
            </li>
        </nav>
        <span class="search-icon">
            <img src="../../assets/search.png"/>
        </span>
    </div>

    <!-- 内容 -->
    <keep-alive>
        <!-- 正在热映 -->
        <playing v-if="navIndex == 0"/>
        <!-- 即将上映 -->
        <coming v-if="navIndex == 1"/>
    </keep-alive>
</div>
</template>

<script>
import Coming from "../../components/movie/Coming";
import Playing from "../../components/movie/Playing";

export default {
  components: {
    coming: Coming,
    playing: Playing
  },
  data() {
    return {
      navList: ["正在热映", "即将上映"],
      navIndex: 0
    };
  },
  methods: {
    changeAction(index) {
      this.navIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.sub-header {
  width: 100%;
  height: 44px;
  position: absolute;
  top: 44px;
  left: 0;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  span {
    flex: 1;
  }
  .city-icon {
    text-align: center;
    line-height: 44px;
    margin-left: 10px;
    font-size: 14px;
    color: #666;
    &::after {
      content: "";
      display: inline-block;
      width: 0;
      height: 0;
      border: 4px solid transparent;
      border-top: 4px solid #999;
      transform: translate(4px, 1px);
    }
  }
  .nav {
    width: 70%;
    display: flex;
    color: #666;
    font-size: 14px;
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
  .search-icon img {
    width: 24px;
    margin: 10px auto;
  }
}

</style>
