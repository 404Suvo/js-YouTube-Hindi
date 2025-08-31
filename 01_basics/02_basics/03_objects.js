// // object literals 

// const mySymbol =Symbol("key1")   // taking a symbol

// // this is not a singleton object
// const Jsuser = {
//     name: "Subhajit",
//     "full Name": "Subhajit Das",    // the key is string so method 2 is the only option to access the key
//     [mySymbol]: "myKey1",             // syntax
//     Age: 19,
//     location: "Kolkata",
//     email: "jitsubha@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// console.log(Jsuser.email);   // method 1 to access
// console.log(Jsuser["email"]);   // method 2 to access
// console.log(Jsuser["full Name"]);  // method 2 is the only option
// console.log(Jsuser[mySymbol]);        // syntax

// Jsuser.email = "chatgpt1234@gmail.com"
// Object.freeze(Jsuser)                // it freeze the last changed email
// Jsuser.email = "microsoft234@gmaill.com"    // so email will not change 

// console.log(Jsuser["email"]);   // email doesn't change
// console.log(Jsuser);


// // Ways of declearing functions  

// Jsuser.func1 = function(){
//     console.log("Hello World");
// }

// Jsuser.func2 = function(){
//     console.log(`Hello ${this.name} welcome to Js`);  // this access the keys and its values 
// }

// console.log(Jsuser.func1());
// console.log(Jsuser.func2());








