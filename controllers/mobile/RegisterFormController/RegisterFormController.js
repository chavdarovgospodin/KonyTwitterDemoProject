define({ 

  valiteForms: function () {

    var regex = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (this.validateInputFields(this.view.textBoxUsername) && this.validateInputFields(this.view.textBoxPassword)) {
      if(this.view.textBoxUsername.text.match(regex)) {

        alert('user saved!');
        //var ntf = new kony.mvc.Navigation("listingForm");
        //ntf.navigate();
        //save this user to the database
      }
      else {
        alert('Invalid email');
      }
    }


    if(this.validateInputFields(this.view.textBoxUsername)) {
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
  }

});