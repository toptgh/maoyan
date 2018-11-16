<template>
<div class="scroll" ref="scroll">
    <div class="wrap" :style="{width: wrapWidth}">
        <slot/>
    </div>
</div>
</template>

<script>
export default {
    name: 'scroll',
    data(){
        return {
            wrapWidth: 0
        }
    },
    mounted(){
        this.scroll = new IScroll(this.$refs.scroll, {
            scrollX: true
        });
        this.scroll.on('beforeScrollStart', ()=>{
            let width = 0;
            this.$slots.default.map(item=>{
                width += item.elm.offsetWidth;
            })
            this.wrapWidth = width + 'px';
            this.$nextTick(()=>{
                this.scroll.refresh();
            })
        })
    }
}
</script>

<style lang="scss" scoped>
.scroll{
    overflow: hidden;
    white-space: nowrap;
}
</style>

