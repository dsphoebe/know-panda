

App({
  onLaunch() {
    wx.getSetting({
      success(res) {
          if (!res.authSetting['scope.userInfo']) {
            wx.authorize({
                scope: 'scope.userInfo',
                success() {
                  alert('授权成功')
                },
                fail() {
                  wx.showModal({
                    title: '提示',
                    content: '确定不授权吗？不授权无法参与U know 胖哒的测验。',
                    success() {
                      wx.navigateBack()
                    },
                    fail() {
                      
                    }
                  })
                }
            })
          }
      }
    })
  },
  oauth() {
    
  }
})
