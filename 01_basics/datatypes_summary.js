//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof id);
console.log(typeof score);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);




//-------------------------------------------------------------------------------------------------------


// stack (primitive), Heap (Non-primitive)

// IN Stack the copy of original is used 

let ffIdname = "SUBHO:)"

let anotherName = ffIdname
anotherName = "myTwitterId"

console.log(ffIdname);

console.log(anotherName);

// In Heap the reference is given means the original content is used

let userOne = {
    email:"user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "subhajit@google.com"

console.log(userOne);
console.log(userTwo);



