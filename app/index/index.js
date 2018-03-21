Page({
  data: {
    userInfo: {}
  },
  onLoad() {
    const uid = wx.getStorage({key: 'uid'})

    if (!uid) {
      wx.navigateBack()
    }

    wx.request({
      url: `/users/${uid}`
    })
      .then(res => {
        
      })
  }
})
