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



    /*
    *Executed when there is a click event on the profile image.
    *Uploads the new img to the database.
    */
    captureProfileImg: function (eventObject) {

      this.view.profileImage.base64 = eventObject.base64;
      var image = new MediaDto();
      var imgInfo = {
        image: eventObject.base64,
        date: new Date().toISOString()
      };

      image.uploadImg(imgInfo, function(result) {
        this.userInfo = Object.assign(this.userInfo, {profileImg: result.id});

        this.user.updateProfile(this.userInfo , () => {
          alert("successfully uploaded profile image.");
        }, (error) => {alert("Failed to update user information.\n" + error);});
        
      }.bind(this), this.failImgUpload);
    },



    /*
    *Executed when there is a click event on the Cover image.
    *Uploads the new img to the database.
    */
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
        }, (error) => {alert("Failed to update user information.\n" + error);});
        
      }.bind(this), this.failImgUpload);
    },



    /*
    * The failCallback if the image isn't successfully uploaded
    * to the database.
    */
    failImgUpload(error){
		alert(error);
    },


    
    
    /*
    *Executed every time on preShow of the Form.
    */
    loadImg() {
      
      let media = new MediaDto();
      media.loadImg(this.view.profileImage, this.userInfo.profileImg); //load user's profile img
      media.loadImg(this.view.coverPhoto, this.userInfo.coverImg);
    },
    
    
  };
});