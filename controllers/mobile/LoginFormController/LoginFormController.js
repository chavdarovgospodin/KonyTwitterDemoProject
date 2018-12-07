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
     
     //check if email / username exists in database
     //check if password is valid for that user
     //var userDto = new UserDto();
     //userDto.signIn( email, password, this.successLogin, this.failLogin); //email or username
     
     
     ntf.navigate(); // delete this later so it only navigates on successful user and pass match
   }
 },
  
  
  clearInput: function () {
    this.view.txtUsername.text = '';
    this.view.txtPassword.text = '';
  },
  
  
  successLogin: function (result) {
	 //save email/username to LocalStorage
     //  let userInfo = {
     //     userName: email
     //  };

     //  try{
     //    kony.store.setItem('userInfo', userInfo);
     //    }
     //  }
     //catch() { alert('Can't save user information on the device.);}
     //
    var ntf = new kony.mvc.Navigation('ListingForm');
    ntf.navigate();
  },
  
  
  failLogin: function (result) {
    alert(result);
  }

 });