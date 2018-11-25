import http from '../utils/http'
import API from '../api'

//请求正在热映的电影数据
export function getPlayingList() {
    return new Promise((resolve, reject) => {
        http({
                url: API.PLAYING_API,
                method: 'GET',
                data: {
                    token: ''
                }
            })
            .then(({
                data,
                status
            }) => {
                if (status == 200) {
                    //请求成功
                    console.log('正在热映：');
                    console.log(data)
                    let newData = data.movieList.map(item => {
                        let {
                            id,
                            nm,
                            img,
                            version,
                            sc,
                            star,
                            showInfo,
                            wish,
                            globalReleased
                        } = item;
                        img = img.replace(/w.h/, '64.90');
                        return {
                            id,
                            nm,
                            img,
                            version,
                            sc,
                            star,
                            showInfo,
                            wish,
                            globalReleased
                        };
                    })
                    resolve({
                        data: newData,
                        ids: data.movieIds
                    });
                } else {
                    //请求失败
                }
            })
            .catch(() => {
                //请求失败
            });
    })
}

//请求更多正在热映的电影数据
export function getMorePlayingList(ids) {
    return new Promise((resolve, reject) => {
        http({
                url: API.MORE_PLAYING_API,
                method: 'GET',
                data: {
                    token: '',
                    movieIds: ids
                }
            })
            .then(({
                data,
                status
            }) => {
                if (status == 200) {
                    console.log(data);
                    //请求成功
                    let newData = data.coming.map(item => {
                        let {
                            id,
                            nm,
                            img,
                            version,
                            sc,
                            star,
                            showInfo,
                            wish,
                            globalReleased
                        } = item;
                        img = img.replace(/w.h/, '64.90');
                        return {
                            id,
                            nm,
                            img,
                            version,
                            sc,
                            star,
                            showInfo,
                            wish,
                            globalReleased
                        };
                    })
                    resolve(newData);
                } else {
                    //请求失败
                }
            })
            .catch(() => {
                //请求失败
            });
    })
}

//请求最受期待的电影数据
export function getMostExpectedDate(ci) {
    return new Promise((resolve, reject) => {
        http({
                url: API.MOST_EXPECTED_API,
                method: 'GET',
                data: {
                    ci,
                    limit: 10,
                    offset: 0,
                    token: ''
                }
            })
            .then(({
                data,
                status
            }) => {
                console.log('最受期待：')
                console.log(data);
                if (status != 200) {
                    return;
                } else {
                    //请求成功
                    resolve({
                        data: data.coming,
                        ids: data.paging.offset
                    });
                }
            })
            .catch(error => {
                //请求失败
            })
    })
}

//请求更多最受期待的电影数据
export function getMoreExpectedDate(ids,ci) {
    return new Promise((resolve, reject) => {
        http({
                url: API.MOST_EXPECTED_API,
                method: 'GET',
                data: {
                    ci,
                    limit: 10,
                    offset: ids,
                    token: ''
                }
            })
            .then(({
                data,
                status
            }) => {
                if (status != 200) {
                    return;
                } else {
                    //请求成功
                    resolve(data.coming);
                }
            })
            .catch(error => {
                //请求失败
            })
    })
}

// 请求即将上映的数据
export function getComingList(ci) {
    return new Promise((resolve, reject) => {
        http({
                url: API.COMING_API,
                method: 'GET',
                data: {
                    ci,
                    token: '',
                    limit: 10
                }
            })
            .then(({
                data,
                status
            }) => {
                console.log('即将上映：');
                console.log(data)
                if (status != 200) {
                    //请求失败

                    return;
                }
                //请求成功
                // 处理即将上映的电影数据
                let newData = data.coming.map(item => {
                    //过滤
                    let {
                        id,
                        nm,
                        showst,
                        img,
                        wish,
                        star,
                        rt,
                        showInfo,
                        version,
                        comingTitle
                    } = item;
                    return {
                        id,
                        nm,
                        showst,
                        img,
                        wish,
                        star,
                        rt,
                        showInfo,
                        version,
                        comingTitle
                    };
                })
                //按日期进行分类
                let dataMap = {};
                newData.map(item => {
                    if (!dataMap[item.comingTitle]) {
                        dataMap[item.comingTitle] = [];
                    }
                    dataMap[item.comingTitle].push(item);
                })
                resolve({
                    data: dataMap,
                    ids: data.movieIds,
                    List: newData
                });
            })
            .catch(error => {
                console.log(error);
            })
    })
}

//请求更多即将上映的电影数据
export function getMoreComingList(ids,ci) {
    return new Promise((resolve, reject) => {
        http({
                url: API.MORE_PLAYING_API,
                method: 'GET',
                data: {
                    ci,
                    token: '',
                    limit: 10,
                    movieIds: ids
                }
            })
            .then(({
                data,
                status
            }) => {
                if (status != 200) {
                    //请求失败

                    return;
                }
                //请求成功
                // 处理即将上映的电影数据
                let newData = data.coming.map(item => {
                    //过滤
                    let {
                        id,
                        nm,
                        showst,
                        img,
                        wish,
                        star,
                        rt,
                        showInfo,
                        version,
                        comingTitle
                    } = item;
                    return {
                        id,
                        nm,
                        showst,
                        img,
                        wish,
                        star,
                        rt,
                        showInfo,
                        version,
                        comingTitle
                    };
                })
                resolve(newData);
            })
            .catch({

            })
    })
}

//请求影院的数据
export function getCinemaList(cityId) {
    return new Promise((resolve, reject) => {
        http({
            url: API.CITY_CINEMA_API,
            method: 'GET',
            data: {
                offset:0,
                limit:20,
                cityId
            }
        }).then(({data,status})=>{
            if(status==200){
                console.log('影院:');
                console.log(data);
                resolve({
                    data:data.cinemas,
                    ids:data.paging.offset
                });
            }else{

            }
        }).catch(()=>{
            
        })
    })
}

//请求更多影院数据
export function getMoreCinemaList(ids,cityId){
    return new Promise((resolve,reject)=>{
        http({
            url: API.CITY_CINEMA_API,
            method: 'GET',
            data: {
                offset:ids,
                limit:20,
                cityId
            }
        }).then(({data,status})=>{
            if(status==200){
                console.log('更多影院:');
                console.log(data);
                resolve(data.cinemas);
            }else{

            }
        }).catch(()=>{
            
        })
    })
}

//请求电影详情页数据
export function getDetailList(ids){
    return  new Promise((resolve,reject)=>{
        http({
            url:API.DETAIL_API,
            method:'GET',
            data:{
                movieId:ids
            }
        }).then(({data,status})=>{
            if(status==200){
                resolve({data:data.detailMovie})
            }else{

            }
        }).catch(()=>{

        })
    })
}

//请求日期数据
export function getDateList(ids,cityId){
    return new Promise((resolve,reject)=>{
        http({
            url:API.DATE_API,
            method:'POST',
            data:{
                movieId: ids,
                updateShowDay: true,
                reqId:Date.now(),
                cityId,
                day:new Date().toLocaleDateString().replace(/[/]/g,'-')
            }
        }).then(({data,status})=>{
            console.log('日期')
            console.log(data)
            if(status==200){
                resolve({cinemas:data.cinemas,showDays:data.showDays.dates})
            }
        }).catch(()=>{

        })
    })
}