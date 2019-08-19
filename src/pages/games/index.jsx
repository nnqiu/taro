/**
 * @file 导航栏 - games
 * @author qiunan
 */

import Taro, {Component} from '@tarojs/taro';
import {View, ScrollView} from '@tarojs/components';

import './index.less';

export default class Games extends Component {

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
                {/* <ScrollView
                    onScrollToLower={this.onScrollToLower}
                    onScrollToUpper={this.onScrollToUpper}
                    scrollY
                    lowerThreshold={10}
                > */}
                    {/* <h1>你好，游戏</h1> */}
                    <span>I'm Batman!</span>
                    <div className="batman">
 
                    </div>
                {/* </ScrollView> */}
            </View>
        );

    }
}
