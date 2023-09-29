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

// const id=Symbol('123')
// const anotherId=Symbol('123')

// console.log(id === anotherId);
// it comes false.


/*
# Refernce type (Non Primitive) where er get reference of thr data type
Arrays
Objects


*/
// 
//Arrays
// const heroes[]=["aryan","aayushi","Dibbu"];

// objects
// let aryan={ 
//     name:"Aryan",
//     age:"22",

// }

// stack (Primitive)= idhar hume copy milta hain
//Heap(Non-Primitive)=idhar hume reference milta hain

// let myYtname="Aryan Tiwari"
// let anotherName=myYtname
// anotherName="satyam"

// console.log(anotherName);
// console.log(myYtname);
 /*
In this what happens,ki upar anotherName me myYtname ka copy diya gya,
refernce nahi,so primitive data type me copy diya jata hain.
*/

let user={
    address:"etawah",
    H_No:909
}

let user1=user 
user1.H_No=895
console.log(user.H_No);
console.log(user1.H_No);
// output donoka 895 hi aayega because dono me same refernce assign hojaayega.
// becauser user1 is an non primitive data type so it gets refernce from 
// user in heap memory
// so reference ka matlab jo bhi change kartey hain original value me hi kartey hain.
