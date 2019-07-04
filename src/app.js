import Taro, { Component } from '@tarojs/taro'
import {inject, observer, Provider} from '@tarojs/mobx'
import '@tarojs/async-await'

import Index from './pages/index'

import store from './store'

import './assets/css/app.scss'
import {queryUserInfo} from "./actions"

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

@inject('mpApp', 'cart')
@observer
class App extends Component {

  config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      navigationBarTitleText: '爱真货',
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#7ED7CF',
      navigationBarTextStyle: 'black',
      navigationStyle: 'default',
      backgroundColor: '#F8F8F8',
      backgroundColorTop: '#ffffff',
      backgroundColorBottom: '#ffffff',
      enablePullDownRefresh: false,
      onReachBottomDistance: 50,
      pageOrientation: 'portrait'
    },
    tabBar: {
      color: '',
      selectedColor: '',
      backgroundColor: '',
      borderStyle: 'white',
      position: 'bottom',
      list: [
        {
          pagePath: 'pages/index/index',
          text: ''
        },
        {
          pagePath: 'pages/category/category',
          text: ''
        },
        {
          pagePath: 'pages/cart/cart',
          text: ''
        },
        {
          pagePath: 'pages/customerHome/customerHome',
          text: ''
        },
        {
          pagePath: 'pages/proxyIndex/proxyIndex',
          text: ''
        }
      ]
    },
    networkTimeout: {
      request: 30000,
      connectSocket: 60000,
      uploadFile: 60000,
      downloadFile: 60000
    },
    permission: {
      'scope.userLocation': {
        desc: '将用于位置信息展示'
      }
    }
  }

  constructor(props) {
    super(props)
  }

  async componentWillMount () {
    // 隐藏原生tabbar
    Taro.hideTabBar()

    const {mpApp, cart} = this.props

    console.log('this.$router.params', this.$router)
    // 查看是否登录
    let userInfo = Taro.getStorageSync('userInfo')
    if (userInfo && userInfo.id > 0) {
      // 更新用户信息
      queryUserInfo({
        userId: userInfo.id
      }).then(res => {
        if (res.errno === 0) {
          Taro.setStorageSync('userInfo', res.data)
        }
      })

      // 已登录, 数据初始化
      if (userInfo.type > 0) {
        Taro.reLaunch({
          url: `/pages/proxyIndex/proxyIndex`
        })
      } else {
        // 获取购物车数据
        cart.queryCartGoodsList(userInfo.id)
      }
    } else {
      mpApp.updateProp('params', this.$router.params)
      // 未登录，跳转到登录页
      Taro.reLaunch({
        url: `/pages/register/register`
      })
    }
  }

  componentDidMount () {
  }

  componentDidShow () {
    let userInfo = Taro.getStorageSync('userInfo')
    if (!userInfo) {
      Taro.reLaunch({
        url: `/pages/register/register`
      })
    }
  }

  componentDidHide () {
  }

  componentDidCatchError (e) {
    console.error('ERROR: ', e)
  }

  componentDidNotFound () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
