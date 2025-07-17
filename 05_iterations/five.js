const coding = ["js", "ruby", "c++", "java",  "python", "cpp"]

// coding.forEach( function (item) {   // we don't have to write all 
//     console.log(item);
    
// } )


// coding.forEach( (item) => {   // we don't have to write all 
//     console.log(item);
// } )


// function printMe(item) {
//     console.log(item); 
// }

// coding.forEach(printMe)   // we just give the reference not execution

// coding.forEach( (item, index, arr) => {   // it has more parameters
//     console.log(item, index, arr);
    
// })

const myCoding = [ 
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
    
} )