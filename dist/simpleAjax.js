"use strict";

var _this = void 0;

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
} // HTTP GET Request


simpleAJAX.prototype.get = function (url, callback) {
  _this.http.open('GET', url, true);

  _this.http.onload = function () {
    if (_this.http.status === 200) {
      callback(null, _this.http.responseText);
    } else {
      callback('Error: ' + _this.http.status);
    }
  };

  _this.http.send();
}; // HTTP POST Request


simpleAJAX.prototype.post = function (url, data, callback) {
  _this.http.open('POST', url, true);

  _this.http.setRequestHeader('Content-type', 'application/json');

  _this.http.onload = function () {
    callback(null, _this.http.responseText);
  };

  _this.http.send(JSON.stringify(data));
}; // HTTP PUT Request


simpleAJAX.prototype.put = function (url, data, callback) {
  _this.http.open('PUT', url, true);

  _this.http.setRequestHeader('Content-type', 'application/json');

  _this.http.onload = function () {
    callback(null, _this.http.responseText);
  };

  _this.http.send(JSON.stringify(data));
}; // HTTP DELETE Request


simpleAJAX.prototype.delete = function (url, callback) {
  _this.http.open('DELETE', url, true);

  _this.http.onload = function () {
    if (_this.http.status === 200) {
      callback(null, 'Post Deleted!');
    } else {
      callback('Error: ' + _this.http.status);
    }
  };

  _this.http.send();
};