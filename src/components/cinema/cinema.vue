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
import { mapState } from "vuex";
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
      getCinemaList(this.cityID).then(({ data, ids }) => {
        console.log(data);
        this.cinemaList = data;
        this.cinemaIDS = ids;
      });
    },
    getMoreData() {
      //获取下页数据
      this.cinemaIDS += 10;
      this.canLoadMore = false;
      getMoreCinemaList(this.cinemaIDS,this.cityID).then(result => {
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
    this.initDate();
  }
};
</script>

<style lang="scss" scoped>
.cinema {
  padding: 12px 15px;
}
</style>

