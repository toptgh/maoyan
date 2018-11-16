const SAT_HOST = 'http://localhost:8080';
const UAT_HOST = 'http://m.maoyan.com';
const PRO_HOST = 'http://m.maoyan.com';

/*
正在热映的接口
参数：token：可选，用户标识
*/
const PLAYING_API = '/ajax/movieOnInfoList';

/*
更多正在热映的接口
参数：
    token 可选，用户标识
    movieIds: 需要请求的电影id列表，如果没有，请求第一页数据
*/
const MORE_PLAYING_API = '/ajax/moreComingList';

/**
 最受期待电影数据接口
 参数：ci 城市id
    limit 数据长度
    offset 第几个数据
    token 用户标识
 */
const MOST_EXPECTED_API='/ajax/mostExpected';


/*
即将上映的接口
参数：ci 城市id
     token 用户标识
     limit 数据长度

*/
const COMING_API = '/ajax/comingList';


export default{
    SAT_HOST,
    UAT_HOST,
    PRO_HOST,
    PLAYING_API,
    MORE_PLAYING_API,
    COMING_API,
    MOST_EXPECTED_API
}
