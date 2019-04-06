<div align="center">
  
[![Made in Nigeria](https://img.shields.io/badge/made%20in-nigeria-008751.svg?style=flat-square)](https://github.com/acekyd/made-in-nigeria)
[![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-red.svg?style=flat)](http://makeapullrequest.com)
[![first-timers-only Friendly](https://img.shields.io/badge/first--timers--only-friendly-blue.svg)](http://www.firsttimersonly.com/)
[![Open Source Helpers](https://www.codetriage.com/bolajiayodeji/simple-ajax-library/badges/users.svg)](https://www.codetriage.com/bolajiayodeji/simple-ajax-library)

</div>
<br>

# Getting Started

Download and include the JavaScript file | [full version](https://github.com/BolajiAyodeji/simple-ajax-library/blob/master/dist/simpleAjax.js) | [minified](https://github.com/BolajiAyodeji/simple-ajax-library/blob/master/dist/simpleAjax.min.js) | [ES6 version](https://github.com/BolajiAyodeji/simple-ajax-library/blob/master/src/simpleAjax.js) |

```html
<script src="simpleAjax.js"></script>
```
```html
<script src="simpleAjax.min.js"></script>
```
> Create a new simpleAjax
```js
const http = new simpleAjax;
```

# Examples

* GET Request

```js
users = http.get('https://jsonplaceholder.typicode.com/users',
  (err, users) => {
    if(err) {
      console.log(err)
    } else {
    console.log(users);
    }
  });
```
<br>

* POST Request

```js
const data = {
    "name": "Bolaji Ayodeji",
    "username": "bolajiayodeji",
    "email": "hi@bolajiayodeji.com",
    "address": {
      "street": "Hello world",
      "suite": "Hello",
      "city": "Lokoja, Kogi",
      "zipcode": "xxx-xxx-xxx",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "+234 8109445504",
    "website": "https://bolajiayodeji.com",
    "company": {
      "name": "PhilanthroLab",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
};

http.post('https://jsonplaceholder.typicode.com/users',
  data, (err, user) => {
    if(err) {
      console.log(err)
    } else {
      console.log(user);
    }
  });
```
<br>

* PUT Request

```js
const data = {
    "name": "Bolaji Ayodeji",
    "username": "bolajiayodeji",
    "email": "hi@bolajiayodeji.com",
    "address": {
      "street": "Hello world",
      "suite": "Hello",
      "city": "Lokoja, Kogi",
      "zipcode": "xxx-xxx-xxx",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "+234 8109445504",
    "website": "https://bolajiayodeji.com",
    "company": {
      "name": "PhilanthroLab",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
};

http.put('https://jsonplaceholder.typicode.com/users/1',
  data, (err, user) => {
    if(err) {
      console.log(err)
    } else {
      console.log(user);
    }
  });
```
<br>

* DELETE Request

```js
users = http.delete('https://jsonplaceholder.typicode.com/users/1',
(err, response) => {
  if(err) {
    console.log(err)
  } else {
  console.log(response);
  }
});
```

# Contribution Guide

```bash
git clone https://github.com/BolajiAyodeji/simple-ajax-library.git
```
```bash
cd simple-ajax-library
```
```bash
npm install
```
```bash
npm run build
```
