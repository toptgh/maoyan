<template>
<div>
    <div v-for="(list, key) in comingMap" :key="key">
        <p class="time">{{key}}</p>
        <li class="item" v-for="item in list" :key="item.id">
            <div class="item_box">

                <div class="item-img">
                    <img :src="item.img|replaceWH(64,90)"/>
                </div>

                <div class="item_right">
                    <div class="content">
                        <div class="title_box">
                            <div class="title line-ellipsis ">{{item.nm}}</div>
                            <span class="version" v-if='item.version==""'></span>
                            <span class="version v3d imax" v-else-if='item.version=="v3d imax"'></span>
                            <span class="version v2d imax" v-else-if='item.version=="v2d imax"'></span>
                            <span class="version v3d" v-else-if='item.version=="v3d"'></span>
                        </div>
                        <div class="detail_box">
                            <div class="wantsee line-ellipsis">
                                <span class="person">{{item.wish}}</span>
                                <span class="p-suffix">人想看</span>
                            </div>
                            <div class="actor line-ellipsis">主演：{{item.star}}</div>
                            <div class="actor line-ellipsis">{{item.rt}}上映</div>
                        </div>
                    </div>
                    <div class="btn_box">
                        <span class="btn" v-if="item.showst==4">预售</span>
                        <span class="btn yellow" v-else-if="item.showst==1">想看</span>
                    </div>
                </div>
            </div>
        </li>
    </div>
</div>
</template>
<script>
import "../../utils/filter";
export default {
  props: {
    comingMap: Object
  },
  data() {
    return {};
  }
};
</script>

<style <style lang="scss">
.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.time {
  padding: 12px 15px 0;
  margin: 0;
  font-size: 14px;
  color: #333;
}
.item {
  padding-left: 15px;
  background-color: #fff;
  .item_box {
    position: relative;
    width: 100%;
    .item-img {
      margin-top: 12px;
      float: left;
      height: 90px;
      overflow: hidden;
    }
    .item_right {
      padding: 12px 14px 12px 0;
      margin-left: 74px;
      height: 90px;
      max-height: 90px;
      .content {
        padding-right: 5px;
        margin-right: 65px;
        overflow: hidden;
        .title_box {
          max-height: 24px;
          margin-bottom: 7px;
          line-height: 24px;
          overflow: hidden;
          display: flex;
          .title {
            font-size: 17px;
            color: #333;
            font-weight: 700;
            padding-right: 5px;
            flex-shrink: 1;
          }
          .version {
            width: 17px;
            background-size: contain;
            background-repeat: no-repeat;
            height: 14px;
            display: inline-block;
            margin-top: 5px;
            -webkit-box-flex: 0;
            flex: 0 0 auto;
            margin-right: 3px;
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
        .detail_box {
          box-sizing: border-box;
          line-height: 1;
          overflow: hidden;
          .person {
            color: #faaf00;
            font-size: 15px;
            font-weight: 600;
          }
          .p-suffix {
            font-size: 13px;
            margin-left: 2px;
            display: inline-block;
            color: #666;
          }
          .actor {
            margin-top: 6px;
            line-height: 15px;
            font-size: 13px;
            color: #666;
          }
        }
      }
      .btn{
        height: 27px;
        width: 47px;
        background: #3c9fe6;
        text-align: center;
        line-height: 27px;
        color: #fff;
        font-size: 12px;
        border-radius: 5px;
        position: absolute;
        right:20px;
        bottom:50%;
      }
      .yellow {
        background: #faaf00;
        border-radius: 5px;
      }
    }
  }
}
</style>
