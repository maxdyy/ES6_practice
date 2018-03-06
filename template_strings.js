// before ES6 we used + with escaping '' to join strings
// now we can use the backtick and ${} to interpolate

const a = 5;
const b = 2;

console.log(`a + b = ${a + b}`) // "a + b = 7"

// this is the basic idea of template string

// we also don't need to us the forward slash \
// for new lines

const name = `max`;
const markup = `
  <p> 
    Hello ${name}!
  </p>
`;

// we can also use template with functions 
// to create for example lists

const friends = [
  {name: `max`, age: 24},
  {name: `tim`, age: 26},
  {name: `alex`, age: 22},
];

const markup = 
  `<ul class="friends">
    ${friends.map(friend => 
      `<li class=${friend.name}>Name: ${friend.name} Age: ${friend.age}`
    ).join('')}
  </ul>`;


// it's a good idea to sanitize the data
// before adding it to html
// we can use the DOMPurify library for that