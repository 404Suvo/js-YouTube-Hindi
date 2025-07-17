// for of 

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1,2,3,4,5,6]

// for (const num of arr) {
//     console.log(num);
    
// }

// const greetings = "HelloWorld"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

// Maps is object holds key value pair, unique values 

 const map = new Map()
 map.set('IN', "India")
 map.set('USA', "United states of america")
 map.set('FR', "France")
 map.set('IN', "India")  // map only hold unique value pairs

// console.log(map);

for (const [key, value] of map){
    console.log(key, ':-', value);
    
}

const myObject = {
    game1: 'NFS',  
    game2: 'FF'
}

// for (const [key, value] of myObject) {    // for of loop is not working on objects
//     console.log(key, ':-', value);
    
// }