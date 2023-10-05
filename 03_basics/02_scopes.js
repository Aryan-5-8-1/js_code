var c=3000   
let a=256                  // global scope

// {} == this is scope in every programming languages mostly.

if(true){

let a=10
const b=20                       // local scope or block scope
 var c=30
console.log("Inner",a);
}
// console.log(a);    //  a is not defined it comes.
// console.log(b);    //  a is not defined it comes.
 console.log(c);       //  but 30 print hogya   not 3000 
//  because var ka ka
// Variables declared with the var keyword can NOT have block scope.

// Variables declared inside a { } block can be accessed from outside the block.
console.log(a); /// op:256 due to global scope

/*
when we check scope in browser it is different than what we check in code 
environment through node.

*/

