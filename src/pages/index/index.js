import Taro, {Component} from '@tarojs/taro'
import {observer, inject} from '@tarojs/mobx'
import {observable, action} from 'mobx'

import {View} from '@tarojs/components'

import './index.scss'

@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
    navigationBarBackgroundColor: '#7ED7CF',
    navigationBarTextStyle: 'black',
    navigationStyle: 'default',
    backgroundColor: '#F8F8F8',
    backgroundTextStyle: 'dark',
    backgroundColorTop: '#ffffff',
    backgroundColorBottom: '#ffffff',
    enablePullDownRefresh: true,
    onReachBottomDistance: 50,
    pageOrientation: 'portrait',
    disableScroll: false,
    disableSwipeBack: false
  }

  @observable shareData = {
    title: '',
    path: '',
    imageUrl: ''
  }

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.init()
  }

  componentWillReact() {
  }

  componentDidMount() {
  }

  // @action
  init () {
  }

  // 在已经装载的组件接收到新属性前调用
  componentWillReceiveProps() {
  }

  shouldComponentUpdate(nextProps, nextState) {
  }

  componentWillUpdate(nextProps, nextState) {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  onPullDownRefresh() {
    this.init()
    Taro.stopPullDownRefresh()
  }

  onReachBottom() {
  }

  onPageScroll(res) {
  }

  onShareAppMessage(res) {
    // let {from, target, webViewUrl} = res

    return this.shareData
  }

  render() {
    return (
      <View className='index'>
      </View>
    )
  }
}
