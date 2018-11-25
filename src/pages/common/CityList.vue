<template>
<div id="city-list" class="page subpage">
<app-content :style="{top: 0, bottom: 0}" ref="content">
    <div class="box" v-for="item in data" :key="item.key" ref="list">
        <h6>{{item.key.toUpperCase()}}</h6>
        <ul class="ulbox">
            <li v-for="city in item.value" :key="city.id" 
                @click="selectCityAction(city)"
                >
                {{city.nm}}
            </li>
        </ul>
    </div>
</app-content>

<div class="nav-bar">
    <span class="nav-item" v-for="(item, index) in keys" :key="item" @click="btnAction(index)">
        {{item.toUpperCase()}}
    </span>
</div>

</div>
</template>

<script>
import { getCityList } from "../../services/appService";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      keys: [],
      data: []
    };
  },
  methods: {
    ...mapActions(["selectCity"]),
    btnAction(index) {
      this.$refs.content.refresh();
      //计算高度
      let height = 0;
      for (let i = 0; i < this.$refs.list.length; i++) {
        if (i < index) {
          height += this.$refs.list[i].offsetHeight;
        } else {
          break;
        }
      }
      //滚动
      this.$refs.content.scrollTo(height);
    },
    //选择城市
    selectCityAction(city) {
      //存储数据到全局的store
      this.selectCity({
        id: city.id,
        city: city.nm
      });
      //返回上一页
      this.$router.back();
    }
  },
  created() {
    getCityList().then(({ keys, data }) => {
        console.log(keys)
        console.log(data)
      this.keys = keys;
      this.data = data;
    });
  }
};
</script>

<style lang="scss" scoped>
#city-list {
  background: #eee;
}
.nav-bar {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 10;
  text-align: center;
}
.nav-bar .nav-item {
  display: block;
  font-size: 14px;
  padding: 2px 6px;
}
.box {
  font-size: 14px;
  color: #333;
  h6 {
    padding-left: 25px;
    line-height: 30px;
    display: block;
  }
  .ulbox {
    background-color: #f5f5f5;
    padding-right: 30px;
    margin-right: 25px;
    li {
      height: 44px;
      line-height: 44px;
      margin-left: 15px;
      border-bottom: 1px solid #c8c7cc;
    }
  }
}
</style>

