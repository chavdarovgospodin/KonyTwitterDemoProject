define({ 

	context: null,
  
  
  
  
  //Executed every time we nagigate to the form.
  onNavigate: function (context, isBackButton) {
    
    if(context) {    //if context receives params as an argument from another form...
      //get context data
      let userName = context.userName;
      let userHandle = context.userHandle;
      let msg = context.msg;
      let img = context.img;
       
      
      //fetch user data and populate Profile Form
    }
  }

 });