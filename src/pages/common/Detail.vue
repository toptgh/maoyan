<template>
    <div class="box" >
        <app-header :title="item.nm" line-ellipsis>
                <span class="backhome" @click="backAction()" slot="left">&lt;</span>
        </app-header>
        
        <div class="headerBox">
          <div class="movie-filter"></div>
          <div class="poster-bg" :style="{backgroundImage:'url('+img+')'}"></div>
          <div class="detailBox">
            <div class="poster">
               <img :src="img"/>
            </div>
            <div class="rightBox">
              <div class="name line-ellipsis">{{item.nm}}</div>
              <div class="en-name line-ellipsis">{{item.enm}}</div>
              <div class="score line-ellipsis">{{item.sc}}
                <span class="snum">({{item.snum|replaceNum()}}人评)</span>
              </div>
              <div class="type line-ellipsis">
                <span class="cat">{{item.cat}}</span>
                <div class="type-group">    
                  <span class="version" v-if='item.version==""'></span>
                  <span class="version v3d imax" v-else-if='item.version=="v3d imax"'></span>
                  <span class="version v2d imax" v-else-if='item.version=="v2d imax"'></span>
                  <span class="version v3d" v-else-if='item.version=="v3d"'></span>
                </div>
              </div>
              <div class="src line-ellipsis">{{item.src}}/{{item.dur}}分钟</div>
              <div class="pubDesc line-ellipsis">{{item.pubDesc}}</div>

            </div>
          </div>
          <div class="arrow-g">
            <img src="../../assets/right.png" alt="">
          </div>
          <div class="showDays">
            <ul class="timeline">
              <li v-for="(day,index) in showDays" @click="liColor(index)" :key="index" class="showDay" :class="{chosen:select==index}" >  
                {{day.date}}
              </li>
            </ul>
          </div>

        <div class="listbox">
            <span class="city-icon">全城</span>
            <span class="city-icon list">品牌</span>
            <span class="city-icon list">特色</span>
        </div>
        </div>

        <app-content class="listbox" :style="{top: '320px'} " @loadmore="getMoreData" :canLoadMore="canLoadMore">
        <ul class="cinema">
            <!-- 影院列表 -->
            <cinemaList :cinemaList='cinemaList'>
              
            </cinemaList>
        </ul>
    </app-content>

    </div>
</template>

<script>
import {
  getDetailList,
  getDateList,
  getMoreCinemaList
} from "../../services/movieService.js";
import "../../utils/filter";
import cinemaList from "../../components/cinema/cinemaList";
import { mapState } from "vuex";
export default {
  components: {
    cinemaList: cinemaList
  },
  data() {
    return {
      id: this.$route.params.id,
      item: {},
      img: "",
      select: 0,
      move: -1,
      cinemaList: [],
      showDays: [],
      canLoadMore: true,
      cinemaIDS: 0
    };
  },
  computed: {
    ...mapState(["cityID"])
  },
  watch: {
    cityID() {
      this.initDate();
    }
  },
  methods: {
    initDate() {
      getDateList(this.id,this.cityID).then(({ cinemas, showDays }) => {
        console.log(cinemas);
        console.log(showDays);
        this.cinemaList = cinemas;
        this.showDays = showDays;
      });
    },
    backAction() {
      this.$router.back();
    },
    liColor(index) {
      this.select = index;
    },
    getMoreData() {
      //获取下页数据
      this.cinemaIDS += 20;
      this.canLoadMore = false;
      getMoreCinemaList(this.cinemaIDS).then(result => {
        this.cinemaList = [...this.cinemaList, ...result];
        if (this.cinemaList.length >= this.cinemaIDS.length) {
          //加载完了
          this.canLoadMore = false;
        } else {
          //还可加载更多
          this.canLoadMore = true;
        }
      });
    }
  },
  created() {
    getDetailList(this.id).then(({ data }) => {
      this.item = data;
      // console.log(this.item);
      this.img = this.item.img.replace(/w.h/, "110.150");
    });

    this.initDate();
  }
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
  background: #fff;
  z-index: 9;
  width: 100%;
  height: 100%;
  .backhome {
    position: absolute;
    top: -2px;
    line-height: 44px;
    font-size: 30px;
    padding: 0 10px;
    color: #fff;
  }
  .headerBox {
    position: absolute;
    top: 44px;
    left: 0;
    width: 100%;
    height: 188px;
    .movie-filter {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-color: rgb(31, 13, 13);
    }
    .poster-bg {
      width: 100%;
      height: 100%;
      z-index: -1;
      overflow: hidden;
      position: absolute;
      filter: blur(8px);
      background-size: cover;
      background-repeat: no-repeat;
      opacity: 0.8;
    }
    .detailBox {
      height: 150px;
      padding: 19px 30px 19px 15px;
      display: flex;
      .poster {
        img {
          width: 110px;
          height: 150px;
          box-sizing: border-box;
        }
      }
      .rightBox {
        overflow: hidden;
        margin-left: 12px;
        line-height: 1;
        color: #fff;
        flex: 1;
        .en-name,
        .snum,
        .type,
        .src,
        .pubDesc {
          margin-top: 10px;
          font-size: 12px;
          color: #fff;
          opacity: 0.8;
        }
        .name {
          font-size: 20px;
          margin-top: 2px;
          font-weight: 700;
          overflow: hidden;
        }
        .score {
          font-size: 18px;
          font-weight: 700;
          color: #fc0;
          margin-top: 11px;
        }
        .cat {
          font-size: 12px;
        }
        .type-group {
          display: inline-block;
          width: 42px;
          opacity: 0.85;
          .version {
            width: 17px;
            background-size: contain;
            background-repeat: no-repeat;
            height: 10px;
            display: inline-block;
            -webkit-box-flex: 0;
            flex: 0 0 auto;
            margin-left: 5px;
          }
          .version.v3d.imax {
            width: 43px;
            background: url(../../assets/logo-3dmax.png) no-repeat center;
            background-size: 100%;
          }
          .version.v2d.imax {
            width: 43px;
            background: url(../../assets/2dmax.png) no-repeat center;
            background-size: 100%;
          }
          .version.v3d {
            background: url(../../assets/3d.png) no-repeat center;
            background-size: 100%;
          }
        }
      }
    }
    .arrow-g {
      position: absolute;
      width: 10px;
      right: 15px;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }
    .showDays {
      width: 100%;
      background-color: #fff;
      overflow-x: scroll;
      height: 45px;
      color: #666;
      .timeline {
        white-space: nowrap;
        overflow-x: scroll;
        height: 45px;
      }
      .showDay {
        position: relative;
        display: inline-block;
        width: 115px;
        line-height: 43px;
        margin-left: 4.5px;
        font-size: 14px;
        text-align: center;
        list-style: none;
        &.chosen {
          border-bottom: 2px solid #f03d37;
          color: #f03d37;
        }
      }
    }
    .listbox {
      width: 100%;
      height: 44px;
      border-bottom: 1px solid #e6e6e6;
      display: flex;
      background: #fff;
      span {
        flex: 1;
      }
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
    }
  }
  .cinema {
    padding: 12px 15px;
  }
}
</style>

