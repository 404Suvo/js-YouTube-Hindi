// const myNumbers = [ 1,2,3,4,5,6,7,8,9,10]

// for (let i = 0; i < myNumbers.length; i++) {
//     myNumbers[i] = myNumbers[i] + 10
    
// }
// console.log(myNumbers);


const myNumbers = [ 1,2,3,4,5,6,7,8,9,10]

// const newnums = myNumbers.map( (num) => num + 10 )

const newnums = myNumbers
                    .map( (num) => num * 10 )         // we can use multiple function called chaining and the value of a function tansfer to another func
                    .map( (num) => num + 1 )
                    .filter( (num) => num >= 40 )

console.log(newnums);
