class UserDto extends DataObject {
  constructor(data = {}) {
    super('users');

    super.defineProperty('id');
    super.defineProperty('username');
    super.defineProperty('password');
    super.defineProperty('email');
    super.defineProperty('fullName');
    super.defineProperty('phone');
    super.defineProperty('address');
    super.defineProperty('coverImg');
    super.defineProperty('profileImg');
    super.defineProperty('passResetToken');
    
    
    this.state = Object.assign(this.state, data);
  }

  /**
  	username: string,
    password: string
  */
  signIn(username, password, successCallback, failCallback) {
    
    this.state = Object.assign(this.state, {
      email: username
    });

    this.fetch('email', function(result) {

        if (this.hashPassword(password) == result.password){
          successCallback(this.state);
          return;
        } else {
          failCallback("error: The password doesn't match the username.");
          return;
        }
      
    }.bind(this), function(result) {
      if(result === 'DataObject not found')
      	alert("error: The user doesn't exist.");
      else
        alert("Service error. Something went wrong.");
    });
  }

  /**
  	data: {
    	username: string
    	password: string (hashed)
    	email: string
    	fullName: string
    }
  */
  signUp(data, successCallback, failCallback) {
    //TODO: validate data
    this.state = Object.assign({}, data);
    this.submit(successCallback, failCallback);
  }

  /**
  	data: {
    	id: number,
    	username: string
    	password: string (hassed)
    	email: string
    	fullName: string
    	phone: string
    	address: string
    	coverImg: number
    	profileImg: number
    }
  */
  updateProfile(data, successCallback, failCallback) {
    this.state = Object.assign({}, data);
    this.submit(successCallback, failCallback);
  }

  hashPassword(password) {
    return MD5('kony&^%^&' + password + 'power!!1');
  }
}
