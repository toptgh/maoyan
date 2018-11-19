<template>
<transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
    <app-content class="box" >
        <app-header :title="item.nm" line-ellipsis>
                <span class="backhome" @click="backAction()" slot="left">&lt;</span>
        </app-header>
        
        <div class="headerBox">
          <div class="movie-filter"></div>
          <div class="poster-bg" :style="{backgroundImage:'url('+item.albumImg+')'}"></div>
          <div class="detailBox">
            <div class="poster">
               <!-- <img :src="item.img|replaceWH(110,150)"/> -->
            <img :src="item.albumImg" alt="">
            </div>
            <div class="rightBox">
              <span class="name line-ellipsis">{{item.nm}}</span>
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
        </div>
    </app-content>
</transition>
</template>

<script>
import { getDetailList } from "../../services/movieService.js";
import "../../utils/filter";
export default {
  data() {
    return {
      id: this.$route.params.id,
      item: {}
    };
  },
  methods: {
    backAction() {
      this.$router.back();
    }
  },
  created() {
    getDetailList(this.id).then(({ data }) => {
      this.item = data;
      console.log(this.item);
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
.box {
  position: absolute;
  left: 0;
  top: 0;
  background: #fff;
  z-index: 9;
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
        overflow-x: hidden;
        margin-left: 12px;
        line-height: 1;
        color: #fff;
        flex: 1;
        .name {
          font-size: 20px;
          margin-top: 2px;
          font-weight: 700;
        }
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
  }
}
</style>

