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
  const url = `https://panda.20170326.com/api/wx/${obj.url}`
  return wx.request(Object.assign(obj, {url}))
}
