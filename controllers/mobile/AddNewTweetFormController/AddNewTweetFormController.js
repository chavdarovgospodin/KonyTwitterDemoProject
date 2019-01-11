define({ 
  
  imageSrc: '',

  clearData: function() {
    this.view.TextAreaNewTweet.text = '';
  },
  
  createNewTweet: function() {
    var tweet = new TweetDto();
	var key = kony.store.getItem('userInfo');   
    var tweetData;
    var d = new Date();
    var img = this.imageSrc;
    if (this.view.TextAreaNewTweet.text !== '' && img !== '') {
      tweetData = {
        userId: key.id,
        content: this.view.TextAreaNewTweet.text,
        date: d.toISOString(),
        locLatitude: 0,
        locLongitude:0,
     	image: img
      };
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
  },
  
  capture:function(eventObject){
	this.imageSrc = eventObject.base64;
  }

});