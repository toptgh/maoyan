<template>
<header class="header">
    <!-- <span class="header-btn header-btn-left">
        <slot name="left"/>
    </span> -->
    <h1 class="title">{{title}}</h1>
    <!-- <span class="header-btn header-btn-right">
        <slot name="right"/>
    </span> -->
</header>
</template>

<script>
export default {
    name: 'app-header',
    props: {
        title: String
    }
}
</script>

<style>
.header{
    padding: 0;
    margin: 0;
    width: 100%;
    height: 44px;
    position: absolute;
    top: 0;
    left: 0;
    background: #f03d37;
}
.header .title{
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 44px;
    font-size: 16px;
    color: #fff;
}
.header-btn{
    position: absolute;
    top: 0;
    line-height: 44px;
    padding: 0 10px;
    color: #fff;
    font-size: 12px;
}
.header-btn *{
    color: #fff;
}
.header-btn-left{
    left: 10px;
}
.header-btn-right{
    right: 10px;
}
</style>
