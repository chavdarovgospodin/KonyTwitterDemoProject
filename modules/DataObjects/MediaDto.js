/**
Example usage:

var image = new MediaDto();
image.image = 'mybase64_string';
image.timeStamp = new Date().toISOString();
image.submit(function(result){
	//implement success callback function
}, function(error){
	//implement error callback function
});


*/

class MediaDto extends DataObject {
  constructor(data = {}) {
    super('media');
    
    super.defineProperty('image');
    super.defineProperty('date');
    
    this.state = Object.assign(this.state, data);
  }
  
  uploadImg(data, successCallback, failCallback){
    this.state = Object.assign({}, data);
    this.submit(successCallback, failCallback);
  }
  
  getBase64(id, successCallback, failCallback){

    this.state = Object.assign(this.state, {
      id: id  
    });
    
 alert(this.state); /////////
    
    this.fetch('id', function(result) {
      successCallback(this.state);
		return;
    }.bind(this), function(error) {
      alert(error);
    });
  }
  
}