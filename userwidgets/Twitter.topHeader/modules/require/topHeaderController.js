define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },


    navToPrevious: function () {
      let previousForm = kony.application.getPreviousForm().id;
      if(kony.application.getCurrentForm().id === 'ProfileForm') {
        let nav = new kony.mvc.Navigation('ListingForm');
        nav.navigate();
      }
      else {
        let nav = new kony.mvc.Navigation(previousForm);
        nav.navigate();
      }        
    },

    
    navToRegister: function () {
      let nav = new kony.mvc.Navigation('RegisterForm');
      nav.navigate();
    },

    
    navToProfile: function () {
      let params = {};

      let nav = new kony.mvc.Navigation('ProfileForm');
      nav.navigate(params);
    }
  };
});