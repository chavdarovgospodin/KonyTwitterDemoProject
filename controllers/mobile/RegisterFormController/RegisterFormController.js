define({ 

  valiteForms: function () {

   
    if (this.validateInputFields(this.view.textBoxUsername) && this.validateInputFields(this.view.textBoxPassword) && this.validateRegex(this.view.textBoxUsername)) {    
        alert('user saved!');
        var ntf = new kony.mvc.Navigation("ListingForm");
        ntf.navigate();
        //save this user to the database
    }
    
  


    if(this.validateInputFields(this.view.textBoxUsername) && this.validateRegex(this.view.textBoxUsername)) {
      this.view.lblInvalidUsername.isVisible = false;
      this.view.FlexBorderUser.skin = 'skinFooterBorderDef';
    }
    else {
      this.view.lblInvalidUsername.isVisible = true;
      this.view.FlexBorderUser.skin = 'skinFlexBorderRed';
    }

    if(this.validateInputFields(this.view.textBoxPassword)) {
      this.view.lblInvalidPass.isVisible = false;
      this.view.FlexBorderPass.skin = 'skinFooterBorderDef';
    }
    else {
      this.view.lblInvalidPass.isVisible = true;
      this.view.FlexBorderPass.skin = 'skinFlexBorderRed';
    }

  },


  validateInputFields: function(input) {
    return input.text !== null && input.text !=='';
  },
  
  validateRegex: function (input) {
	var regex = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
   return input.text.match(regex);
  }

});