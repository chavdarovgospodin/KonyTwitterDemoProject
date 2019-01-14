class DataObject {
  constructor(objectName, keyName) {
    if (!objectName) {
      throw new Error('objectName should be defined.');
    }
    
    this.objectKey = keyName || 'id';
    this.objectName = objectName;
    this.state = {};
  }
  
  defineProperty(propName, defaultValue) {
    if (typeof propName !== 'string' || propName.length === 0) {
      throw new Error('propName should be defined.');
    }
    
    this.state[propName] = defaultValue || null;
  }
  
  getKey() {
    return this.objectKey;
  }
  
  deserialize(data) {
    for (let name in data) {
      if (data.hasOwnProperty(name)) {
        this.state[name] = data[name];
      }
    }
  }
  
  serialize() {
    let dataObject = new kony.sdk.dto.DataObject(this.objectName);
    for (let name in this.state) {
      if (this.state.hasOwnProperty(name)) {
        dataObject.addField(name, this.state[name]);
      }
    }
    
    return dataObject;
  }
  
  getServiceName() { return 'TestDB'; }
  
  fetch(key, successCallback, errorCallback) {
    const keyValue =  key || this.getKey();
    if (keyValue === null || typeof keyValue === 'undefined') {
      throw new Error('DataObject Key should be defined.');
    }

    const dataObject = new kony.sdk.dto.DataObject(this.objectName);
    dataObject.odataUrl = `$filter=${keyValue} eq ${this.state[keyValue]}`;

    const service = kony.sdk.getCurrentInstance().getObjectService(this.getServiceName(), { access: 'online' });
    service.fetch({dataObject}, function (response) {
      const error = (message) => {
        if (errorCallback) {
          errorCallback((new Error(message).message));
        }
      };
      
      if (!response || !response.records) {
        error('Unexpected response.');
        return;
      }

      switch (response.records.length) {
        case 0:
          error('DataObject not found');
          break;
        case 1:
          this.deserialize(response.records[0]);
          
          if (successCallback) {
            successCallback(this.state);
          }
          break;
        default:
          error('Multiple records found. Please check criteria.');
      }
    }.bind(this), errorCallback);
  }
  

  findAll(filters, options, successCallback, failCallback) {
    options = Object.assign({}, {
      pagination: false,
      itemsPerPage: 20,
      startFrom: 0,
      sorting: {
        field: 'asd',
        order: 'ASC'
      }
    }, options);
    
    const service = kony.sdk.getCurrentInstance().getObjectService(this.getServiceName(), { access: 'online' });
    service.fetch({
      "dataObject": this.createDataObject(filters, options)
    }, function(result) {
      successCallback(result.records);
    }, function(response) {
      failCallback(response);
    });
  }
  
  createDataObject(filters, options) {
    let dataObject = new kony.sdk.dto.DataObject(this.objectName);
    let oDataUrl  = '';

    filters = this.composeFilterODataURL(filters);
    if (filters !== "") {
      oDataUrl += filters;
    }

    if (options.pagination) {
      if (oDataUrl.length) {
        oDataUrl+= '&'; 
      }

      oDataUrl += "$top=" + options.itemsPerPage;
      oDataUrl += '&$skip=' + options.startFrom;
    }
    
    if (options.sorting) {
      if (oDataUrl.length) {
        oDataUrl+= '&'; 
      }
      oDataUrl += '$orderby=' + options.sorting.field + ' ' + options.sorting.order.toLowerCase();
    }

    //TODO add sorting functionality
    dataObject.setOdataUrl(oDataUrl);
    return dataObject;
  }

  composeFilterODataURL(filters) {
    return filters.length > 0 ? '$filter=' + filters.join(' and ') : '';
  }
  
  submit(successCallback, errorCallback) {
    const dataObject = this.serialize();
    const success = (response) => {
      if (!response[this.objectKey]) {
        if (errorCallback) {
          errorCallback((new Error('Failed to create DataObject').message));
        }
        return;
      }
      
      this.state[this.objectKey] = response[this.objectKey];
      
      if (successCallback) {
        successCallback(this.state);
      }
    };
    
    const service = kony.sdk.getCurrentInstance().getObjectService(this.getServiceName(), { access: 'online' });
    if (!this.getKey()) {
      service.create({dataObject}, success, errorCallback);
    } else {
      service.update({dataObject}, success, errorCallback);
    }
  }
  
  delete(fieldName, fieldValue, successCallback, failCallback) {
    const service = kony.sdk.getCurrentInstance().getObjectService(this.getServiceName(), { access: 'online' });
    let dataObject = new kony.sdk.dto.DataObject(this.objectName);
    dataObject.addField(fieldName, fieldValue);
    this.objectService.deleteRecord({
      "dataObject": dataObject
    }, function(result) {
      successCallback(result);
    }, function(res) {
      failCallback();
    });
  }
  
  
  /**
 * NOTE: All the placeholders are represented as <place-holder>, so just that part must be replaced
 * with the actual value, rest of the things must remain same.
 * Kony Fabric is auto initialized, only if the Kony Fabric app is linked in the Kony Visualizer.
 * In all other cases the Kony Fabric initialization code should be written by User if not done
 * already, for below sample to work.
 */
  //Code to invoke parent integration service should be present to use below code.
  getTweetsFiltered(userId) {
    
    let operationName =  "twitter-demo-team1_getTweetsFiltered";
    let data= {"UserIdVar": userId,"TopVar": "20","SkipVar": "0","SortFieldVar": "id","SortDirectionVar": "desc"};
    let headers= {};
    integrationObj.invokeOperation(operationName, headers, data, operationSuccess, operationFailure);  //defnite success and failure
    
    
    function operationSuccess(result) {
      //code for success call back
    }
    function operationFailure(error) {
      alert(error);
    }
  }
  
  
  
  /**
 * NOTE: All the placeholders are represented as <place-holder>, so just that part must be replaced
 * with the actual value, rest of the things must remain same.
 * Kony Fabric is auto initialized, only if the Kony Fabric app is linked in the Kony Visualizer.
 * In all other cases the Kony Fabric initialization code should be written by User if not done
 * already, for below sample to work.
 */
  //Code to invoke parent integration service should be present to use below code.
  getFeet(userId) {
    
    let operationName =  "twitter-demo-team1_getFeed";
    let data= {"UserIdVar": userId,"TopVar": "10","SkipVar": "0","SortFieldVar": "id","SortDirectionVar": "desc"};
    let headers= {};
    integrationObj.invokeOperation(operationName, headers, data, operationSuccess, operationFailure); //defnite success and failure
    
    function operationSuccess(res){
      //code for success call back
    }
    function operationFailure(res){
      //code for failure call back
    }
  }

}