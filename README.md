<div align="center">
  
![]()

</div>

# Getting Started

Download and include the JavaScript file ( [full version]() | [minified]() | [ES6 version]() )

```html
<script src="simpleAjax.js"></script>
```
```html
<script src="simpleAjax.min.js"></script>
```

```html
<script src="simpleAjax-ES6.js"></script>
```

# Contribution Guide

```bash
git clone https://github.com/BolajiAyodeji/simple-ajax-library.git
```
```bash
cd simple-ajax-library
```

# Examples

* GET Request

```js
posts = http.get('https://jsonplaceholder.typicode.com/posts',
(err, posts) => {
  if(err) {
    console.log(err)
  } else {
  console.log(posts);
  }
});
```
<br>

* POST Request

```js
const data = {
  userId: 101,
  title: 'Custom post',
  body: 'This is a custom post'
};

http.post('https://jsonplaceholder.typicode.com/posts',
data, (err, post) => {
  if(err) {
    console.log(err)
  } else {
    console.log(post);
  }
});
```
<br>

* PUT Request

```js
const data = {
  userId: 101,
  title: 'Custom post',
  body: 'This is a custom post'
};

http.put('https://jsonplaceholder.typicode.com/posts/1',
data, (err, post) => {
  if(err) {
    console.log(err)
  } else {
    console.log(post);
  }
});
```
<br>

* DELETE Request

```js
posts = http.delete('https://jsonplaceholder.typicode.com/posts/1',
(err, response) => {
  if(err) {
    console.log(err)
  } else {
  console.log(response);
  }
});
```

