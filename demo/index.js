
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const outputGet = document.getElementById('output-get');
const outputPost = document.getElementById('output-post');
const outputPut = document.getElementById('output-put');
const outputDelete = document.getElementById('output-delete');

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

const http = new simpleAJAX();

// Get Request
button1.addEventListener('click', getReq);

function getReq(e) {
  users = http.get('https://jsonplaceholder.typicode.com/users',
  (err, users) => {
    if(err) {
      console.log(err)
    } else {
    outputGet.innerHTML = `<pre><code>${users}</code></pre>`;
    }
  });

  e.preventDefault();
}

// POST Request
button2.addEventListener('click', postReq);

function postReq(e) {
  http.post('https://jsonplaceholder.typicode.com/users',
  data, (err, user) => {
    if(err) {
      console.log(err)
    } else {
      outputPost.innerHTML = `<pre><code>${user}</code></pre>`;
    }
  });

  e.preventDefault();
}

// PUT Request
button3.addEventListener('click', putReq);

function putReq(e) {
  http.put('https://jsonplaceholder.typicode.com/users/1',
  data, (err, user) => {
    if(err) {
      console.log(err)
    } else {
      outputPut.innerHTML = `<pre><code>${user}</code></pre>`;
    }
  });

  e.preventDefault();
}

// DELETE Request
button4.addEventListener('click', delReq);

function delReq(e) {
users = http.delete('https://jsonplaceholder.typicode.com/users/1',
(err, response) => {
  if(err) {
    console.log(err)
  } else {
  outputDelete.innerHTML = `<pre><code>${response}</code></pre>`;;
  }
});

  e.preventDefault();
}
