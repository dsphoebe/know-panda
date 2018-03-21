
require('./init')

App({
  onLaunch() {
    if (wx.getStorage({key: 'userInfo'})) {
      wx.navigateTo({
        url: '/app/index/index'
      })
    } else {
      this.authorize()
    }
  },
  authorize() {
    wx.getSetting()
      .then(res => {
        const scope = 'scope.userInfo'
        if (!res.authSetting[scope]) {
          wx.authorize({scope})
            .then(() => {
              wx.getUserInfo()
                .then(res => {
                  this.saveUserInfo(res.userInfo)
                })
            })
            .catch(res => {
              wx.showModal({
                content: '确定不授权吗？不授权无法参与U know 胖哒的测验。',
              })
                .then(res => {
                  if (!res.confirm) {
                    wx.navigateBack()
                  }
                })
            })
        }
      })
  },
  saveUserInfo(userInfo) {
    wx.setStorage({key: 'userInfo', value: userInfo})
  }
})
