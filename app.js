
require('./init')

App({
  onLaunch() {
    if (!wx.getStorageSync('userInfo')) {
      this.authorize()
    }
  },
  authorize() {
    wx.getSetting()
      .then(res => {
        const scope = 'scope.userInfo'
        if (!res.authSetting[scope]) {
          wx.authorize({scope})
            .then(() =>
              wx.getUserInfo()
                .then(res => {
                  this.saveUserInfo(res.userInfo)
                })
            )
        }
      })
  },
  saveUserInfo(userInfo) {
    wx.setStorageSync('userInfo', userInfo)
  }
})
