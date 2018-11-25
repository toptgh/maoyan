<template>
<app-content :style="{top: '88px', bottom: '0'}" @loadmore="getMoreData" :canLoadMore="canLoadMore">
<ul class="playing">
    <!-- 电影列表 -->
    <movieList :playingList='playingList'>

    </movieList>
</ul>
</app-content>
</template>

<script>
import {getPlayingList,getMorePlayingList} from "../../services/movieService"
import movieList from "./PlayingList.vue"
export default {
    components: {
      'movieList': movieList
    },
    data() {
    return {
        playingList: [],
        playingIDS: [],
        canLoadMore: true
    };
    },
    methods: {
        getMoreData() {
        //请求列表的下一页数据
        // 取得ids
        let ids = [...this.playingIDS];
        //返回切割的10个id
        ids = ids.splice(this.playingList.length, 10);
        // 组装请求参数
        let movieIds = ids.join(",");
        // 发送请求
        this.canLoadMore = false;
        getMorePlayingList(movieIds).then(result => {
            this.playingList = [...this.playingList, ...result];
            //判断是否加载完了所有的数据
            if (this.playingList.length >= this.playingIDS.length) {
            this.canLoadMore = false; //加载完毕
            console.log("加载完毕");
            } else {
            this.canLoadMore = true; //还可以加载更多
            }
        });
        }
  },
  created() {
    //初始化请求正在热映的电影数据
    getPlayingList().then(({ data, ids }) => {

      this.playingList = data;
      this.playingIDS = ids;
    });
  }
};
</script>

<style lang="scss" >
.playing {
  padding: 12px 15px;
  
}
</style>
