<template>
    <app-content :style="{top: '135px', bottom: '49px'} " @loadmore="getMoreData" :canLoadMore="canLoadMore">
        <ul class="cinema">
            <!-- 影院列表 -->
            <cinemaList :cinemaList='cinemaList'>

            </cinemaList>
        </ul>
    </app-content>
</template>


<script>
import { getCinemaList, getMoreCinemaList } from "../../services/movieService";
import cinemaList from "./cinemaList.vue";
export default {
  components: {
    cinemaList: cinemaList
  },
  data() {
    return {
      cinemaList: [],
      cinemaIDS: [],
      canLoadMore: true
    };
  },
  methods: {
    getMoreData() {
      //获取下页数据
      this.cinemaIDS += 10;
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
    getCinemaList().then(({ data, ids }) => {
      console.log(data)
      this.cinemaList = data;
      this.cinemaIDS = ids;
    });
  }
};
</script>

<style lang="scss" scoped>
.cinema {
  padding: 12px 15px;
}
</style>

