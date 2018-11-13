<template>
<div class="content">
    <slot/>
</div>
</template>

<script>
export default {
    name: 'app-content'
}
</script>

<style lang="scss" scoped>
.content{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
}
</style>

