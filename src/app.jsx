/**
 * @file 入口文件
 * @author xingyifei
 */

import Taro, {Component} from '@tarojs/taro';
import {Provider} from '@tarojs/mobx';
import Index from './pages/index';

import homeStore from './store/home';

import './app.less';
import 'taro-ui/dist/style/index.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
    homeStore
};

class App extends Component {

    config = {
        pages: [
            'pages/home/index',
            'pages/news/index',
            'pages/games/index'
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'WeChat',
            navigationBarTextStyle: 'black'
        },
        tabBar: {
            color: "#666",
            selectedColor: "#b4282d",
            backgroundColor: "#fafafa",
            borderStyle: 'black',
            list: [{
                pagePath: "pages/home/index",
                iconPath: "./assets/tab-bar/home.png",
                selectedIconPath: "./assets/tab-bar/home-active.png",
                text: "首页"
            }, {
                pagePath: "pages/news/index",
                iconPath: "./assets/tab-bar/cate.png",
                selectedIconPath: "./assets/tab-bar/cate-active.png",
                text: "新闻"
            }, {
                pagePath: "pages/games/index",
                iconPath: "./assets/tab-bar/cart.png",
                selectedIconPath: "./assets/tab-bar/cart-active.png",
                text: "游戏"
            }]
        }
    }

    componentDidMount() {}

    componentDidShow() {}

    componentDidHide() {}

    componentDidCatchError() {}

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
    render() {
        return (
            <Provider store={store}>
                <Index />
            </Provider>
        );
    }
}

Taro.render(<App />, document.getElementById('app'));
