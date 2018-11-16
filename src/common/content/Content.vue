<template>
<div class="content" ref="content">
    <div class="wrap">
        <slot/>
    </div>
</div>
</template>

<script>
export default {
  name: "app-content",
  props: {
    canLoadMore: Boolean
  },
  methods: {
    // 刷新滚动视图的方法
    refresh() {
      console.log("刷新");
      this.contentScroll.refresh();
    },
    reset() {
      this.contentScroll.scrollTo(0, 0);
      this.contentScroll.refresh();
    }
  },
  mounted() {
    this.contentScroll = new IScroll(this.$refs.content, {});
    this.contentScroll.on("beforeScrollStart", () => {
      this.contentScroll.refresh();
    });
    this.contentScroll.on("scrollEnd", () => {
      if (
        this.contentScroll.y <= this.contentScroll.maxScrollY &&
        this.canLoadMore
      ) {
        console.log("触发了加载更多");
        this.$emit("loadmore");
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
}
</style>

