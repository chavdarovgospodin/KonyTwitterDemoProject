define({ 

 //Type your controller code here 
 validate: function() {
   var email = this.view.txtUsername.text;
   var password = this.view.txtPassword.text;
   var validE, validP = false;
   var ntf = new kony.mvc.Navigation('ListingForm');
   
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
     //maybe get some user data back
     
     //if valid -> 
     //save email/username to LocalStorage
     //if(valid){
     //  let userInfo = {
     //     userName: email
     //  };

     //  try{
     //    kony.store.setItem('userInfo', userInfo);
     //    }
     //  }
     //catch() { alert('Can't save user information on the device.);}
     
     //navigate to Listing Form and pass userName and pass
     ntf.navigate();
   }
 },
  
  
  clearInput: function () {
    this.view.txtUsername.text = '';
    this.view.txtPassword.text = '';
  }

 });