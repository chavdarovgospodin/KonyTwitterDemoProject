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
    super('media', 'id');
    
    super.defineProperty('image');
    super.defineProperty('date');
    
    this.state = Object.assign(this.state, data);
  }
  
  

  /*
  *Attempts to upload an image to the database.
  */
  uploadImg(data, successCallback, failCallback){
    this.state = Object.assign(this.state, data);
    this.submit(successCallback, failCallback);
  }
  
  
  /*
  *Load an image into a specific image Element.
  @targetElem - The element where to insert the image
  @imgId - number - The id of the image in the database
  */
  loadImg(targetElem, imgId) {

      if(imgId) { //null if no img in database

        let media = new MediaDto();
        media.getBase64(imgId, function(result) {
          targetElem.base64 = result.image;
        }, function(error) {
          alert(error);
        });
      }
    }

  

  /*
  *Attempt to return the record of an image from the database
  * @id - number - The id of the image
  */
  getBase64(id, successCallback, failCallback) {

    this.state = Object.assign(this.state, {
      id: id  
    });

    this.fetch("id", function(result) {
      successCallback(this.state);
      return;
    }.bind(this), failCallback);
  }

}