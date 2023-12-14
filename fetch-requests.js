/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/

// Your code here
fetch('/posts')
  .then(res => res.json())
  .then(resBody => console.log(resBody));

/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.
*/

// Your code here
fetch('/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: {
    message: 'this is a new post!'
  }
})
  .then(res => res.json())
  .then(resBody => console.log(resBody));
