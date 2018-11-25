<template>
<div>
    <div class="page" id="cinema">
        <app-header title="影院">
            <span class="backhome" @click="backAction()" >&lt;</span>
        </app-header>

        <div class="sub-header">
            <span class="city-icon" @click="gocitylist()" >{{city}}</span>
            <label for="">
                <input class="search-icon" @click='searchAction()' placeholder="搜影院">
            </label>
        </div>

        <div class="listbox">
            <span class="city-icon">全城</span>
            <span class="city-icon list">品牌</span>
            <span class="city-icon list">特色</span>
        </div>
    </div>

    <keep-alive>
        <cinema/>
    </keep-alive>

    <router-view></router-view>
</div>
</template>

<script>
import cinema from "../../components/cinema/cinema";
import { mapState } from "vuex";
export default {
  components: {
    cinema: cinema
  },
  computed: {
    ...mapState(["city"])
  },
  methods: {
    searchAction() {
      this.$router.push({ name: "cinemaSearch" });
    },
    gocitylist() {
      this.$router.push("/movie/city-list");
    }
  }
};
</script>

<style lang="scss" scoped>
.city-icon {
  text-align: center;
  line-height: 44px;
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
.list {
  &:before {
    content: "";
    display: inline-block;
    height: 20px;
    border-left: 1px solid #e8e8e8;
    transform: translate(-44px, 6px);
  }
}
.sub-header {
  width: 100%;
  height: 44px;
  position: absolute;
  top: 44px;
  left: 0;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  background: #f5f5f5;
  span {
    margin-left: 10px;
  }
  label {
    flex: 1;
    margin-left: 30px;
    width: 100%;
    height: 28px;
    padding-right: 15px;
    line-height: 44px;
    input {
      width: 100%;
      outline: none;
      border: 0;
      border-radius: 6px;
      line-height: 28px;
      text-align: center;
      color: #ccc;
    }
  }
}
.listbox {
  width: 100%;
  height: 44px;
  position: absolute;
  top: 88px;
  left: 0;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  background: #fff;
  span {
    flex: 1;
  }
}
</style>

