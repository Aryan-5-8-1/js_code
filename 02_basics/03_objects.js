/* singleton
const tinderuser = new Object()
when we make object from constructor than it is called singleton.
console.log(tinderuser);


{} == above part return empty object same as js literals.
 but we keep in mind that tinderuser is singleton oblect.

*/

const tinderuser ={} // it is non singleton object
tinderuser.id ="123abc"
tinderuser.name="sammy"
tinderuser.isLoggedin= false

// console.log(tinderuser);
 /*
const regularUser ={

    email: "nepali@pakao.com",
    fullname:{
        userfullname:{
            firstname: "netaji",
            lastname: "chaudhary",
            day:      "monday",
            number: 94797516
        }
    }
    // humne jo attribute liya hain vo khud object hain
    // and uske andar bhi object hain.
}

// now we aceess userfulname number
// console.log(regularUser.fullname.userfullname.number);
*/

// as we merge array we also merge objects.

const obj1 ={1:"a",2:"b",3:"c",4:"d"}
const obj2 ={9:"z",8:"y",7:"x"}
const obj3 ={obj1,obj2}
// console.log(obj3);
/*
op:
{
  obj1: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' },
  obj2: { '7': 'x', '8': 'y', '9': 'z' }
}
*/
const obj4 =Object.assign({},obj1,obj2)

/*
The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object.
 It returns the modified target object.
*/
// console.log(obj4);
/*
{
output:

  '1': 'a',
  '2': 'b',
  '3': 'c',
  '4': 'd',
  '7': 'x',
  '8': 'y',
  '9': 'z'

}

*/
// here we use spread operators for adding objects
const obj5 ={...obj1, ...obj2}
// console.log(obj5);


// we use this when values comes from database

const users=[
    {
        id:1,
        email:"h@gmail.com"
    }
]
// from database values comes in the form of object Array.

// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
//  [ 'id', 'name', 'isLoggedin' ] == output comes in the form of  array.
// console.log(Object.values(tinderuser));


// console.log(Object.entries(tinderuser));
// har key value ko array me bana diya jata hain
// [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedin', false ] ]

console.log(tinderuser.hasOwnProperty('isLoggedin'));  // op: true means yes hain yeh





