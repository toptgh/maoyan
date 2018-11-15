<template>
<li class="tab" :class="{active: isActive}" @click="tabAction">
    <span :class="icon"></span>
    <span>{{name}}</span>
</li>
</template>

<script>
export default {
    name: 'tab-item',
    props: {
        name: String,
        icon: String
    },
    data(){
        return {
            isActive: false
        }
    },
    methods: {
        tabAction(){
            //1.选中自身的tab//2.切换对应的页面

            // 取消其他所有的选中状态 //2.切换对应的页面
            this.$parent.handleTabAction(this.name);
            //1.选中自身的tab
            this.isActive = true;
        }
    }
}
</script>

<style scoped>
.tab{
    flex: 1;
    text-align: center;
    color: #333;
    display: flex;
    flex-direction: column;
}
.tab span{
    flex: 1;
}
.tab span:first-of-type{
    padding-top: 5px;
    font-size: 25px;
}
.tab span:last-of-type{
    font-size: 12px;
}
.tab.active{
    color: #f03d37;
}

</style>
