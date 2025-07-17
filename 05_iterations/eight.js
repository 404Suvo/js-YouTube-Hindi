const myNums = [1,2,3]

//  const myTotal = myNums.reduce( function (acc, currval){
//     console.log(`acc: ${acc} currval: ${currval}`);
    
//     return acc + currval
// }, 0 )

// const myTotal = myNums.reduce( (acc, curr) => (acc + curr), 0 )

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 1899
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "java course",
        price: 99
    },
    {
        itemName: "dsa course",
        price: 2999
    }
]

const myTotal = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)
console.log(myTotal);
