define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
      
      
      
      //Pass component info as an argument when navigating to the other form.
      navToProfile: function () {   
        let params = {
          				object: this.view,
          				userName: this.view.lblUserName,
          				userHandle: this.view.lblUserHandle,
          				msg: this.view.RichTextMsg.text,
          				img: this.view.imgUser.base64
        				};
        
        
        let profileForm = new kony.mvc.Navigation('ProfileForm');
        profileForm.navigate(params);
      }
      
      
      
	};
});