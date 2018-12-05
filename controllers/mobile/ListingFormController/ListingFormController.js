define({ 

  createNewTweet: function () {
    //get data from db

    var newComp = new Twitter.msg({
      "isVisible": true,
    }, {}, {});

    this.view.FlexMain.add(newComp);

    newComp.userName = name;
    newComp.userEmail = email;
    newComp.tweetMsg = description;
    newComp.imgUser = image;

  },


});