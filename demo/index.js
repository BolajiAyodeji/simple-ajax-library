
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const display = document.getElementById('output');

const http = new simpleAJAX;

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


// Get Request
button1.addEventListener('click', getReq);

function getReq(e) {
  users = http.get('https://jsonplaceholder.typicode.com/users',
  (err, users) => {
    if(err) {
      console.log(err)
    } else {
    display.innerHTML = users;
    }
  });

  e.preventDefault();
}

// POST Request
button2.addEventListener('click', postReq);

function postReq(e) {
  http.post('https://jsonplaceholder.typicode.com/users',
  data, (err, post) => {
    if(err) {
      console.log(err)
    } else {
      display.innerHTML = post;
    }
  });

  e.preventDefault();
}

// PUT Request
button3.addEventListener('click', putReq);

function putReq(e) {
  http.put('https://jsonplaceholder.typicode.com/users/1',
  data, (err, post) => {
    if(err) {
      console.log(err)
    } else {
      display.innerHTML = post;
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
  display.innerHTML = response;
  }
});

  e.preventDefault();
}
