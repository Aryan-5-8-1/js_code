// Arrow functions introduce in 2015 in javascript.

const user={
    userName:"Aryan",
    price:999,
    
    welcomeMessage: function(){
        console.log(`${this.userName} , welcome to website`);
       console.log(this);
    }

    // this keyword is used to call current context.

}
// user.welcomeMessage()
// user.userName= "satyam"
// user.welcomeMessage()

/*
op of: user.welcomeMessage()
Aryan , welcome to website

{
  userName: 'Aryan', 
  price: 999,                // this refers to current context
  welcomeMessage: [Function: welcomeMessage]
}

op of: user.welcomeMessage()

satyam , welcome to website
{
  userName: 'satyam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/

// console.log(this);      // {} =empty object ko refer karta hain

// Browser ke andar global object window object hain
// and yaha pe empty object hain 


// ++++++++++( ARROW FUNCTION )++++++++

// function chai(){
//     let username = "pappu"
//     console.log(this);
// }
// chai()

// const chai = function(){
//     let username = "pappu"
//     console.log(this);
// }

//  chai()   // same output as above

// Arrow function is nothing erase the function name and store in some variable.
const chai = () => {           // arrow function
    let username = "pappu"      
    console.log(this);
}
// chai()

// syntax of arrow fxn ==  () => {}
// we alse hold this arrow function in some variable.
//  const addTwo=(num1,num2) => {
//     return num1+num2      // explicit return
//  } 

 

 // another way of arrow fxn is called implicit return.
 const addTwo=(num1,num2) => num1+num2
// implicit return of arrow fxn,which we used to return the result.
// console.log(addTwo(5,965));

// we alse return arrow function like that.
// const addTwo1=(num1,num2) => (num1+num2)
// console.log(addTwo1(589,65));

/* very important 
NOTE: CURLY BRACES == return type likhna padega.
      {} => return
      () => no return
*/

// if we want to retur the object
// const addTwo1=(num1,num2) => {userName: "aryan"}
// this is not a right method for returning an object.

const addTwo1=(num1,num2) => ({userName: "aryan"})
// above is the right method to return the object in arrow function.
console.log(addTwo1(5,6));    // op: { userName: 'aryan' }


 // arrow functions is also used in loops
   

