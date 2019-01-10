define({ 

  clearData: function() {
    this.view.TextAreaNewTweet.text = '';
  },

  createNewTweet: function() {
    var tweet = new TweetDto();
	var key = kony.store.getItem('userInfo');
    var tweetData;
    var d = new Date();
    if (this.view.TextAreaNewTweet.text !== '') {
      tweetData = {
        userId: key.id,
        content: this.view.TextAreaNewTweet.text,
        date: d.toISOString(),
        locLatitude: 0,
        locLongitude:0
      };
      alert(JSON.stringify(tweetData));
      tweet.createTweet(tweetData, this.successfulTweet,this.error );
    }
    else {
      alert('please submit something');
    }
  },

  successfulTweet:function() {
    alert('tweet created!');	
    var ntf = new kony.mvc.Navigation("ListingForm");
    ntf.navigate(); 
  },

  error:function(err) {
    alert(err);
  }

});