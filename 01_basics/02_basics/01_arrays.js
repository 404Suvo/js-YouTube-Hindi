// Javascript arrays copies operations creates shallow copies which share the same reference and deep copies which do not share the same reference 

const myArr = [0,1,2,3,4,5,6,7,8,9]    // array is collection of datatypes and are resizable means we can remove or add 
const myHeros = ["Naruto", "Itachi"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[3]);

// array method

myArr.push(10)   // simply add the value
myArr.pop()     // remove the last element in the array
myArr.unshift(9)   // adds element to the first in the array
myArr.shift(9)    // removes the first element 

console.log(myArr.includes(7));   // checking is the element is there or not 
console.log(myArr.indexOf(0));   // give the element and it will tell its index

const newArr = myArr.join()   // addds all the element into a string means convert into string

console.log(newArr);
console.log(myArr);

// Slice, Splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)    // it doesn't manupulate the original array

console.log(myn1);
console.log(myArr);


const myn2 = myArr.splice(1,3)   // it manupulate the original array means it totally 

console.log(myn2);
console.log(myArr);

