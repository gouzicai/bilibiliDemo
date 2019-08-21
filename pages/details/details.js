// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo: null,
    otherList: [],
    commentList: [],
    commentTotalCount:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    let videoId = options.id;
    this.getCurrentVideo(videoId);
    this.getOtherList(videoId);
    this.getCommentList(videoId);
  },

  // 根据视频id来获取视频详情
  getCurrentVideo(videoId) {
    let that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d4a5bb7ee89405f39e4eb24/example/bilibilivideodetails?id=' + videoId,
      success(res) {
        console.log(res)
        if (res.data.code === 0) {
          that.setData({
            videoInfo: res.data.data.videoInfo
          })
        }
      }
    })

  },

  getOtherList(videoId) {
    let that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d4a5bb7ee89405f39e4eb24/example/bilibiliotherlist?id=' + videoId,
      success(res) {
        console.log(res);
        if (res.data.code === 0) {
          that.setData({
            otherList: res.data.data.otherList
          })
        }
      }
    })
  },

  getCommentList(videoId) {
    let that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d4a5bb7ee89405f39e4eb24/example/bilibilicommentlist?id=' + videoId,
      success(res) {
        console.log(res);
        if (res.data.code === 0) {
          that.setData({
            commentList: res.data.data.commentData.commentList,
            commentTotalCount: res.data.data.commentData.commentTotalCount
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})