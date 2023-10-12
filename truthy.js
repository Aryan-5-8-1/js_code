const userEmail ="ary@aws.com"
if(userEmail){
    console.log("got user email");
}else{
    console.log("dont have user email");
}
 
/*

some values we assume that it is always true.
and 
Some values we assume they are false.

*/

////////////////////////////////

/*
falsy values ::::::::::
   false,0,-0(negeative zero) , 0n(big int),"" 
   ,null,undefined,NaN

they all are false values
*/

// truthy values

/*
"0" , 'false' , " " , [] , {} , function(){}
*/

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
console.log("true");
}


/*
false == 0  -->> true
false == '' -->> true
0     == '' -->> true
*/

// Nullish coalescing operator (??) : null or undefined

let val1;
val1 = 5 ?? 10
// console.log(val1);      // 5

// val1 = null ?? 10
// console.log(val1);      // 10

val1 = null ?? undefined
console.log(val1);