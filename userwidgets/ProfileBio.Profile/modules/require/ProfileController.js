define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },

    captureProfileImg: function (eventObject) {
      
      this.view.profileImage.base64 = eventObject.base64;

      var image = new MediaDto();
      var imgInfo = {
        image: eventObject.base64,
        date: new Date().toISOString()
      };
      
      var user = new UserDto();
      var userInfo = kony.store.getItem("userInfo");	

      
      image.uploadImg(imgInfo, function(result){
        
        userInfo = Object.assign(userInfo, {profileImg: result.id});
        
        user.updateProfile(userInfo, function(result){
			alert("successfully uploaded profile image.");
        }, function(error){
          alert(error);
        });
        
      }, function(error){ 
        alert(error);
      });
    },

    captureCoverImg: function (eventObject) {
      this.view.coverPhoto.base64 = eventObject.base64;
      
      var image = new MediaDto();
      var imgInfo = {
        image: eventObject.base64,
        date: new Date().toISOString()
      };
      
      var user = new UserDto();
      var userInfo = kony.store.getItem("userInfo");	

      
      image.uploadImg(imgInfo, function(result) {
        
        userInfo = Object.assign(userInfo, {coverImg: result.id});
        
        user.updateProfile(userInfo, function(result) {
          alert("successfully uploaded the cover image.");
        }, function(error){
          alert(error);
        });
        
      }, function(error){ 
        alert(error);
      });
    },
    
    
    loadImg() {
      
      let profileImg = this.view.profileImage;
      let userInfo = kony.store.getItem("userInfo");
      
      if(userInfo.profileImg){ //null if no img in database
        
        let media = new MediaDto();
        media.getBase64(userInfo.profileImg, function(result) {
          
          alert(result);
          profileImg.base64 = result.image;
        }, function(error){
          alert(error);
        });
      }
    }
    
    
  };
});