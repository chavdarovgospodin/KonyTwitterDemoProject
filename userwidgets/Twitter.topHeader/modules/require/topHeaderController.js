define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
      
      
      navToLogin: function () {
        let nav = kony.mvc.Navigation('LoginForm');
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