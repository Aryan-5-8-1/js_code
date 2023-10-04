let myDate=new Date() // it gives us today date
console.log(myDate.toDateString());    // day/maonth/date/year   Tue Oct 03 2023
console.log(myDate.toISOString());     //2023-10-03T15:13:32.411Z
console.log(myDate.toJSON());            // 2023-10-03T15:13:32.411Z
console.log(myDate.toLocaleDateString());  // 10/3/2023
//  month/date/year

// console.log(typeof(myDate));  // object

// +++++++++(but if we decleare any specific date)++++++++++++++++++++


// let myCreatedDate=new Date(2023,1,23) // month start from 0 in js
// console.log(myCreatedDate.toDateString());

// +++ (another method to decleare date)+++++++
// let myCreatedDate=new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());c


// +++ (another method to decleare date)+++++++
let myCreatedDate=new Date(2023,0,24,5,3)
// console.log(myCreatedDate.toLocaleString()); // op: 1/24/2023, 5:03:00 AM

// +++++++++{TIMESTAMP}+++++++++++++++++++

// let myTimeStamp=Date.now()
// console.log(myTimeStamp);  // op:1696143009589 (it gives this type of result.)
// console.log(myCreatedDate.getTime()); // from that we compare the two times.
// console.log(Math.floor(Date.now()/1000)); // converted to seconds

// +++++(if we want date,month,year)+++++

// console.log(myDate);
// console.log(myDate.getMonth());
// console.log(myDate.getDay());
// console.log(myDate.getFullYear());

// +++++(MOST IMPORTANT METHOD)+++++

// myCreatedDate.toLocaleString(
//     'default',{
//     weekday:"long", // ctrl+space dabao saare options aajayengry.
//     calendar:"add"
//     }
// )
// // in this we customize by our choice. 







