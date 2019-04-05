<div align="center">
  
# simple-ajax-library
A simple AJAX HTTP Library

</div>

# Installation Guide
```bash
git clone https://github.com/BolajiAyodeji/simple-ajax-library.git
```
```bash
rm -rf .git
```

In your root html file (`index.html`), add this before any other script
```html
<script src="simpleAjax.js"></script>
```

# Usage

```js
const http = new simpleAJAX;
```

- GET Request
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

- POST Request
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

- PUT Request
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

- DELETE Request
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

