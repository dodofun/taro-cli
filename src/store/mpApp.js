import {
  observable,
  action, computed,
} from 'mobx'
import Taro from "@tarojs/taro";

class MpApp {
  @observable params = {}
  @observable timestamp = 0

  @computed
  get userInfo () {
    // 更新本地用户信息后，更新 timestamp，保证 computed 执行，拿到最新用户信息
    console.log(this.timestamp)
    return Taro.getStorageSync('userInfo')
  }

  @action
  updateProp(prop, val) {
    this[prop] = val
  }

}

export default new MpApp()
