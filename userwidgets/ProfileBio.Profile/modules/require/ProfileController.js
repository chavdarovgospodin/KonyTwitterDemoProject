define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
      
      captureProfileImg: function (eventObject) {
        this.view.profileImage.base64 = eventObject.base64;
      },
      
      captureCoverImg: function (eventObject) {
        this.view.coverPhoto.base64 = eventObject.base64;
      },
	};
});