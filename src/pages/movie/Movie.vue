<template>
<div class="page" id="movie">

    <app-header title="猫眼电影"></app-header>

    <div class="sub-header">
        <span class="city-icon">深圳</span>
        <nav class="nav">
            <li v-for="(item, index) in navList" :key="index" 
                @click="changeAction(index)"
                :class="{active: index == navIndex}">
                {{item}}
            </li>
        </nav>
        <span class="search-icon">
            <img src="../../assets/search.png"/>
        </span>
    </div>

    <app-content :style="{top: '88px', bottom: '49px'}">
        
        
        <div v-if="navIndex == 0">

            <li v-for="item in playingList" :key="item.id">
                {{item.nm}}
            </li>

        </div>

        
        <div v-else-if="navIndex == 1">
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
</div>
</template>

<script>
import {getPlayingList, getComingList} from '../../services/movieService'

export default {
    data(){
        return {
            navList: ['正在热映', '即将上映'],
            navIndex: 0,
            playingList: [],
            comingMap: {}
        }
    },
    methods: {
        changeAction(index){
            this.navIndex = index;
        }
    },
    created(){
        //请求正在热映的电影数据
        getPlayingList().then(result=>{
            this.playingList = result;
        })

        // 请求即将上映的数据
        getComingList().then(result=>{
            this.comingMap = result;
        })
    }

}
</script>

<style lang="scss" scoped>
.sub-header{
    width: 100%;
    height: 44px;
    position: absolute;
    top: 44px;
    left: 0;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    span{
        flex: 1;
    }
    .city-icon{
        text-align: center;
        line-height: 44px;
        &::after{
            content: '';
            display: inline-block;
            width: 0;
            height: 0;
            border: 6px solid transparent;
            border-top: 6px solid #666;
            transform: translateY(3px);
        }
    }
    .nav{
        width: 70%;
        display: flex;
        color: #666;
        font-size: 14px;
        li{
            flex: 1;
            text-align: center;
            line-height: 44px;
            &.active{
                color: #f03d37;
                border-bottom: 2px solid #f03d37;
            }
        }
    }
    .search-icon img{
        width: 24px;
        margin: 10px auto;
    }
}
</style>
