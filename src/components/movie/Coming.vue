<template>
<app-content :style="{top: '88px', bottom: '49px'}">
<div class="coming">
    <div v-for="(list, key) in comingMap" :key="key">
        <p style="background: red;">{{key}}</p>
        <ul>
            <li v-for="item in list" :key="item.id">
                {{item.nm}}
            </li>
        </ul>
    </div>
</div>
</app-content>
</template>

<script>
import {getComingList} from '../../services/movieService'
export default {
    data(){
        return {
            comingMap: {}
        }
    },
    created(){
        // 请求即将上映的数据
        getComingList().then(result=>{
            this.comingMap = result;
        })
    }
}
</script>

<style lang="scss" scoped>

</style>

