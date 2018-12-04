define({ 

 //Type your controller code here 
 validate: function() {
   var email = this.view.txtUsername.text;
   var password = this.view.txtPassword.text;
   var validE, validP = false;
   var ntf = new kony.mvc.Navigation('ListingForm');
   
   if(!kony.string.isValidEmail(email)){
     validE = false;
     this.view.flxBorderUsername.skin = 'flxBorderErrSkin';
     this.view.lblErrUsername.isVisible = true;
   }else{
     validE = true;
     this.view.flxBorderUsername.skin = 'sknFlxDefBorder';
     this.view.lblErrUsername.isVisible = false;
   }
   
   if((password === null) || (password.length < 1)){
     validP = false;
     this.view.flxBorderPassword.skin = 'flxBorderErrSkin';
     this.view.lblErrPassword.isVisible = true;
   }else{
     validP = true;
     this.view.flxBorderPassword.skin = 'sknFlxDefBorder';
     this.view.lblErrPassword.isVisible = false;
   }
   
   if(validE && validP){
     ntf.navigate();
   }
 }

 });