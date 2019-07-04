/***
 * ACTIONS
 */
import http from '../service/http'
import * as api from '../const/api'

/***
 * 微信授权登录
 * @param payload
 * @returns {Promise<void>}
 */
export const loginByWeixin = async payload => {
  let result = await http.post(api.LOGIN_BY_WEIXIN, payload)
  return result && result.data
}

/***
 * 获取用户信息
 * @param payload
 * @returns {Promise<void>}
 */
export const queryUserInfo = async payload => {
  let result = await http.post(api.QUERY_USER_INFO, payload)
  return result && result.data
}
