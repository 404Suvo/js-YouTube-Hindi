// if

// const isUserloggedIn = true
// const temperature = 51

// if (temperature < 50){
//     console.log("less than 50");
// } else {
//     console.log("temperature > 50");
    
// }

// console.log("execute");


// < , >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     const power= "fly"
//     console.log(`User power: ${power}`);
// }

//  console.log(`User power: ${power}`);


const balance = 1000

// if(balance > 500) console.log("test");   // implicite scope where curly braces is not there

// if (balance < 500){
//     console.log("less than 500");
    
// } else if (balance < 750){
//     console.log("less than 750");

// } else if (balance < 900){
//     console.log("less than 900");

// }else if (balance < 1200){
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard  ) {
    console.log("Allow to buy courses");
    
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}