/***
 * 接口域名
 */

// eslint-disable-next-line
const apiHost = _API_HOST


/***
 * 接口地址
 */

/***
 * 微信授权登录
 * @type {string}
 */
export const LOGIN_BY_WEIXIN = `${apiHost}/auth/login_by_weixin`

/***
 * 获取用户信息
 * @type {string}
 */
export const QUERY_USER_INFO = `${apiHost}/auth/getUserInfo`

/***
 * 获取oss前端直传签名参数
 * @type {string}
 */
export const GET_OSS_SIGNATURE = `${apiHost}/getOssSignature`
