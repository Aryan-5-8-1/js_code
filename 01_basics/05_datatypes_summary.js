/*
# Primitive Data Type: 7types ,ALL the primitive data types are call by value.

1:String
2:Number
3:Boolean
4:Null
5:Undefined
6:Symbol
7:BigInt
 
*/

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id === anotherId);
// it comes false.


/*
# Refernce type (Non Primitive) where er get reference of thr data type
Arrays
Objects


*/

//Arrays
const heroes[]=["aryan","aayushi","Dibbu"];

// objects
{
    name:"Aryan",
    age:"22",

}
