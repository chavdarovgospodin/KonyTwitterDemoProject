define({ 

  clearData: function() {
    this.view.TextAreaNewTweet.text = '';
  },

  createNewTweet: function() {
    var tweet = new TweetDto();
    var user = kony.store.getItem('userInfo');   
    var tweetData;
    var d = new Date();

    this.getLocation((position) => {
      if (this.view.TextAreaNewTweet.text !== '') {
        tweetData = {
          userId: user.id,
          content: this.view.TextAreaNewTweet.text,
          date: d.toISOString(),
          locLatitude: position.coords.latitude,
          locLongitude: position.coords.longitude,

        };
        tweet.createTweet(tweetData, this.successfulTweet,this.error );
      }
      else {
        alert('please submit something');
      }
    });
  },

  successfulTweet:function() {
    alert('tweet created!');	
    var ntf = new kony.mvc.Navigation("ListingForm");
    ntf.navigate(); 
  },

  error:function(err) {
    alert(err);
  },

  //   capture:function(eventObject){
  //     var image = new MediaDto();
  //     var tweet = new TweetDto();
  //     var tweetData;
  //     var userInfo = kony.store.getItem('userInfo');
  //     var imgInfo = {
  //       image: eventObject.base64,
  //       date: new Date().toISOString()
  //     };

  //     if (this.view.TextAreaNewTweet.text !== '') {
  //       tweetData = {
  //         userId: userInfo.id,
  //         content: this.view.TextAreaNewTweet.text,
  //         date: new Date().toISOString(),
  //         locLatitude: 0,
  //         locLongitude:0,
  //       };
  //     }
  //     else {
  //       alert('please submit something');
  //     }
  //     tweetData = Object.assign(tweetData,{image: result.id});
  //     alert(tweetData);
  //     image.uploadImg(imgInfo, function(result){
  // //       userInfo = Object.assign(userInfo,{image: result.id});
  //       tweetData = Object.assign(tweetData,{image: result.id});

  //       tweet.createTweet(tweetData, function(result){
  //         alert('Tweet created');
  //       }, function(error){
  //         alert(error);
  //       });

  //     }, function(error){ 
  //       alert(error);
  //     });
  //   },

  getLocation(successCallback) {
    kony.location.getCurrentPosition(
      (position) => successCallback(position), 
      (err) => alert('unable to retrieve location'));
  }

});