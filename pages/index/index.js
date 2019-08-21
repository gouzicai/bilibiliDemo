Page({

  /**
   * 页面的初始数据
   */
  data: {
    navCurrentIndex:0,
    navList:[],
    swipeList:[],
    videolist:[]
  },

getNavList(){
  let that = this;
  wx.request({
    url: 'https://www.easy-mock.com/mock/5d4a5bb7ee89405f39e4eb24/example/bilibilinavlist',
    success(res){
      console.log(res);
      if(res.data.code ===0){
        that.setData({
          navList:res.data.data.navList
        })
      }
    }
  })
},
getSwipeList(){
  var that = this;
  wx.request({
    url: 'https://www.easy-mock.com/mock/5d4a5bb7ee89405f39e4eb24/example/bilibiliswipelist',
    success(res){
      console.log(res);
      if(res.data.code===0){
        that.setData({
          swipeList: res.data.data.swipeList
        })
      }
    }
  })
},

getVideoList(){
  var that = this;
  wx.request({
    url: 'https://www.easy-mock.com/mock/5d4a5bb7ee89405f39e4eb24/example/bilibilivideolist',
    success(res) {
      console.log(res);
      if (res.data.code === 0) {
        that.setData({
          videolist: res.data.data.videolist
        })
      }
    }
  })
},
activeNav(e){
  console.log(e);
  this.setData({
    navCurrentIndex:e.target.dataset.index
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList();
    this.getSwipeList();
    this.getVideoList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})