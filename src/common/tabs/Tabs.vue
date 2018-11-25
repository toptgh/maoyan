<template>
<nav class="tabs">

    <slot/>

</nav>
</template>

<script>
export default {
    name: 'tabs',
    props: {
        value: Number
    },
    methods: {
        //处理tab的点击事件
        handleTabAction(tabName){
            // console.log('执行了,点击的是：', tabName);
            //取得tabitem的$solts中的虚拟dom节点
            let vnode = this.$slots.default;
            // 取得所有的tabitem组件对象
            let tabItems = vnode.map(item=>item.componentInstance);
            //取消tab的选中状态, //判断第几个tab点击了
            tabItems.map((item, index)=>{
                item.isActive = false;
                if(item.name == tabName){
                    //触发事件，将点击的下标传到app
                    this.$emit('input', index);
                }
            })
        }
    },
    mounted(){
        //选中第0个
        this.$slots.default[this.value].componentInstance.isActive = true;
    }
}
</script>

<style scoped>
.tabs{
     width: 100%;
     height: 49px;
     position: absolute;
     left: 0;
     bottom: 0;
     display: flex;
     border-top: 1px solid #ddd;
}
</style>
