<template>
<header class="header">
    
    <h1 class="title">{{title}}</h1>
    <slot name='left'/>
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

</style>
