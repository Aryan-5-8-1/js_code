// Immediately Invoked Function expressions (IIFE)
// An IIFE (Immediately Invoked Function Expression) is a JavaScript 
// function that runs as soon as it is defined.

// This prevents accessing variables within the 
// IIFE idiom as well as polluting the global scope.

// GLOBEL SCOPE KO POLLUTE HONE SE BACHATA HAIN.
// globel scope se problem hoti hain kahi baar,
// to use hatane ke liye humne IIFE use kiya.

// syntax ==>> (1)(2)
// (1) == it is used to write function.
// (2) ==  execution of the function.

// ++++++++(IIFE)+++++++

(function chai(){
    // named IIFE
    console.log("ek chuski chai ki");
})();

// when we call IIFE FXN 
// WE HAVE TO USE (;) semicolons to end this context.


// just go to terminal and execute it
// execute ho jay egaa
// ek chuski chai ki  ==>>  output

// IIFE IN ARROW FXN
(() =>console.log("ek swad chai kaa"))();

((name) =>console.log(`good mornig ${name} `))("mummy");          // good mornig mummy 





