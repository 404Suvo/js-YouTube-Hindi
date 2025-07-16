const user = {
    username: "subhajit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);    // this makes current context means all the variables in the scope can access through this
        // console.log(this);
        
    }

}

//  user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()

console.log(this);  // it will give empty

// function chai(){
//     let username = "subha"
//     console.log(this.username);  // undefined in functions
    
// }
// chai()

// const chai = function(){
//     let username = "Subhajit"
//     console.log(this.username);  // function in variable also this is undefined
    
// }

// chai()


 const chai = () => {       // arrow function
     let username = "Subhajit"
     console.log(this.username);  // arrow function in variable also this is undefined
    
 }

//  chai()


// Arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(2,8));



// Implicit return

const addTwo = (num1, num2) =>  (num1 + num2)   // implicit means i believe you don't need to write return
                                                // explicit return is when return is applied
console.log(addTwo(5,9))


const addThree = (num1, num2) =>  ({username: "Subhajit"})   // returning object

console.log(addThree(5,9))


// const myArray = [1,2,4,5,6]

// myArray.forEach()