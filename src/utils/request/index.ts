import Taro from '@tarojs/taro'
let baseUrl: string = 'https://music.lsqy.tech/api'
type OptionType = {
  url: string
  data?: Object | String | ArrayBuffer
  method?: any
  header: object
  success: any
  error: any
}

export default {
  baseOptions(params, method) {
    let { url, data } = params
    Taro.showLoading({
      title: '加载中',
      mask: true
    })

    const option: OptionType = {
      url: baseUrl + url,
      data: data,
      method: method,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        Taro.hideLoading()
        console.log(res)
      },
      error(err) {
        Taro.hideLoading()
        Taro.showToast({
          title: err,
          icon: 'none'
        })
      }
    }
    // eslint-disable-next-line
    return Taro.request(option)
  },
  // 请求方式封装
  get(url, data?: object) {
    let option = { url, data }
    return this.baseOptions(option)
  },
  post(url, data?: object) {
    let option = { url, data }
    return this.baseOptions(option, 'POST')
  },
  put(url, data?: object) {
    let option = { url, data }
    return this.baseOptions(option, 'PUT')
  },
  delete(url, data?: object) {
    let option = { url, data }
    return this.baseOptions(option, 'DELETE')
  }
}
