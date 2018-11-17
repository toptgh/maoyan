<template>
<div class="scroll" ref="scroll">
    <div class="wrap" :style="{width: wrapWidth}">
        <slot/>
    </div>
</div>
</template>

<script>
export default {
  name: "scroll",
  props: {
    canLoadMoreExp: Boolean
  },
  data() {
    return {
      wrapWidth: 0
    };
  },
  mounted() {
    this.scroll = new IScroll(this.$refs.scroll, {
      scrollX: true
    });
    this.scroll.on("beforeScrollStart", () => {
      let width = 0;
      this.$slots.default.map(item => {
        width += item.elm.offsetWidth;
      });
      this.wrapWidth = width + "px";
      this.$nextTick(() => {
        this.scroll.refresh();
      });
    });
    this.scroll.on("scrollEnd", () => {
      if (
        this.scroll.x <= this.scroll.maxScrollX &&
        this.canLoadMoreExp
      ) {
        console.log("触发了加载更多");
        this.$emit("loadmoreExp");
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.scroll {
  overflow: hidden;
  white-space: nowrap;
}
</style>

