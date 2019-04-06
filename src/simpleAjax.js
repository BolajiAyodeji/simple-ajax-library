/**
 * simpleAjax Library
 * A simple AJAX Library for making HTTP Requests"
 *
 * @version 1.0.0
 * @author Bolaji Ayodeji
 * @license MIT
 */


function simpleAJAX() {
  this.http = new XMLHttpRequest();
}

// HTTP GET Request
simpleAJAX.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  this.http.onload = () => {
    if(this.http.status === 200) {
      callback(null, this.http.responseText);
    } else {
      callback('Error: ' + this.http.status);
    }
  }
  this.http.send();
}

// HTTP POST Request
simpleAJAX.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  this.http.onload = () => {
    callback(null, this.http.responseText);
    }
  this.http.send(JSON.stringify(data));
}

// HTTP PUT Request
simpleAJAX.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  this.http.onload = () => {
    callback(null, this.http.responseText);
    }
  this.http.send(JSON.stringify(data));
}

// HTTP DELETE Request
simpleAJAX.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  this.http.onload = () => {
    if(this.http.status === 200) {
      callback(null, 'Resource Deleted!');
    } else {
      callback('Error: ' + this.http.status);
    }
  }
  this.http.send();
}
