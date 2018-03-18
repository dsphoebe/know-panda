const promisify = require('./app/utils/promisify')

[
  'getSetting',
  'authorize',
  'showToast'
].forEach(funcName => {
  const api = wx[funcName]
  Object.defineProperty(wx, funcName, {
    get() {
      promisify(api)
    }
  })
})
