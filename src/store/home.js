/**
 * @file 主容器 - store
 * @author xingyifei
 */

import {observable, action, runInAction} from 'mobx';
import Taro from '@tarojs/taro';

class MainHome {

    @observable listData = []

    @action.bound getListData() {
        Taro.request({
            url: 'http://116.62.7.205:8080/getList',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {
                pageSize: 20,
                pageNum: 1
            },
            method: 'POST',
            success: res => {
                this.listData = res.data.data.list;
            }
        });
    }

}

export default new MainHome();
