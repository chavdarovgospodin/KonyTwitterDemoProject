define({ 

  context: null,

  defineTweetComponent: function (tweet) {
    let newTweeet = Twitter.msg(
      {
        "id": tweet.id,
        "isVisible": true,
        "width": "100%"
      }, {},{});

    newTweet.userName = tweet.userName;
    newTweet.userHandle = tweet.userHandle;
    newTweet.msg = tweet.msg;
    newTweet.img = tweet.img;
    newTweet.numOfReplies = tweet.numOfReplies;
    newTweet.numOfRetweets = tweet.numOfRetweets;
    newTweet.numOfHearts = tweet.numOfHearts;

    return newTweet;
  },

  
  

  //Executed every time we nagigate to the form.
  onNavigate: function (context, isBackButton) {

    if(context) {    //if context receives params as an argument from another form...
      
      //get User profile data from context data
      let userName = context.userName;
      let userHandle = context.userHandle;
      let msg = context.msg;
      let imgBase64 = context.img;
      let numOfReplies = context.numOfReplies;
      let numOfRetweets = context.numOfRetweets;
      let numOfHearts = context.numOfHearts;
      
      //set profile user data
//       this.view.Profile.userName = userName;
//       this.view.Profile.userHandle = userHandle;
//       this.view.Profile.userDescription = '';
//       this.view.Profile.userLocation = '';
//       this.view.Profile.userFollowingNumber = '';
//       this.view.Profile.userFollowersNumber = '';
//       	this.view.Profile.profilePicSrc.base64 = imgBase64;


      //fetch user data and populate Profile Form with showTweets()
      showTweets();
    }
  },

  
  
  
  
  showTweets: function () {
    let tweetsContainer = this.view.FlexScrollMain;

    //fetch data
    
    //check if data is received properly

    //if data received ->
    //for cycle 
    //call constructor function in for cycle
    //       for(let item of items) {
    //         tweetsContainer.add(this.defineTweetComponent(item)); // figure out what id should be
    //       }
  }

});