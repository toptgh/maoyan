<template>
<app-content :style="{top: '88px', bottom: '49px'}"  >

    <div class="expected">
        <p class="title">近期最受期待</p>
        <scroll class="expected-list">
            <li class="expected-item" v-for='item in expectedList' :key='item.id'>
                <div class="poster default-img-bg">
                    <img :src="item.img | replaceWH(170,230)">
                    <span class="wish-bg"></span>
                    <span class="wish">
                        <span class="wish-num">{{item.wish}}</span>人想看
                    </span>
                    <div class="toggle-wish">
                        <span></span>
                    </div>
                </div>
                <h5 class="name line-ellipsis">{{item.nm}}</h5>
                <p class="date">{{item.comingTitle|replaceTime(2)}}</p>
            </li>
        </scroll>
    </div>

    <div class="bgcolor"></div>
    
    <div class="coming">
        <comingList :comingMap='comingMap'></comingList>
    </div>

</app-content>
</template>

<script>
import {
  getComingList,
  getMostExpectedDate,
  getMoreComingList
} from "../../services/movieService";
import comingList from "./ComingList";
export default {
  components: {
    comingList: comingList
  },
  data() {
    return {
      comingMap: {},
      expectedList: [],
    };
  },
  methods: {
  
  },
  created() {
    // 请求即将上映的数据
    getComingList().then(result => {
      console.log(result)
      this.comingMap = result;
    });


    // 请求最受欢迎的电影数据
    getMostExpectedDate().then(result => {
      this.expectedList = result;
    });
  }
};
</script>

<style lang="scss" scoped>
.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.bgcolor {
  width: 100%;
  height: 10px;
  background-color: #f5f5f5;
}
.expected {
  padding: 12px 15px 12px 15px;
  background-color: #fff;
  margin-bottom: 10px;
  .title {
    margin: 0 0 12px;
    font-size: 14px;
    color: #333;
  }
  .expected-item {
    display: inline-block;
    width: 85px;
    overflow: hidden;
    margin-right: 10px;
    .poster {
      width: 85px;
      height: 115px;
      position: relative;
      margin-bottom: 6px;
      img {
        width: 85px;
        height: 115px;
        margin-bottom: 6px;
      }
      .wish-bg {
        display: inline-block;
        width: 100%;
        height: 35px;
        position: absolute;
        bottom: 0;
        background-image: linear-gradient(-180deg, rgba(77, 77, 77, 0), #000);
      }
      .wish {
        position: absolute;
        left: 4px;
        bottom: 2px;
        color: #faaf00;
        font-size: 11px;
        font-weight: 600;
      }
      .toggle-wish {
        width: 28px;
        line-height: 28px;
        background: rgba(61, 63, 71, 0.6);
        text-align: center;
        border-bottom-right-radius: 10px;
        position: absolute;
        top: 0;
        left: 0;
        span {
          display: inline-block;
          width: 10px;
          height: 10px;
          background: url(../../assets/love.png);
          background-size: 100%;
          background-repeat: no-repeat;
        }
      }
    }
    .name {
      margin: 0 0 3px;
      font-size: 13px;
      color: #222;
    }
    .date {
      margin: 0;
      font-size: 12px;
      color: #999;
    }
  }
}
</style>

