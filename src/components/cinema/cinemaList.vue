<template>
    <div>
        <li class="cinema-item" v-for="(item,index) in cinemaList" :key="index">
            <div class="titleBox line-ellipsis">
                <span>{{item.nm}}</span>
                <span>{{item.sellPrice}}<em>元起</em></span>
            </div>
            <div class="addrBox">
                <span class="line-ellipsis">{{item.addr}}</span>
                <span>{{item.distance}}</span>
            </div>
            <div class="tagBox">
                <span v-if="item.tag.allowRefund==1">退</span>
                <span v-if="item.tag.endorse==1">改签</span>
                <span v-if="item.tag.snack==1" class="yellow">小吃</span>
                <span v-if="item.tag.vipTag" class="yellow">折扣卡</span>
                <span v-if="item.tag.hallType">{{item.tag.hallType[0]}}</span>
                <span v-else-if="item.tag.hallType">{{item.tag.hallType[1]}}</span>
           </div>
           <div class="discountBox">
               <span v-if="item.promotion.cardPromotionTag" class="card">
                   <img src="../../assets/card.png" alt="">
               </span>
               <span>
                   {{item.promotion.cardPromotionTag}}
               </span>
           </div>
        </li>
    </div>
</template>

<script>
export default {
  props: {
    cinemaList: Array
  }
};
</script>

<style lang="scss" scoped>
.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.cinema-item {
  padding: 8px 8px 8px 0;
  border-bottom: 1px solid #e6e6e6;
  .titleBox {
    height: 23px;
    line-height: 23px;
    font-size: 16px;
    color: #000;
    span:nth-child(2) {
      margin-left: 8px;
      font-size: 16px;
      color: #f03d37;
      em {
        margin-left: 3px;
        font-size: 12px;
        font-style: normal;
      }
    }
  }
  .addrBox {
    margin-top: 6px;
    font-size: 13px;
    color: #666;
    display: flex;
    span:nth-child(1) {
      flex: 1;
    }
    span:nth-child(2) {
      margin-left: 5px;
    }
  }
  .tagBox {
    height: 17px;
    line-height: 17px;
    margin-top: 4px;
    margin-bottom: 4px;
    overflow: hidden;
    font-size: 0;
    flex-shrink: 0;
    span {
      position: relative;
      display: inline-block;
      padding: 0 3px;
      margin-right: 5px;
      height: 15px;
      line-height: 15px;
      border-radius: 2px;
      font-size: 12px;
      color: #589daf;
      border: 1px solid #589daf;
    }
    .yellow {
      color: #f90;
      border: 1px solid #f90;
    }
  }
  .discountBox {
    color: #999;
    margin-bottom: 4px;
    .card {
      width: 15px;
      height: 14px;
      position: relative;
      top: 3px;
      display: inline-flex;
      img {
        width: 100%;
        display: block;
      }
    }
    span:nth-child(2) {
      font-size: 12px;
    }
  }
}
</style>

