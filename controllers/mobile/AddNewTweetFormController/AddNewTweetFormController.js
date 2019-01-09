define({ 

  clearData: function() {
    this.view.TextAreaNewTweet.text = '';
  },

  createNewTweet: function() {
    var tweet = new TweetDto();
    var key = tweet.getKey();
    alert(key);
    var tweetData;
    var d = new Date();
    d = new Date(d.getTime() - 3000000);
    var date_format_str = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";
 
    if (this.view.TextAreaNewTweet.text !== '') {
      tweetData = {
        userId: key,
        content: this.view.TextAreaNewTweet.text,
        date: d,
        locLatitude: 0,
        locLongitude:0
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
  }

});