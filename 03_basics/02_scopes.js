// Global scope  : is the outer part par iska value andar use hosakta hai
a=100
b=500
c=300

// Block socpe : is the inner part jaha iski value bahar nahi jati
if (true) {
    let a = 10
    const b = 20
    var c = 30   // we don't use var for this reason because it doesn't obey the global and block scope rule
    console.log(a);
    console.log(b);
    
}


console.log(a);
console.log(b);
console.log(c);


function 
