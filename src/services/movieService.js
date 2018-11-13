import http from '../utils/http'
import API from '../api'

//请求正在热映的电影数据
export function getPlayingList(){
    return new Promise((resolve, reject)=>{
        http({
            url: API.PLAYING_API,
            method: 'GET',
            data: {
                token: ''
            }
        })
        .then(({data, status})=>{
            if(status == 200){
                //请求成功
                let newData = data.movieList.map(item=>{
                    let {id, nm, img, version, sc, star, showInfo, wish, globalReleased} = item;
                    return {id, nm, img, version, sc, star, showInfo, wish, globalReleased};
                })
                console.log(newData)
                resolve(newData);  
            }else{
                //请求失败
            }
        })
        .catch(()=>{
            //请求失败
        });
    })
}


// 请求即将上映的数据
export function getComingList(){
    return new Promise((resolve, reject)=>{
        http({
            url: API.COMING_API,
            method: 'GET',
            data: {
                ci: 30,
                token: '',
                limit: 10
            }
        })
        .then(({data, status})=>{
            if(status != 200){
                //请求失败

                return;
            }
            //请求成功
            // 处理即将上映的电影数据
            let newData = data.coming.map(item=>{
                //过滤
                let {id, nm, img, wish, star, showInfo, version, comingTitle} = item;
                return {id, nm, img, wish, star, showInfo, version, comingTitle};
            })
            //按日期进行分类
            let dataMap = {};
            newData.map(item=>{
                if(!dataMap[item.comingTitle]){
                    dataMap[item.comingTitle] = [];
                }
                dataMap[item.comingTitle].push(item);
            })
            resolve(dataMap);
        })
        .catch(error=>{
            console.log(error);
        })
    })
}











