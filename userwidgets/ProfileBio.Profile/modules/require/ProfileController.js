define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },

    //GLOBAL PROPERTY
    user: new UserDto(),
    userInfo: kony.store.getItem("userInfo"),



    captureProfileImg: function (eventObject) {

      this.view.profileImage.base64 = eventObject.base64;
      var image = new MediaDto();
      var imgInfo = {
        image: eventObject.base64,
        date: new Date().toISOString()
      };

      image.uploadImg(imgInfo, function(result){
        this.userInfo = Object.assign(this.userInfo, {profileImg: result.id});

        this.user.updateProfile(this.userInfo, () => {
          alert("successfully uploaded profile image.");
        }, this.failCallBack);
        
      }.bind(this), this.failCallBack);
    },



    captureCoverImg: function (eventObject) {

      this.view.coverPhoto.base64 = eventObject.base64;
      var image = new MediaDto();
      var imgInfo = {
        image: eventObject.base64,
        date: new Date().toISOString()
      };

      image.uploadImg(imgInfo, function(result) {

        this.userInfo = Object.assign(this.userInfo, {coverImg: result.id});

        this.user.updateProfile(this.userInfo, () => {
          alert("successfully uploaded the cover image.");
        }, this.failCallBack);
        
      }.bind(this), this.failCallBack);
    },





    loadImg() {

      let profileImg = this.view.profileImage;

      if(this.userInfo.profileImg) { //null if no img in database

        let media = new MediaDto();
        media.getBase64(this.userInfo.profileImg, function(result) {
          profileImg.base64 = result.image;
        }, this.failCallBack);
      }
    },



    failCallBack(error){
      alert(error);
    }
  };
});