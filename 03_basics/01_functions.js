// function sayMyname(){
//     console.log("S");
//     console.log("U");
//     console.log("B");
//     console.log("H");
//     console.log("A");
//     console.log("J");
//     console.log("I");
//     console.log("T");
    
// }

// sayMyname()     // "sayMyname" is the reference and "()" is the execuion


// function addTwoNumbers(n1, n2){    // input called parameters
//     console.log(n1+n2);
    
// }
 

function addTwoNumbers(n1, n2){   
    // let result = n1 + n2
    // return result                   // after return no code will execute in function 
    return n1 + n2       // another method
}
 
const result = addTwoNumbers(5,5)      // value pass called arguments

console.log(result);


function logginUserMessage(userName= "Hitesh"){       // now this cannot be undefined if the argument is passed it will overwrite or it will be remain Hitesh
    if(!userName){     // userName === undefined    same meaning
        console.log("Please enter a userName");
        return    // after this no code will execute
    }
    return  `${userName} is a coder`
}

// console.log(logginUserMessage("Subhajit"))
console.log(logginUserMessage("Subhajit"))     // if the argument is empty then value returns is undefined



// Like a shopping cart we Don't know how many parameters are going to come 

function calculationCartPrice(val1, val2, ...num1) {  // here it is acting as a rest operator not a spread means it will turn the no of arguments into array
    return num1
}

console.log(calculationCartPrice(500, 500, 1000,44,222,599,999));     // 500 in val1, 500 in val2 and the rest are in the ...num1 array

const user={
    username: "Subhajit",
    price: 999
}

function handleObject(anyobject){
    console.log(`${anyobject.username} is selling a cource price ${anyobject.price}`);
     
}

// handleObject(user)

handleObject({               // another methpd
    username: "Subhajit", 
    price: 999
})

const evenNumber =[0,2,4,6,8,10]

function myNewArray(arrayobject){
    console.log(arrayobject[2]);
}
myNewArray(evenNumber)

