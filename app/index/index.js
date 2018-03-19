Page({
  data: {
    userInfo: {}
  },
  onLoad() {
    const uid = wx.getStorage('uid')
    wx.request({
      url: `/users/${uid}`
    })
      .then(res => {
        
      })
  }
})
