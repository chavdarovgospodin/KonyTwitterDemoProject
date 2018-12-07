define({ 
  
  clearData: function() {
    this.view.TextAreaNewTweet.text = '';
  },

  createNewTweet: function() {
    
    // logic to be implemented here
    var ntf = new kony.mvc.Navigation("ListingForm");
    ntf.navigate(); 
  }

});