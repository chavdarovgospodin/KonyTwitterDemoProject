define({ 

  //Type your controller code here 
  validate: function() {
    var email = this.view.txtUsername.text;
    var password = this.view.txtPassword.text;
    var validE, validP = false;
    var ntf = new kony.mvc.Navigation('ListingForm'); // delete this later so it only navigates on successful user and pass match 

    if(!kony.string.isValidEmail(email)){
      validE = false;
      this.view.flxBorderUsername.skin = 'sknFlxBorderErr';
      this.view.lblErrUsername.isVisible = true;
    }else{
      validE = true;
      this.view.flxBorderUsername.skin = 'sknFlxDefBorder';
      this.view.lblErrUsername.isVisible = false;
    }

    if((password === null) || (password.length < 1)){
      validP = false;
      this.view.flxBorderPassword.skin = 'sknFlxBorderErr';
      this.view.lblErrPassword.isVisible = true;
    }else{
      validP = true;
      this.view.flxBorderPassword.skin = 'sknFlxDefBorder';
      this.view.lblErrPassword.isVisible = false;
    }

    if(validE && validP){

      var userDto = new UserDto();
      userDto.signIn( email, password, this.successLogin, this.failLogin); //email or username
    }
  },


  
  
  clearInput: function () {
    this.view.txtUsername.text = '';
    this.view.txtPassword.text = '';
    this.view.flxBorderPassword.skin = 'sknFlxDefBorder';
    this.view.flxBorderUsername.skin = 'sknFlxDefBorder';
    this.view.lblErrPassword.isVisible = false;
    this.view.lblErrUsername.isVisible = false;
  },


  
  successLogin: function (result) {

	//save to localStorage
	this.saveUser(result);

    //Navigate to another Form
    var ntf = new kony.mvc.Navigation('ListingForm');
    ntf.navigate();
  },


  failLogin: function (result) {
    alert(result);
  },
  
  
  
  
  /*
  * save User Data to LocalStorage
  */
  saveUser: function(userData){
    try{
      kony.store.setItem('userInfo', userData);
    }
    catch(err) { 
      alert("Can't save user information on the device.");
    }
  }

});