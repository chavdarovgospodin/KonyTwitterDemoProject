define({ 

  createNewTweet: function (tweet) {

    var newComp = new Twitter.msg({
      "isVisible": true,
    }, {}, {});

    this.view.FlexMain.add(newComp); // move out of here

    newComp.userName = tweet.userId;
    newComp.userHandle = tweet.parentId;
    newComp.tweetMsg = tweet.content;
    newComp.imgUser = tweet.media_id; // media? where is the img stored? Do we need to call a mediaDto instance? mediaDto.image
    newComp.commentNumber = ''; //i guess we don't have these as info? 
    newComp.retweetNumber = '';
    newComp.heartNumber = '';

    return newComp;
  },


});