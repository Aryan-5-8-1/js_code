const name="Aryan"
const repoCount=50;

// console.log(name+repoCount); // it is outdated to use
// we use beckticks
// console.log(`hello my name is ${name} and my repo count is ${repoCount}`); 
// Above  is bektics

// we also decleare string by using new keyword.
const gameName= new String('Aryan_tiwari')

/*
SO DONT BE CONFUSE THAT IT IS AN ARRAY,IT IS KEY VALUE PAIRS
AT 0-> A IS PRESENT LIKE THAT
0
: 
"A"
1
: 
"r"
2
: 
"y"
3
: 
"a"
4
: 
"n"
*/

// console.log(gameName[0]) // op: A BECAUSE KEY VALUE PAIRS.
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.__proto__);
// console.log(gameName.charAt(2));

// console.log(gameName.substring(0,5)); // in this we cant use negeative values.
// console.log(gameName.slice(-10,4));   // it takes negeative values.

const A=new String(" aryan ")
// console.log(A);
// console.log(A.trim());

const url="https://aryan.com/aryan%20tiwari"
console.log(url.replace('%20','-'));




