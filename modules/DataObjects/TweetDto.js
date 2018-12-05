class TweetDto extends DataObject {
  constructor(data = {}) {
    super('Tweet');
    
    super.defineProperty('userId');
    super.defineProperty('parentId');
    super.defineProperty('content');
    super.defineProperty('date');
    super.defineProperty('media_id');
    super.defineProperty('locLatitude');
    super.defineProperty('locLongitude');
    super.defineProperty('isPoll');
    super.defineProperty('status');
    super.defineProperty('type');
    
    this.state = Object.assign({}, data);
  }
 
}