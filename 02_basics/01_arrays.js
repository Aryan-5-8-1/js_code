// Array

// java script array are resizable we anytime add any values.

const myArr = [0, 1,2,3,4,5]
// const myHeroes=["aryan","shivam","raju","jadoo"]

// console.log(myArr[0]);

// we decleare array in this way also
// const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[3]);

// methods in array
// myArr.push(7)
// console.log(myArr);

// myArr.pop()   last element ko pop kardegaa
// console.log(myArr);

// myArr.unshift(10)  // 10 will add to first index number.
// console.log(myArr);
// myArr.shift()  // remove unshift operation from the array.
// console.log(myArr.includes(6));
// console.log(myArr.indexOf(6));

// const newArr = myArr.join()  // it will convert number array into string.
// console.log(typeof newArr);

// +++++++important++++

// slice and splice method

// console.log("A",myArr);

// slice operation
// in this 4 is not included
// console.log(myArr.slice(2,4));       //  op: [ 2, 3 ]
// console.log("B", myArr);            //   op: B [ 0, 1, 2, 3, 4, 5 ]
// slice method not manipualte original array.

// splice operation

// console.log(myArr.splice(2,4));      // [ 2, 3, 4, 5 ]
// console.log("C", myArr);             // op: C [ 0, 1 ]   manipulates the old array
// this operation manipulates original array

const myHeroes=["aryan","shivam","raju","jadoo"]
const family = ["papa","mummy","bhaiya","tai ji"]
// myHeroes.push(family)

// console.log(myHeroes);  // myheroes ke andar family ko ek single elemnent samajh ke usne leliyaa
//  [
//   'aryan',
//   'shivam',
//   'raju',
//   'jadoo',
//   [ 'papa', 'mummy', 'bhaiya', 'tai ji' ]
// ]


// console.log(myHeroes[4][2]);   // op: bhaiya



// we also use  concat method for the same operation

  const allmem = myHeroes.concat(family)
  // console.log(allmem);

//   ['aryan',  'shivam', 'raju',   'jadoo',  'papa',   'mummy','bhaiya', 'tai ji']
// this is the output of concat method. it will not add as a single element 


// many programmers not use concat so we use "spread" method
/*
++++++++IMPORTANT!!! IMPORTANT!!!!!!!+++++++
const all_fm =[...allmem, ...family] // spread 
console.log(all_fm);
*/

const another_array = [1,2,3,[4,5,6],7,8,[9,10,11,[12,13,45,[47,89.23,98]]]]
const real_another_array=another_array.flat(Infinity)

// flat method saare arrays ko hata degea aur ek single array bana degaa.
// console.log(real_another_array);
/*
output of flat method.

[
   1,  2,  3,     4,
   5,  6,  7,     8,
   9, 10, 11,    12,
  13, 45, 47, 89.23,
  98
]
*/


//  when we scarap data from somewhere : >>>>>>>>>>>

 Array.isArray("aryan")   // puchegeyy ki aryan ek array hain kyaa
// console.log(Array.isArray("aryan"));
//  console.log(Array.from("aryan"));          // op: [ 'a', 'r', 'y', 'a', 'n' ] converted to array

// console.log(Array.from({name: "aryan"}));    // it will return empty array because it not directly converted .
                                             // thats why it returns empty array

let score1=100
let score2=200
let score3=300

// we have to convert this multiple variables into Array. we use Array.of method
console.log(Array.of(score1,score2,score3));    // [ 100, 200, 300 ]



  
  


