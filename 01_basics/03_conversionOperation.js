let score = "subhajit"

console.log(typeof score);
console.log(typeof (score)); // method 2

let valueInNumber = Number(score)
console.log(typeof (valueInNumber));
console.log(valueInNumber);


// "33" => 33
// "33Abc" => NaN = not a number 
// true => 1, false => 0

let isLoggedIN ="Subha"

let booleanIsLoggedIn = Boolean(isLoggedIN)

console.log(booleanIsLoggedIn);


// 1 => true, 0 => false
// "" => false, "subha" => true

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);

// ******************************* Operation *********************************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2/2);
console.log(2**2);
console.log(2%2);
console.log(2/2);
console.log(2*2);

let str1 = "hello"
let str2 = "Subhajit"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);

console.log(((3 + 4)* 5)% 3);  // always use paranthesis

console.log(+true);
console.log(+"");

let num1, num2, num3 

num1 = num2 = num3 = 2 + 2  // not a good way

let gameCounter = 100
++gameCounter;           // prefix operator
gameCounter++;           // postfix operator
console.log(gameCounter);

// link to study
//https://262.ecma-international.org/#sec-type-conversion
















