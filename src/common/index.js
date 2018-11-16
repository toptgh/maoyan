//引进所有的公共组件到这设为全局组件（封装插件）
import Tabs from './tabs/Tabs'
import TabItem from './tabs/TabItem'
import Header from './header/Header'
import Content from './content/Content'
import Scroll from './scroll/Scroll'

//输出公共组件（原理：这里向外输出一个对象,main.js引入并use调用了install方法）
export default {
    //install方法可拓展组件
    install(Vue) {

        //参数一：组件的名字，是变量，在组件内部已经设置name，使用组件直接把变量name的值写作标签
        //参数二：组件的内容，是引进的组件
        Vue.component(Tabs.name, Tabs);
        Vue.component(TabItem.name, TabItem);

        Vue.component(Header.name, Header);
        Vue.component(Content.name, Content);

        Vue.component(Scroll.name, Scroll);

    }
}