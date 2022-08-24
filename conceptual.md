### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
Some ways you can manage asynchronous code in JS is by callbacks, promises, or by async/await functions.

- What is a Promise?
A promise is an object that is returned once it gets it's value back. Like getting a value from an API. 
- What are the differences between an async function and a regular function?
The async function communicates with the outside maybe via RESTApi's and a regular function doesn't have to depend on an outside force to produce a value.

- What is the difference between Node.js and Express.js?
Node.js is the javascript code that runes the servers, and express.js is the framework of Node.js that allows it do more features for applications.

- What is the error-first callback pattern?
The pattern is fs.methodFile.(the path you want to change, additional parameter for data, additional parameter for encoding, and a function that accounts for the data).

- What is middleware?
Middleware is the software that goes between the machine recieving the request and the request itself. It connects two applications together so that data and requests can be easily accessed. 
- What does the `next` function do?
The 'next' function allows us to continue our code after we run our callback functions, so our computer doesn't have to wait for an error to be resolved or a value to be provided.
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
The variables and the usernames aren't the same. I would have the variables at least equal the usernames.
I would also put a parameter to replace the const variables so we can enter the names dynamically instead of hardcoding variables for each individual names.