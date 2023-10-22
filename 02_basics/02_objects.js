//singelton = constructors se object banegaa to singleton hoga
// Object.create  // yahi hain constructor se object ban naa


// OBJECT LITERALS
const mySym=Symbol("key1")
// const JsUser={}  empty object
const JsUser={
    name: "Aryan",
    "full name": "Aryan Tiwari",
    // mySym: "myKey1", if we use like that ,than it is used as a  string for that we used as
    [mySym]: "mykey1",   // we use like that to work as a symbol property.
    // bydefault system name ko strimg samajhta hain
    age: 18,
    location: "Etawah",
    email: "aryan@amazon.com",
    isLoggedin: false,
    lasrLoginDetails: ["monday","tuesday"]

} 
// console.log(JsUser.email); // we majaorly not use this because of full name type attributes.

// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
console.log(JsUser.mySym);   // op:comes mykey1
// console.log(typeof(JsUser.mySym));  op: string>> means in object it is not used as asymbol,it is used as a string. 
// console.log(JsUser[mySym]);

// change the values
JsUser.email = "aryan@haha.com"
// if we want that nobody change the value
//  Object.freeze(JsUser)
//  JsUser["full name"]="satyam"   // freeze karne ki wajajh se kuch change nahi hoga
//  console.log(JsUser["full name"]);
//  console.log(JsUser.email);
// console.log(JsUser);

// function decleare for object

JsUser.greeting = function(){
    console.log("hello javascript,kem cho!!");
}
console.log(JsUser.greeting());

// ++++ (when we want to call the attributes of objects ) +++++++
JsUser.greeting2 = function(){
    console.log(` hello ${this.name} ,kaa haal chacha`);
    // we use this to refernce the same object

}
console.log(JsUser.greeting2());
