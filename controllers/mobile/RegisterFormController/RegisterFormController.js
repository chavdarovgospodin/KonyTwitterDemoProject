define({ 

  valiteForms: function () {

    if (this.validateInputFields(this.view.textBoxUsername) && this.validateInputFields(this.view.textBoxFullName) && this.validateInputFields(this.view.textBoxPassword) && this.validateInputFields(this.view.textBoxEmail) && this.validateRegex(this.view.textBoxEmail)) {    

      //save this user to the database
      var userData = {
          username: this.view.textBoxUsername.text,
          password: this.view.textBoxPassword.text,
          email: this.view.textBoxEmail.text,
          fullName: this.view.textBoxFullName.text
        };
      
      var newUser = new UserDto();
      newUser.signUp(userData, this.successCreatedAcc, function(result) {alert(result);});
    }
    
	//Username     
    if (this.validateInputFields(this.view.textBoxUsername)) {
      this.view.lblInvalidUsername.isVisible = false;
      this.view.FlexBorderPass.skin = 'sknFlxDefBorder';
    }
    else {
      this.view.lblInvalidUsername.isVisible = true;
      this.view.FlexBorderPass.skin = 'sknFlxBorderErr';
    }
	
    //Email     
    if (this.validateInputFields(this.view.textBoxEmail) && this.validateRegex(this.view.textBoxEmail)) {
      this.view.lblInvalidEmail.isVisible = false;
      this.view.FlexBorderUser.skin = 'sknFlxDefBorder';
    }
    else {
      this.view.lblInvalidEmail.isVisible = true;
      this.view.FlexBorderEmail.skin = 'sknFlxBorderErr';
    }
    
	//Full name     
    if(this.validateInputFields(this.view.textBoxFullName)) {
      this.view.lblInvalidFullName.isVisible = false;
      this.view.FlexBorderFullName.skin = 'sknFlxDefBorder';
    }
    else {
      this.view.lblInvalidFullName.isVisible = true;
      this.view.FlexBorderPass.skin = 'sknFlxBorderErr';
    }

	//Password     
    if (this.validateInputFields(this.view.textBoxPassword)) {
      this.view.lblInvalidPass.isVisible = false;
      this.view.FlexBorderPass.skin = 'sknFlxDefBorder';
    }
    else {
      this.view.lblInvalidPass.isVisible = true;
      this.view.FlexBorderPass.skin = 'sknFlxBorderErr';
    }

  },


  validateInputFields: function(input) {
    return input.text !== null && input.text !=='';
  },

  validateRegex: function (input) {
    var regex = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return input.text.match(regex);
  },

  defaultInputProp: function() {
    this.view.textBoxUsername.text = '';
    this.view.textBoxEmail.text = '';
    this.view.textBoxFullName.text = '';
    this.view.textBoxPassword.text = '';
    this.view.lblInvalidUsername.isVisible = false;
    this.view.FlexBorderUser.skin = 'sknFlxDefBorder';
    this.view.lblInvalidEmail.isVisible = false;
    this.view.FlexBorderEmail.skin = 'sknFlxDefBorder';
    this.view.lblInvalidFullName.isVisible = false;
    this.view.FlexBorderFullName.skin = 'sknFlxDefBorder';
    this.view.lblInvalidPass.isVisible = false;
    this.view.FlexBorderPass.skin = 'sknFlxDefBorder';
  },


  successCreatedAcc: function (result) {
    alert('Successfully created your account!');
    this.defaultInputProp();
    
    var ntf = new kony.mvc.Navigation("ListingForm");
    ntf.navigate();
  }
});