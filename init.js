const promisify = require('./app/utils/promisify').default;

[
  'getSetting',
  'authorize',
  'showToast',
  'showModal',
  'authorize',
  'request'
].forEach(funcName => {
  const api = wx[funcName]
  Object.defineProperty(wx, funcName, {
    get: () => promisify(api)
  })
})

export const request = (obj = {}) => {
  let {url, ...rest} = obj
  url = `https://panda.20170326.com/api/wx/${url}`
  wx.request({
    url,
    ...rest,
    success: res => {
      const data = res.data
      if (!data.errcode) {
        return Promise.resolve(data)
      } else {
        return Promise.reject(data)
      }
    },
    fail: res => {
      Promise.reject(`服务器错误: ${res}`)
    }
  })
}
