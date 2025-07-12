const score = 400
 console.log(score);

const balance = new Number(100)   // it will speacially cast that it is a number
console.log(balance);

console.log(balance.toString().length);  // string length
console.log(balance.toFixed(1));        // it tells that after the value how many decimal places will come

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));   // it round off the data as per the given decimal places

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  // the localstring by default converts it to US standards but can change to indian standards by giving en-IN

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);                 // Math has many function and it is a object
console.log(Math.abs(-4));        // converts into positive
console.log(Math.round(4.5));    // round off the value
console.log(Math.ceil(4.2));    // always choose the top value
console.log(Math.floor(4.9));   // always choose the behind value
console.log(Math.min(4, 3, 6, 8));  // tells min
console.log(Math.max(4, 3, 6, 8));  // tells max

console.log(Math.random());  // always range from 0 to 1
console.log((Math.random()*10) + 1);    // now the minimum value is 1 not 0 and it ranges from 1-10
console.log(Math.floor(Math.random()*10) + 1);  // floor round off into lowest value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)