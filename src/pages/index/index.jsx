/**
 * @file 主容器
 * @author xingyifei
 */

import Taro, {Component} from '@tarojs/taro';
import {View, ScrollView, Image} from '@tarojs/components';
import {observer, inject} from '@tarojs/mobx';
import {AtTabBar} from 'taro-ui';
import {MENU_CONFIG} from './config';

import './index.less';
@inject('homeStore')
@observer

export default class Index extends Component {
    config = {
        // 设置导航语
        navigationBarTitleText: 'Hello World!'
    }

    componentDidMount() {
        // 获取列表数据
        this.props.homeStore.getListData();
    }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    onScrollToLower() {
        console.log(11)
    }

    onScrollToUpper() {
        console.log(21)
    }

    // 跳转路由
    goRoute(index) {
        const name = MENU_CONFIG[index].text;
        Taro.navigateTo({
            url: `/pages/${name}/index`
        })
    }

    render() {

        const listData = this.props.homeStore.listData;

        return (
            <View className='home-main'>
                <AtTabBar
                    fixed
                    tabList={MENU_CONFIG}
                    onClick={this.goRoute}
                />
                <ScrollView
                    onScrollToLower={this.onScrollToLower}
                    onScrollToUpper={this.onScrollToUpper}
                    scrollY
                    lowerThreshold={10}
                >
                    <Image
                        // style='width: 300px;height: 300px;background: #fff;'
                        src="https://i.loli.net/2019/08/19/mBRdQP21z5qWU9h.jpg"
                    />
                    {listData.map(item => {
                        const newItem = item;
                        return (
                            <View
                                key={newItem.id}
                                className='home-main-feed'
                            >
                                {newItem.text}
                                <Image
                                    src={newItem.imgHref.split(',')[0]}
                                    lazyLoad={true}
                                    mode={'widthFix'}
                                />
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        );

    }
}
