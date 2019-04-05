<div align="center">
  
![]()

</div>

# Installation Guide
Download the main script [here]() and the minified version [here]()

Add this before any other script
```html
<script src="simpleAjax.js"></script>
```
or use the minified version

```html
<script src="simpleAjax.min.js"></script>
```

# Contribution Guide
```bash
git clone https://github.com/BolajiAyodeji/simple-ajax-library.git
```
```bash
cd simple-ajax-library
```

# Usage

```js
const http = new simpleAJAX;
```

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

