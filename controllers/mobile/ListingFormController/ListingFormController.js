define({ 

  TweetDto: new TweetDto(),

  createNewTweet: function (tweet) {

    var newComp = new Twitter.msg({
      "id": tweet.id,
      "isVisible": true,
      "width": "100%"
    }, {}, {});

    newComp.userName = tweet.userId;
    newComp.userHandle = '';
    newComp.tweetMsg = tweet.content;
    newComp.imgUser = ''; // media? where is the img stored? Do we need to call a mediaDto instance? mediaDto.image
    newComp.commentNumber = '300'; //i guess we don't have these as info? 
    newComp.retweetNumber = '233';
    newComp.heartNumber = '245';

    return newComp;
  },
  onInit: function () {
    this.TweetDto.findAll("", {}, this.successGotTweets, this.failToGetTweets);
  },
  
  successGotTweets: function(result){
    this.showTweets(result);
  },
  
  failToGetTweets(response){
    alert(response);
  },
  
  showTweets: function (items) {
    let tweetsContainer = this.view.FlexMain;

    //for cycle 
    //call constructor function in for cycle
        for(let item of items) {
             tweetsContainer.add(this.createNewTweet(item)); // figure out what id should be
           }
  },

});