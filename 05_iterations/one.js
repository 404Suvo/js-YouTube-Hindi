// for

 for (let i = 0; i <= 10; i++) {
     const element = i;
     if (element == 5){
        // console.log("5 is the best bumber");
        
     }
    // console.log(element);
    
}

// console.log(element);  // outside is not accessible


for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop value: ${i}`);
        // console.log(i+ "*" +j+ "=" +(i*j));
        
    }
}


// let myArray = ["flash", "batman", "superman"]
// // console.log(myArray.length);

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i]
//     console.log(element);
// }


// Keywords: break and continue

for (let i = 1; i <= 20; i++) {
    if (i == 5){
        // console.log("5 is my fav number");
        break
    }
    // console.log(i);
    
}
for (let i = 1; i <= 20; i++) {
    if (i == 5){
        console.log("5 is my fav number");
        continue         // ek bar maff kardo
    }
    console.log(i);
    
}