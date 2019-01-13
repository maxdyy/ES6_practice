// Promises are used when you're fetching data.
// It is something that will happen between the beginning
// and the end of time. Since javascript is asynchronous
// this is a very important thing 

const posts = fetch("https://jsonplaceholder.typicode.com/posts");

// Now the const posts is a promise, that waits the result of
// the fetch API. 

// We can listen to promises using different methods

posts
  .then(data => data.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

// The .then callback takes a function, that takes the fetched data
// and uses it to create a json, and then console log it or
// it if the fetch return an error, we can catch it with .catch()

// We can also create our own Promises

const myPromise = new Promise((resolve, reject) => {
  resolve("Success!");

  reject(Error("Fail!"));
})

// The resolve function is triggered when our promise reaches a
// successful result, wether it's a API fetch or some data return.
// The reject function is triggered when we decide that our promise
// shout return an error

const travelers = [
  { name: "Max", age: "25" },
  { name: "Nick", age: "24" },
  { name: "Alex", age: "32" },
];

const travels = [
  { traveler: "Max", destination: "New York" },
  { traveler: "Nick", destination: "Hong Kong" },
  { traveler: "Alex", destination: "Venice" },
]

// Lets assume that we have two separated databases
// they will be accessed at the same time, but can return 
// their values at different speed.

function getDestinationByName(name) {
  // Creating a new promise
  return new Promise((resolve, reject) => {
    // Looking for the post
    const travelSearch = travels.find( travel => travel.traveler === name);
    // Managing resolve or reject
    if (travelSearch) {
      const { destination } = travelSearch;
      resolve(destination);
    } else {
      reject(Error(`No destination found with name:   ${name}`));
    }
  })
}

getDestinationByName("Max")
  .then(data => console.log(data))
  .catch(error => console.log(error));

// We can create a function to manage two different data sources

function getFullTravelDetails(name) {
  // New promise
  return new Promise((resolve, reject) => {
    // Looking for our data
    const travelerSearch = travelers.find(traveler => traveler.name === name);
    const travelSearch = travels.find(travel => travel.traveler === name);

    // Managing the resolve and reject
    if (travelerSearch && travelSearch) {
      const { destination } = travelSearch;
      const fullInfo = { ...travelerSearch, destination};
      resolve(fullInfo);
    } else {
      reject(Error(`No full info found for traveler ${name}`))
    }
  })
}

getFullTravelDetails("Alex")
  .then(data => console.log(data))
  .catch(error => console.log(error))
  

// When working with multiple promises often we will need
// to manage the data of more promises at once

const posts = fetch("https://jsonplaceholder.typicode.com/posts");
const users = fetch("https://jsonplaceholder.typicode.com/users");

Promise
  .all([posts, users])
  .then(responses => {
    const [posts, users] = responses;
    const formattedPosts = posts.json();
    const formattedUsers = users.json();

    formattedPosts
      .then(data => console.log(data))
      .catch(error => console.log(error));

    formattedUsers
      .then(data => console.log(data))
      .catch(error => console.log(error));
  });

