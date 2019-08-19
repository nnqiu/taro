/**
 * @file 主容器
 * @author xingyifei
 */

import Taro, {Component} from '@tarojs/taro';
import {View, ScrollView} from '@tarojs/components';
import {observer, inject} from '@tarojs/mobx';
import {AtTabBar} from 'taro-ui';
import {MENU_CONFIG} from './config';

import './index.less';
@inject('homeStore')
@observer

export default class Index extends Component {

    config = {
        navigationBarTitleText: 'Welcome!'
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

    render() {

        const listData = this.props.homeStore.listData;

        return (
            <View className='home-main'>
                <AtTabBar
                    tabList={MENU_CONFIG}
                    onClick={() => {}}
                />
                <ScrollView
                    onScrollToLower={this.onScrollToLower}
                    onScrollToUpper={this.onScrollToUpper}
                    scrollY
                    lowerThreshold={10}
                >
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
