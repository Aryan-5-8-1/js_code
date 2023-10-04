const score=400 // here js automatically define that is the number.
console.log(score);

// But ewe define by own that it is number.
const balance=new Number(500)
console.log(balance);

// number converted to string
console.log(balance.toString);

console.log(balance.toFixed(2));
// Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
// Returns a string representing
//  a number in fixed-point notation.

console.log(balance.toPrecision(2));

/*
Returns a string containing a number represented 
either in exponential or fixed-point notation with a specified number of digits.

@param precision — Number of significant digits. Must be in the range 1 - 21, inclusive.
*/

const hundreds=10000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++(MATHS)+++++++++++++++++++
// console.log(Math);         // math ek object hain
// console.log(Math).abs(-4);  // -ve ko +ve kardega
// console.log(Math.round(4.6)); // round off
// console.log(Math.ceil(4.5)); // jara bhi 4 se zada hua 5 return kardega
// console.log(Math.floor(4.9)); // 4 ayega neeche wali values legaa

// +++++ (Math.random()) +++++ Important
// in this always values comes btw 0 and 1.
// when we need random values betweeen 2 numbers we use it.
console.log(Math.random());
// if we want random values between 1 to 10
console.log(Math.random()*10);// yeh dedegaa but isme 0 bhi aasakta hain
// thats why now we add 1 also
console.log((Math.random()*10)+1);
// Q: find the random values between 10 and 20

const min=10;
const max=20;
 console.log(Math.floor((Math.random()*(max-min + 1) + min)));
 // so above part is very important: