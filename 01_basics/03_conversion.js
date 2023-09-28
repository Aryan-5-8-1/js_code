let score="33afg"

// console.log(typeof(score))
/*
here we use type of because sometimes as we work on backend we dont know 
the type of value.
*/

let valueInNumber=Number(score)
/*
it is converted to number means score basically is string and than by applying this we convert this 
into number. But it is not necessary ki vo convert ho hi jaaye.

*/
 // console.log(typeof(valueInNumber))
// it again shows strings.

// "33" => 33
// "33sjh" =>NaN
// T => 1; F =>0
 
let isLoggedIn=""

let booleanIsLoggedIn=Boolean(isLoggedIn)
 // console.log(booleanIsLoggedIn);
 // 1 -> t;0 -> f
 // "" ->false
 // " atyab" -> true

let someNumber=33
let stringNumber=String(someNumber)
///console.log(stringNumber);
// console.log(typeof(stringNumber)); // number -> string

// ************** operations *****************

let value=3;
let negValue=-value
// console.log(2+2);
// console.log(2*2);
// console.log(2-2);
// console.log(2/2);
// console.log(2%2);

let str1="hello"
let str2=" Aryan"
// console.log(str1+str2);

/*
here there is no problem arises ,problem is arises here in bottom case
*/
// console.log("3"+2); // it givs output 32 how?
// console.log("3"+2+2); // o/p=322
// console.log(2+"3");   // 23
// console.log("3"+2);   // 32
// console.log(1+2+"5"); // 35 =first add 1+2 than add 35
// if string is first than string ko pahele treat kiya jayegaa
// if number first hain to number ko pahele treat kiya jayega.
// console.log(+"");   // 0 op
// console.log(+true);  // 1 op + se convert ho jaata han

let num1,num2,num3
num1=num2=num3=2+2
// console.log(num1);
// console.log(num2);
// console.log(num3);

let gameCounter=100;
gameCounter++;    //postfix
++gameCounter;   // prefix
console.log(gameCounter);


