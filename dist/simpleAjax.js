"use strict";

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
  var _this = this;

  this.http.open('GET', url, true);

  this.http.onload = function () {
    if (_this.http.status === 200) {
      callback(null, _this.http.responseText);
    } else {
      callback('Error: ' + _this.http.status);
    }
  };

  this.http.send();
}; // HTTP POST Request


simpleAJAX.prototype.post = function (url, data, callback) {
  var _this2 = this;

  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  this.http.onload = function () {
    callback(null, _this2.http.responseText);
  };

  this.http.send(JSON.stringify(data));
}; // HTTP PUT Request


simpleAJAX.prototype.put = function (url, data, callback) {
  var _this3 = this;

  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  this.http.onload = function () {
    callback(null, _this3.http.responseText);
  };

  this.http.send(JSON.stringify(data));
}; // HTTP DELETE Request


simpleAJAX.prototype.delete = function (url, callback) {
  var _this4 = this;

  this.http.open('DELETE', url, true);

  this.http.onload = function () {
    if (_this4.http.status === 200) {
      callback(null, 'Post Deleted!');
    } else {
      callback('Error: ' + _this4.http.status);
    }
  };

  this.http.send();
};