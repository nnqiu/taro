/**
 * @file 导航栏 - games
 * @author qiunan
 */

import Taro, {Component} from '@tarojs/taro';
import {View, ScrollView} from '@tarojs/components';

import './index.less';

export default class News extends Component {

    componentDidMount() { }

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
        return (
            <View className='home-main'>
                <ScrollView
                    onScrollToLower={this.onScrollToLower}
                    onScrollToUpper={this.onScrollToUpper}
                    scrollY
                    lowerThreshold={10}
                >
                    <h1>你好，新闻</h1>
                </ScrollView>
            </View>
        );

    }
}
