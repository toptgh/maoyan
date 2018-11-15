<template>
<div>
    <li class="playing-item" v-for="(item,index) in playingList" :key="index">
        <div class="item-img">
            <img :src="item.img"/>
        </div>
        <div class="item-content">

            <div class="title_box">
              <span class="title">{{item.nm}}</span>
              <span class="version" v-if='item.version==""'></span>
              <span class="version v3d imax" v-else-if='item.version=="v3d imax"'></span>
              <span class="version v2d imax" v-else-if='item.version=="v2d imax"'></span>
              <span class="version v3d" v-else-if='item.version=="v3d"'></span>
            </div>

            <div class="suffix_box" v-if="item.globalReleased==1"> 
                <span class="suffix">观众评</span>
                <span class="grade" v-if='item.sc%1==0'>{{item.sc}}.0</span>
                <span class="grade" v-else-if='item.sc%1!=0'>{{item.sc}}</span>
            </div>

             <div class="wish_box" v-else-if="item.globalReleased==0"> 
                <span class="wish">{{item.wish}}</span>
                <span class="suffix">人想看</span>
            </div>

            <div class="actor">主演：{{item.star}}</div>
        
            <div class="showInfo">{{item.showInfo}}</div>
        </div>
          <div class="btn_box">
            <div class="btn" v-if="item.globalReleased==1">购买</div>
            <div class="btn blue"  v-else-if="item.globalReleased==0">预售</div>
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
    return {};
  }
};
</script>

<style <style lang="scss">
.playing-item {
  display: flex;
  padding: 8px;
  align-items: center;
  .item-img {
    width: 64px;
  }
  .item-content {
    flex: 1;
    margin-left: 10px;
    padding:0px 10px 0px 0;
    box-sizing: border-box;
    overflow: hidden;
    border-bottom: 1px solid #e6e6e6;
    .title_box {
      max-height: 24px;
      margin-bottom: 7px;
      line-height: 20px;
      overflow: hidden;
      display: flex;
      .title {
        font-size: 18px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-right: 5px;
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
    .suffix_box,
    .wish_box {
      font-size: 12px;
      color: #222;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      .grade {
        font-weight: 700;
        color: #faaf00;
        font-size: 14px;
        margin-left: 5px;
      }
      .wish {
        font-weight: 700;
        color: #faaf00;
        font-size: 14px;
        margin-right: 5px;
      }
    }
    .actor {
      font-size: 12px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      color: #222;
      margin-top: 5px;
    }
    .showInfo {
      margin-top: 5px;
      margin-bottom: 5px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 12px;
      color: #222;
    }
  }
  .btn_box {
    height: 27px;
    width: 47px;
    background: #f03d37;
    text-align:center;
    line-height: 27px;
    color: #fff;
    font-size: 12px;
    border-radius: 5px;
  }
  .blue{
    background: #3c9fe6;
  }
}
</style>
