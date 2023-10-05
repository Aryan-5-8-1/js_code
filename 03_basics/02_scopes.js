var c=3000   
let a=256                  // global scope

// {} == this is scope in every programming languages mostly.

if(true){

let a=10
const b=20                       // local scope or block scope
 var c=30
// console.log("Inner",a);
}
// console.log(a);    //  a is not defined it comes.
// console.log(b);    //  a is not defined it comes.
//  console.log(c);       //  but 30 print hogya   not 3000 
//  because var ka ka
// Variables declared with the var keyword can NOT have block scope.

// Variables declared inside a { } block can be accessed from outside the block.
// console.log(a); /// op:256 due to global scope

/*
when we check scope in browser it is different than what we check in code 
environment through node.

*/

function one(){
    const username="satyam"
    function two(){
        const website="youtube"
        // console.log(username); // it is printed satyam because username's scope is global.
    }
    // console.log(website);        
     // here shows website is not defined because website is in block scope.
    // two()
}
// one()

// closure is also in Ifelse
if(true){
    const username="aryan"
    if(username === "aryan"){
        const website=" youtube"
        console.log(username + website);
    }
    // console.log(website)   // website not defined

}

// console.log(username);  // ussername not defiend


// +++++++++++++++++++ INTERESTING  ++++++++++++++++


addone(5)   // it will not throw any error.
function  addone(num){
    return num+1
}


// exactly the same thing happpened in different way.
addTwo(5)      // but it will throw an error because it is an variable.
// this is called hoisting. we fill study in detail further.
const addTwo = function(num){
    return num +2
}

// console.log(addTwo(5));




