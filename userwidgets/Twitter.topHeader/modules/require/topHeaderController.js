define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
      
      
      navToPrevious: function () {
        let nav = new kony.mvc.Navigation(kony.application.getPreviousForm().id);
        nav.navigate();
      },
      
      navToRegister: function () {
        let nav = kony.mvc.Navigation('RegisterForm');
        nav.navigate();
      },
      
      navToProfile: function () {
        let params = {};
        
        let nav = kony.mvc.Navigation('ProfileForm');
        nav.navigate(params);
      }
	};
});