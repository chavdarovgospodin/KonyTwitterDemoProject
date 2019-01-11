define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },

    captureTweetImg: function (eventObject) {
      this.view.CameraWidget.base64 = eventObject.base64;
      
      var image = new MediaDto();
      image.image = eventObject.base64;
      image.timeStamp = new Date().toISOString();
      image.submit(this.success,this.error);
      
    },
    success:function() {
      alert('ok');
    },
    
    error:function(err) {
		console.log(err);
    }
  }; 
});