import Taro, {Component} from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';

import './index.less';

export default class Banner extends Component {
    state = {
        imgList: [
            {
                imgUrl: "https://yanxuan.nosdn.127.net/98a37057c54be2d13d65e8725a3d2837.png",
            }, {
                imgUrl: "https://yanxuan.nosdn.127.net/cd721640cf4ad978c06baa27febc2ef9.jpg"
            }, {
                imgUrl: "https://yanxuan.nosdn.127.net/3b4eb23a111ca747eeeccc5b2306de3b.jpg"
            }, {
                imgUrl: "https://yanxuan.nosdn.127.net/9cbe43dca87a2142909069becda61c79.jpg"
            }
        ]
    }

    bannerChange = () => {
        console.log('滚动');
    }

    render() {
        const { imgList } = this.state;
        return (
            <View className="banner-main">
                <Swiper
                    class='banner-swipper'
                    indicatorColor='#999'
                    indicatorActiveColor='#333'
                    circular
                    indicatorDots
                    // autoplay
                    onChange={this.bannerChange}
                >
                    {
                        imgList.map(item => (
                            <SwiperItem class='banner-swipper-item'>
                                <View>
                                    <Image
                                        className='banner-img'
                                        src={item.imgUrl}
                                    />
                                </View>
                            </SwiperItem>
                        ))
                    }
                </Swiper>
            </View>
        )
    }
}