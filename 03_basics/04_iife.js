// Immediately Invoked Function Expression (IIFE)


(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
    
})();       // global scope k pollution se problem hoti hai, uske pollution ko hatane k lia IIFE use karte hai


((name) => {       // semi colon is necessary for two iife
    // unnamed iife
    console.log(`DB CONNECTED ${name}`);
    
})("Subhajit")