import Vue from 'vue'
//给图片链接加宽高
Vue.filter('replaceWH', (path, w, h)=>{
    return path.replace(/w.h/, `${w}.${h}`);
})

//截取字符串
Vue.filter('replaceTime',(str,num)=>{
    let value=str.substring(0,str.length-num);
    return value;
})

