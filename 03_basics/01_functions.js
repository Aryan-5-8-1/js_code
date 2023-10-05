function saymyName(){
    console.log("aryan");
}

// saymyName()    // function refernce call


// function addTwoNumbers(num1, num2){
//      console.log(num1 + num2); 
// }
// num1, num2 they are parametes when we make function
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers("a",3)
// "a",3 they are arguments when we call function

const result= addTwoNumbers(3,"4")
// console.log(result);    // op: undefined
// it is undefined because in the function it is consoled not returned .


function addTwoNumbers(num1, num2){
    const result= num1 + num2
    return result
}
const result2= addTwoNumbers(3,"4")
// console.log(result2);  // nuw here it is 34 not undefined because here the function returs the value,
// not consoled anything.

//  function loginUser(username){
//     if(username === undefined){
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`
//  }

//  console.log(loginUser("aryan"));

//  console.log(loginUser());   // undefined just logged in

 function loginUser(username = "ram"){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
 }

// now undefined hohi nahisakta ,minimum ram hi hoga 


function calculateCartPrice(val1,val2,...num1){
    return num1
}
/// ...num1 it is an rest operator,it retuns combine array.

// console.log(calculateCartPrice(200,400,500,555,898));        // [ 200, 400, 500 ]
// [ 500, 555, 898 ] because val1 = 200,val2=400, num1= left values in function  

// function calculateCartPrice(val1, ...num1,val2,){ // it is not valid



// FUNCTIONS WITH OBJECT

const user={
    username: "shivam",
    price: 199
}
function handleObject(anyObject){
    // console.log(`Username is ${anyObject.username} and he buy this lamp in ${anyObject.price} INR.`);
}

// handleObject(user)
// we also pass the object directly
handleObject({
    username: "satyam",
    price: 5645
})


// FUNTIONS WITH ARRAY
const myNewArray =[200, 400, 500, 600]
function returnSecondValue(getArray){
    return getArray[1]
}


// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([
    200,100,899
]));