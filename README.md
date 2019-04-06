
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
const http = new simpleAJAX;
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
