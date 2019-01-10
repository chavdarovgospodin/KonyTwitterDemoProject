define({ 

  valiteForms: function () {

    if (this.validateInputFields(this.view.textBoxUsername) && this.validateInputFields(this.view.textBoxFullName) && this.validateInputFields(this.view.textBoxPassword) && this.validateInputFields(this.view.textBoxEmail) && this.validateRegex(this.view.textBoxEmail)) {    

      var newUser = new UserDto();
      //save this user to the database
      var userData = {
        username: this.view.textBoxUsername.text,
        password: newUser.hashPassword(this.view.textBoxPassword.text),
        email: this.view.textBoxEmail.text,
        fullName: this.view.textBoxFullName.text
      };

      newUser.signUp(userData, this.successCreatedAcc, this.failCallback);
    }

    //Username     
    if (this.validateInputFields(this.view.textBoxUsername)) {
      this.view.lblInvalidUsername.isVisible = false;
      this.view.FlexBorderUser.skin = 'sknFlxDefBorder';
    }
    else {
      this.view.lblInvalidUsername.isVisible = true;
      this.view.FlexBorderUser.skin = 'sknFlxBorderErr';
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
      this.view.FlexBorderFullName.skin = 'sknFlxBorderErr';
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

  failCallback:function () {
    alert ('failed to submit');
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
    this.view.FlexBorderEmail.skin = 'sknFlxDefBorder';
    this.view.FlexBorderFullName.skin = 'sknFlxDefBorder';
    this.view.FlexBorderPass.skin = 'sknFlxDefBorder';
    this.view.FlexBorderUser.skin = 'sknFlxDefBorder';
    this.view.lblInvalidFullName.isVisible = false;
    this.view.lblInvalidUsername.isVisible = false;
    this.view.lblInvalidEmail.isVisible = false;
    this.view.lblInvalidPass.isVisible = false;
  },


  successCreatedAcc: function (result) {
    try {
      kony.store.setItem('userInfo', result);
      alert(kony.store.getItem('userInfo'));
    }
    catch(err) {
      alert(err);
      }
    this.defaultInputProp();
//     alert('Successfully created your account!');
    var ntf = new kony.mvc.Navigation("ListingForm");
    ntf.navigate();
  }
});