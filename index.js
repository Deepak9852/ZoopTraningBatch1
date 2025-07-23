// variable and constants

// (a = 9), (a = "mohan"), (a = true);

// // keywords

// var b = "Mohit";
// document.write(b + "<br>");

// var m;
// m = 9;

// document.write(m + "<br>");

// // variable declaration

// // var, let , const

// //  var keyword can be ra-declare and re-assign
// var k = 8;
// var k = 90;
// k = 1000;

// document.write(k + "<br>");

// // let keyword can be only re-assign

// let l = 80;
// // let l
// l = 190;

// document.write(l + "<br>");

// // const keyword neihter be re-declare nor re-assign

// const p = 500;
// // const p
// // p = 800;
// document.write(p + "<br>");

// scope

// block level scope

// loosely typed language

// data types....  primitive and non-primitive

// number , string, boolean , null , undefined , symbol, biginit

// let x = 9;
// let x = 9773783429878;

// document.write(typeof x + "<br>");

// let name = "Ankit";

// document.write(typeof name + "<br>");

// let bool = true;

// // let bool = "true";

// document.write(bool + "<br>");

// document.write(typeof bool + "<br>");

// let classes;

// document.write(typeof classes + "<br>");

// // bigInt()

// let lnumber = BigInt(7867673656378763763);

// document.write(typeof lnumber + "<br>");

// // symbol

// // let symb = Symbol(6666);

// let symb = Symbol("monkey");

// document.write(typeof symb + "<br>");

// let nothing = null;
// document.write(typeof nothing + "<br>");

// // ------------------------------------

// let num2 = 0;
// let num3 = 0;

// let result = num2 / num3;

// document.write(result + "<br>");
// document.write(typeof result + "<br>");

// non - primitive

// object --- object , array, Date

// // array
// let arr = [9, 10, 11];
// document.write(arr + "<br>");
// document.write(typeof arr + "<br>");

// let arr1 = ["mohan", "mohit", "Ankit"];

// let arr2 = [9, 10, 12, "mohan ", "sohan", true];

// // index number starts from 0
// //

// document.write(arr2 + "<br>");
// document.write(arr2[3] + "<br>");
// document.write(arr2[4] + "<br>");

// // date

// let date = new Date();

// document.write(date + "<br>" + "<br>");

// // math methods

// document.write(Math.E + "<br>");

// document.write(Math.LN2 + "<br>");

// let number = 8.605;
// document.write(Math.round(number) + "<br>");

// let number2 = 7.04;
// document.write(Math.ceil(number2) + "<br>");

// document.write(Math.floor(number2) + "<br>");

// document.write(Math.trunc(number2) + "<br>");

// document.write(Math.pow(22, 3) + "<br>");

// document.write(Math.random() * 10 + "<br>");
// document.write(Math.floor(Math.random() * 10) + "<br>" + "<br>");

// // string methods

// let greet = "Good Afternoon everyOne.";

// // length
// document.write(greet.length + "<br>");
// document.write(greet.toUpperCase() + "<br>");
// document.write(greet.toLowerCase() + "<br>");

// document.write(greet.substring(5, 12) + "<br>");
// document.write(greet.slice(5, 14) + "<br>");

// let ask = "     How are you?     ";
// document.write(ask.length + "<br>");
// document.write(ask.trim().length + "<br>");

// document.write(greet.concat(" ", ask) + "<br>");

// 25/06/2025

// naming convention

// pascal---- FirstName  ,
// camelcase ----- firstName,

// name $name 9name _name

document.write("<br>");

let naming = "Ankit";
let NAMING = "Anshu";
let $naming = "Ankita";
let _naming = "Anamika";

// case-sensitive
// javascript case-sensitive

// array

// 1-d array

let arr1 = ["manish", "Monika", "Ritesh"];

// document.write(arr1[2] + "<br>");

// 2-d array

let arr2 = [
  ["Rahul", "Shubham", "Saket"],
  "Mohit",
  ["manish", "Monika", "Ritesh"],
];

// document.write(arr2[1][2] + "<br>");
// document.write(arr2[0] + "<br>");
// document.write(arr2[1] + "<br>");
// document.write(arr2[2] + "<br>");

let arr3 = [["Rohit", ["Swapnil", "Avinash", "Sanket", "Tushar"]]];

// document.write(arr3[0][0][3] + "<br>");

// document.write(arr2[0] + "<br>");

// arr1
// [-------------]

// arr2
// [
// ["Rahul", "Shubham", "Saket"]    index0
// mohit  index1
// ["manish", "Monika", "Ritesh"]  index2
// ]

// [[["rahul"], "mohit", []]]

// row and coloum

// [

// [5 , 7 , 9]
// [6 , 8 , 3]
// [5, 11 , 10]

// ]
// document.write("Array Methods" + "<br>");

//  array  methods

let arrr = ["Manish", "Monika", "Ritesh", "Ankita", "Anshu", "Anamika"];

// document.write(arrr + "<br>");
// document.write(arrr.length + "<br>");
// document.write(arrr.toString() + "<br>");

// document.write(arrr.toString().length + "<br>");

// slice and splice

// let newArrr = arrr.slice(1);
// let newArrr = arrr.slice(1,4);

// arrr.splice(where new Element add or remove, how many Element want to remove, "write element here want to add")

// arrr.splice(3, 0, "Pune", "Mumbai");
// arrr.splice(3, 1, "Pune", "Mumbai");

// arrr.pop();
// arrr.push("Anant");

// arrr.shift();
// arrr.unshift("Ritika");

// document.write(newArrr + "<br>");

// document.write(arrr + "<br>");

// let arrr2 = [
//   "Manish",
//   "Monika",
//   "Ritesh",
//   "Ankita",
//   "Anshu",
//   ["Delhi"],
//   ["Mumbai", "Patna", "Pune", ["Apple", "Banana", "Mango"]],
// ];

// document.write(arrr2.length + "<br>");
// document.write(arrr2[6].length + "<br>");
// document.write(arrr2[6][3].length + "<br>");

// // object

// let obj = {
//   name: "mohan",
//   city: "pune",
// };

// document.write(obj.name + "<br>");
// document.write(obj.city + "<br>");

// // Nested object

// let obj1 = {
//   name: "Ankit",
//   age: 23,
//   class: 10,
//   address: {
//     street: "street no. 4",
//     city: "pune",
//     state: "maharastra",
//     pincode: 411014,
//   },
//   contact: {
//     phone: 6576467634,
//     email: "example@gmail.com",
//     "mob number": 878367673,
//   },
// };

// document.write(obj1.address.pincode + "<br>");
// document.write(typeof obj1.address.pincode + "<br>");
// document.write(obj1.contact["mob number"] + "<br>");

// let school = new Object();
// school.name = " Pune Public school";
// school.address = "Kharadi pune";

// document.write(school.name + "<br>");

// document.write(school["name"] + "<br>");

// object.assign

let college = new Object();
// let college = {};

// Object.assign(college, school);

// document.write(college.name + "<br>");

// // object.entries

// document.write(Object.entries(school) + "<br>");
// document.write(Object.values(school) + "<br>");
// document.write(Object.keys(school) + "<br>");

// object.groupBy()

// operators

let number1 = 99; // assignment operator

// Airthmetic operators

let numb1 = 66;
let numb2 = 22;

let add = numb1 + numb2;
let sub = numb1 - numb2;
let mult = numb1 * numb2;
let dvd = numb1 / numb2;
let mod = numb1 % numb2;

let inc = ++numb1;
let dec = --numb1;

// string litarals

// document.write(add + " " + sub + "<br>");
// document.write(
//   `add ${add} sub ${sub} mult ${mult} dvd ${dvd} mod ${mod} inc ${inc} dec ${dec}`
// );

document.write("<br>");

// comparison operator

let numb3 = "66";
let numb4 = 22;

// let comp = numb1 == numb3;
// let comp = numb1 != numb3;
// let comp1 = numb1 === numb3;
// let comp1 = numb1 !== numb3;

let comp = numb1 <= numb3;
let comp1 = numb1 >= numb3;

// document.write(comp + "<br>");
// document.write(comp1 + "<br>");

// (condition ) ? "value1" : "value2"

// let name4 = "ankita";
let name4 = true; //1

let name5 = false; //0

// document.write(name4 + name5 + "<br>");

// logical operator

// and && , or || , Not !

// truth table

// and operator
// true + true = true
// true + false = false
// false + true = false
// false + false = false

// or operator
// true + true = true
// true + false = true
// false + true = true
// false + false = false

// and operator negation
// true + true != false
// !true + false = false
// false + !true = false
// false + false = false

// Bitwise operator

// binary number
// 5 = 0101,
//  2^3 + 2^2 + 2^1 + 2^0
//  0 + 4 + 0 + 1 = 5

//  5 = 5/2 = 2/2
//  1 0 1

// 84  = 1010100,
//  2^6 + 2^5 + 2^4 + 2^3 + 2^2 + 2^1 + 2^0
//  64 + 0 + 16 + 0 + 4 + 0+ 0 = 84
//
//  16 =10000
// 2^4 + 2^3 + 2^2 + 2^1 + 2^0
//  16 + 0 = 16

//   28 = 11100
// 2^4 + 2^3 + 2^2 + 2^1 + 2^0
// 16 + 8 + 4 + 0 +0 = 28

// document.write((5 & 16) + "<br>");

// 00101
// 10000
// 00000 = 0

// document.write((84 & 28) + "<br>");

// 1010100
// 0011100
// 0010100 = 2^4 + 2^3 + 2^2 + 2^1 + 2^0
//            16 +0 + 4 + 0 + 0 = 20

// document.write((5 | 16) + "<br>");

// 00101
// 10000
// 10101 = 2^4 + 2^3 + 2^2 + 2^1 + 2^0
// 16 + 0 + 4 +0 + 1 = 21

// document.write((84 | 28) + "<br>");

// 1010100
// 0011100
// 1011100 = 2^6 + 2^5 + 2^4 + 2^3 + 2^2 + 2^1 + 2^0
//  64 + 0 + 16 + 8 + 4 + 0 + 0 = 92

// and &

// 1010100
// 0011100
// 0010100  = 2^6 + 2^5 + 2^4 + 2^3 + 2^2 + 2^1 + 2^0
//          = 0 + 0 + 16 + 0 + 4 + 0 + 0 = 20

// let d = new Date();
// let globalDate = d.toUTCString();
// document.write(globalDate + "<br>");
// document.write(d.getUTCHours() + "<br>");
// document.write(d.getUTCMinutes() + "<br>");

// document.write(d + "<br>");
// document.write(d.toString() + "<br>");
// document.write(d.toDateString() + "<br>");
// document.write(d.toLocaleDateString() + "<br>");
// document.write(d.toTimeString() + "<br>");

// document.write(d.toLocaleTimeString() + "<br>");
// document.write(d.getFullYear() + "<br>");
// document.write(d.getDay() + "<br>");
// document.write(d.getMonth() + "<br>");
// document.write(d.getDate() + "<br>");
// document.write(d.getHours() + "<br>");
// document.write(d.getMilliseconds() + "<br>");
// document.write(d.getTime() + "<br>"); // 1 jan 1970

// let years = 1751003525182 / (1000 * 60 * 60 * 24 * 365);
// document.write(years);

// let d = new Date("2041-05-26");

// document.write(d + "<br>");
// document.write(d.toString() + "<br>");
// document.write(d.toDateString() + "<br>");
// document.write(d.toLocaleDateString() + "<br>");
// document.write(d.toTimeString() + "<br>");
// document.write(d.toLocaleTimeString() + "<br>");
// document.write(d.getFullYear() + "<br>");
// document.write(d.getDay() + "<br>");
// document.write(d.getMonth() + "<br>");
// document.write(d.getDate() + "<br>");
// document.write(d.getHours() + "<br>");
// document.write(d.getMilliseconds() + "<br>");
// document.write(d.getTime() + "<br>"); // 1 jan 1970

// let years = 1751003525182 / (1000 * 60 * 60 * 24 * 365);
// document.write(years);

// NAN

// condition

// if else

// if (condition){
//   output statement
// }
// else{
//   output statement
// }

// let number10 = prompt("enter your number");

// if (number10 > 0) {
//   document.write(`${number10} is a positive number`);
// } else {
//   document.write(`${number10} is a zero or negative number`);
// }

// if (number10 == 0) {
//   document.write(`${number10} is zero`);
// } else if (number10 > 0) {
//   document.write(`${number10} is a positive number`);
// } else {
//   document.write(`${number10} is a  negative number`);
// }

// number is zero
// number is positive and ood
// number is negative and ood
// number is positive and even
// number is negative and even

// switch

// let num = prompt("enter a number");
// num = parseInt(num);
// switch (num) {
//   case 0:
//     day = "sunday";
//     break;

//   case 1:
//     day = "Monday";
//     break;

//   case 2:
//     day = "tuesday";
//     break;

//   default:
//     day = "Enter a correct number";
// }

// document.write(day + "<br>");

// day , month , customer care

// loop iterate

// for(initialized, condition, increment/decrement){
//   block of code
// }

//  i += 2   ~    i = i + 2

// for (let i = 1; i <= 20; i += 2) {
//   document.write(`${i} <br>`);
// }

// i = -1 -3 -5

// while

// let i = 1;
// while (i <= 20) {
//   document.write(`${i} <br>`);
//   i += 2;
// }

//do - while

// let i = 0;
// do {
//   document.write(`${i} <br>`);
//   i++;
// } while (i <= 20);

let arrrr = ["Sumit", "Sunil", "Ankit", "Anamika", "Anjali"];

document.write(`${arrrr} <br>`);

for (let name of arrrr) {
  document.write(`${name} <br>`);
}

let obj1 = {
  name: "Ankit",
  age: 23,
  class: 10,
  // address: {
  //   street: "street no. 4",
  //   city: "pune",
  //   state: "maharastra",
  //   pincode: 411014,
  // },
  // contact: {
  //   phone: 6576467634,
  //   email: "example@gmail.com",
  //   "mob number": 878367673,
  // },
};

for (let prop in obj1) {
  document.write(`${prop}  : ${obj1[prop]}<br>`);
}

// for loop continue and break
// use for in nested object
//  practice 40 questions from free code camp

// nested for loop

// for (let i = 0; i <= 5; i++) {
//   for (let j = 1; j <= 3; j++) {
//     for (let k = 7; k <= 10; k++) {
//       document.write(`${i}  : ${j} : ${k}<br>`);
//     }
//   }
// }

// i = 0, 0 , 0
// j = 1 , 2, 3

//  i = 1
// j = 1 , 2, 3

// i = 2
// j = 1 , 2, 3

// Function

document.write(` Hello Manish ! Good Morning <br>`);
document.write(` Hello Mukesh ! Good Morning <br>`);

// non - parameterised function

function greet() {
  let a = 5;
  let b = 10;
  let sum = a + b;
  document.write(`${sum}  <br>`);
}

// greet();
// greet();
// greet();

// function printCounting() {
//   for (let i = 1; i <= 100; i++) {
//     document.write(`${i} <br>`);
//   }
// }

// printCounting();
// printCounting();

// function printCountingWithParameter(start, condition, increment) {
//   for (let i = start; i <= condition; i += increment) {
//     document.write(`${i} <br>`);
//   }
// }

// printCountingWithParameter(3, 20, 1);
// printCountingWithParameter(9, 100, 5);

// function loop() {
//   for (let i = 0; i <= 5; i++) {
//     for (let j = 1; j <= 3; j++) {
//       for (let k = 7; k <= 10; k++) {
//         document.write(`${i}  : ${j} : ${k}<br>`);
//       }
//     }
//   }
// }

// loop();

// parameters and arguments

// parameterised function

// function sum(a, b) {
//   // a, b are parameter
//   let sum = a + b;
//   document.write(`${sum}  <br>`);
// }

// sum(9, 10); // 9, 10 arguments
// sum(20, 30);
// sum(1000, 2000);

// // return value

// function multi(j, k, l) {
//   return j * k * l;
// }

// let multValue = multi(10, 5, 8);
// document.write(`${multValue}  <br>`);

// let secondMultValue = multi(2, 3, 5);
// document.write(`${secondMultValue}  <br>`);

// // arrow function

// const multiply = (m, n, o) => m * n * o;
// document.write(`${multiply(5, 6, 8)}  <br>`);

// const addition = (x, y) => x + y;
// document.write(`Result from arrow function ${addition(100, 99)} <br>`);

// 5 function for each add sub mult divide

// greet students using arguments name , (morning, after noon or evening ) through function

// function greeting(name) {
//   let msg = `hello ${name} ! .................. <br>`;
//   document.write(msg);
// }

// greeting("Aman");
// greeting("Anshu");

var host1 = 88;
document.write(`${host1} <br>`);

// hoisting

document.write(`${host} <br>`);

var host = 76;
// let host = 76; // temporal dead zone (TDZ)
// const host = 76;

// random();
// function random() {
//   document.write(`Function Hoisting <br>`);
// }

// hoistingFunction();

// var hoistingFunction = function () {
//   document.write(`Function Hoisting expression <br>`);
// };
// hoistingFunction();

// scope

// global scope local scope block scope

// document.write(`${globalVariable} <br>`);

// var globalVariable = "Hey ! I am global variable";

// function gFunction() {
//   if (true) {
//     let blockVariable = "block variable";
//   }

//   var globalVariable = "Hey ! I am local variable";
//   document.write(`${blockVariable}  <br>`);

//   document.write(`${globalVariable}  <br>`);
// }

// gFunction();

// document.write(`${globalVariable} <br>`);

// clouser

function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

// const counter1 = counter();
// document.write(`${counter1()} <br>`);
// document.write(`${counter1()} <br>`);
// document.write(`${counter1()} <br>`);
// document.write(`${counter1()} <br>`);

// const counter2 = counter();
// document.write(`${counter2()} <br>`);
// document.write(`${counter2()} <br>`);
// document.write(`${counter2()} <br>`);

// document.write(`${counter1()} <br>`);
// document.write(`${counter2()} <br>`);

// let withoutCloser = 0;

// function withoutClouser1() {
//   let withoutCloser = 0;
//   withoutCloser++;
//   document.write(`${withoutCloser} <br>`);
// }

// withoutClouser1();
// withoutClouser1();

// find

const number12 = [1, 5, 10, 13, 16, 17];

const even = number12.find((number) => number % 2 == 0);
document.write(`${even} <br>`);

// object creation and manipulation

// 1
let student = {
  name: "Ajay",
  age: 23,
  dept: "CS",
  address: {
    city: "Pune",
    state: "Maharastra",
  },
};

// console.log(student.name);

const {
  name,
  age,
  dept,
  address: { city, state },
} = student;
// const { city, state } = student.address;

console.log(name, age, dept);
console.log(city, state);

student.city = "Pune";
student.state = "Maharastra";

delete student.age;

console.log(student);

// 2. object constructor
let vehical = new Object();

vehical.brand = "Toyota";

console.log(vehical);

// 3. function constructor

function car(model, year) {
  this.model = model;
  this.year = year;
}

const mycar = new car("carny", 2024);

console.log(mycar);

const colors = ["red", "blue", "green", "orange", "pink"];

const [c1, c2, c3, c4, c5] = colors;

console.log(c1);
console.log(c2);

// spread operator

let newColors = ["black", "grey", "white", ...colors];

console.log(newColors);

const numColor = [...number12, ...colors];
console.log(numColor);

// .................................
function sum(a, b, c, d) {
  return a + b + c + d;
}

const arg = [44, 66, 88, 99];
const result1 = sum(...arg);

const result = sum(4, 6, 99, 77);

console.log(result1);

// rest operator

function summation(...number) {
  return number.reduce((total, num) => total + num, 0);
}

const result5 = summation(66, 77, 99, 333, 9955, 444, 654, 867, 786, 65654);
console.log(result5);

const colr = ["red", "blue", "green", "orange", "pink"];

const [firstColor, secondColor, ...restcolor] = colr;

console.log(firstColor);
console.log(secondColor);
console.log(restcolor);

console.log(this); // global context

const user = {
  username: "ankit",
  city: " pune",

  message: function () {
    console.log(`${this.username} , welcome to ${this.city}`);
    console.log(this); // object context
  },
};
user.message();
user.username = "Avinash";
user.message();

function named() {
  let username = "Akash";
  console.log(`${this.username}`); // function context
  console.log(this);
}
named();

// call apply and bind

function greet(name, city, pin) {
  console.log(
    `hello ${name} ! my name is ${this.name} . you belongs to ${city} and pin code is ${pin} `
  );
}

let person = {
  name: "Avinash",
};

// greet.call(person, "Ankita");
// greet.call(person, "Mukesh");

greet.apply(person, ["Ansh", "Pune", 411014]);

let person1 = {
  name1: "Rahul",
  greet1: function () {
    console.log(`hello  ! my name is ${this.name1}`);
  },
};

let greetPerson = person1.greet1.bind(person1);
greetPerson();

const person2 = {
  firstname: "Ritik",
  lastname: "Singh",
  fullName: function () {
    return this.firstname + " " + this.lastname;
  },
};

let member = {
  firstname: "Sanket",
  lastname: "Gaur",
};

console.log(person2.fullName());

let fullName = person2.fullName.bind(member);

console.log(fullName());

// IIFE function

(function () {
  console.log(` hello , I am IIFE function`);
})();

(() => {
  console.log(` hello , I am IIFE function`);
})();

// higher order function

function multiplyBy(num1) {
  return function (num2) {
    return num1 * num2;
  };
}

let multiplyfunc = multiplyBy(8);

// let arr = [1, 2, 3];

// // let multarr = arr.map(multiplyfunc);

// let multarr = arr.map((num) => num * 3);

// console.log(multarr);

console.log(multiplyfunc(3));

// recursion

// factorial  5 - 1*2*3*4*5  , 0 = 1, 1=1,

function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(10));

// 5 * factorial (4)
// 5* 4 * factorial(3)
// 5* 4 * 3 * factorial(2)
//  5* 4 * 3* 2 * factorial(1)
// 5 * 4 * 3 * 2 * 1 = 120

// fibonacci series

function fibonacci(n) {
  if (n == 0 || n == 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(6));
console.log(fibonacci(8));

// 6 - 0 , 1 , 1 , 2 , 3 , 5  = 8
// 8 - 0 , 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21

// console.log("Hello world");
// console.log("Tutorial start");
// console.log("tutorial end");

// console.log(" start from here");

// setTimeout(() => {
//   console.log(" Interval");
// }, 2000);

// console.log("the end");

// callback, promise , asyn await

// function greet5(name, callback) {
//   console.log(name);
//   callback();
// }

// function bye() {
//   console.log(" Data Fetched...");
// }

// greet5("Avinash", bye);

// api

// function calc(a, b, c, callback) {
//   return callback(a, b, c);
// }

// function add2(x, y, z) {
//   return x + y + z;
// }

// function mullt1(x, y, z) {
//   return x * y * z;
// }

// console.log(calc(6, 9, 12, add2));
// console.log(calc(6, 9, 12, mullt1));

// callback hell

// function step1(callback) {
//   setTimeout(() => {
//     console.log("Step1 completed");
//     callback();
//   }, 1000);
// }

// function step2(callback) {
//   setTimeout(() => {
//     console.log("Step2 completed");
//     callback();
//   }, 1000);
// }

// function step3(callback) {
//   setTimeout(() => {
//     console.log("Step3 completed");
//     callback();
//   }, 1000);
// }

// //  callback hell
// step1(() => {
//   step2(() => {
//     step3(() => {
//       console.log("All task completed");
//     });
//   });
// });

// promises

// function step1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("step1 completed");
//       resolve();
//     }, 1000);
//   });
// }

// function step2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("step2 completed");
//       resolve();
//     }, 1000);
//   });
// }

// function step3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("step3 completed");
//       resolve();
//     }, 1000);
//   });
// }

// step1()
//   .then(step2)
//   .then(step3)
//   .then(() => console.log("All steps completed"));

// async function stepsProcess() {
//   await step1();
//   await step2();
//   await step3();
//   console.log("All steps completed");
// }

// stepsProcess();

//  promise

// const successPromises = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("Operation completed successfully and returning reolve");
//   } else {
//     reject("Operation failed  and returning reject");
//   }
// });

// successPromises
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const failedPromises = new Promise((resolve, reject) => {
//   let success = false;
//   if (success) {
//     resolve("Operation completed successfully and returning reolve");
//   } else {
//     reject("Operation failed  and returning reject");
//   }
// });

// failedPromises
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // asyn await

// const firstPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("First promise completed");
//   }, 1000);
// });

// const secondPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Second promise completed");
//   }, 1000);
// });

// const thirdPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Third promise completed");
//   }, 1000);
// });

// firstPromise
//   .then((result) => {
//     console.log(result);
//     return secondPromise;
//   })
//   .then((result) => {
//     console.log(result);
//     return thirdPromise;
//   })
//   .then((result) => {
//     console.log(result);
//   });

// function fetchuserData(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const userData = { id: userId, username: "Mohit Singh" };
//       resolve(userData);
//     }, 1000);
//   });
// }

// function fetchUserCity(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const city = [
//         { id: 1, location: "Pune" },
//         { id: 2, location: "Mumbai" },
//         { id: 3, location: "chennai" },
//       ];
//       resolve(city);
//     }, 800);
//   });
// }

// fetchuserData(1)
//   .then((userData) => {
//     console.log(userData);
//     return fetchUserCity(userData.id);
//   })
//   .then((userCity) => {
//     console.log(userCity);
//   })
//   .catch((error) => {
//     console.log(`Error : ${error}`);
//   });

// // Async await

// async function fetchData1() {
//   try {
//     let response = fetch("https://official-joke-api.appspot.com/random_joke");

//     let data = (await response).json();

//     console.log(` data :`, data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchData1();

// (async function () {
//   try {
//     let response = fetch("http://localhost:8000/api/get-distributors");

//     let data = (await response).json();

//     console.log(` data :`, data);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// const getData = async () => {
//   try {
//     let response = fetch("http://localhost:8000/api/get-distributors");

//     let data = (await response).json();

//     console.log(` data :`, data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getData();

// function fetchData() {
//   return fetch("http://localhost:8000/api/get-distributors")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`error status : ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => console.log(`data : `, data))
//     .catch((error) => console.log(`error : `, error))
//     .finally(() => {
//       console.log("Operation completed");
//     });
// }

// fetchData();

// function greet(name = "Guest") {
//   console.log(`hello ${name}`);
// }

// greet("Avinash");
// greet();
// greet(undefined);

// form validation

// oops
// class  object

class students {
  // properties
  name = "Avinash";
  age = 23;
  dept = "CS";

  // methods
  study() {}

  play() {}

  homwWork() {}
}

// abstraction
// encapsulation
// inheritance
// polymorphism

// phone and smartphone  ----- calling

// prototypal inheritance

const arr10 = [1, 2, 3, 5, 5, 6, 1, 6];
console.log(arr10);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr10.unique());

//  .........................................
function user2(name) {
  this.name = name;

  this.printName = function () {
    console.log(this.name);
  };
  console.log(this);
}

let sanket = new user2("Sanket");
let avinash = new user2("Avinash");

function user3(name) {
  this.name = name;
  console.log(this);
}

user3.prototype.printName = function () {
  console.log(this.name);
};

let swapnil = new user3("Swapnil");
let ankit = new user3("Ankit");

console.log(user3.prototype);

console.log(ankit.__proto__);

class user4 {
  constructor(name) {
    this.name = name;
    console.log(this);
  }
  printName() {
    console.log(this.name);
  }
}

let Anshu = new user4("Anshu");

// console.log(Anshu);

// classes are not hoisted
// classes are first- class citizens
// classes are used in strict-mode

("use strict");

// elemenate accidental globals
// convert silent feature in error
// with disallow
// duplicate parameter not allowed
// this

// setter and getter

class user5 {
  constructor(name) {
    this.name = name;
    console.log(this);
  }

  get getName() {
    console.log(this.name);
  }

  set setName(newName) {
    this.name = newName;
  }
}

const Anamika = new user5("Anamika");

Anamika.setName = "Anshul";
Anamika.getName;

console.log(Anamika);

// static methods

class user6 {
  constructor(name) {
    this.name = name;
    console.log(this);
  }

  static anonymous() {
    console.log("Hello static");
  }
}

let Sohan = new user6("Sohan");

// Sohan.anonymous();
user6.anonymous();

class user7 {
  constructor(name) {
    this.name = name;
    console.log(this);
  }
}

user7.anonymous7 = function () {
  console.log("Hello static another way");
};

const nilesh = new user7("nilesh");

// nilesh.anonymous7();
user7.anonymous7();

const user8 = {
  init(name) {
    this.name = name;
    console.log(this);
  },

  printName() {
    console.log(this.name);
  },
};

let pankaj = Object.create(user8);
pankaj.init("Priyanka");

pankaj.printName();

// const user9 = function (name, password) {
//   this.name = name;
//   this.password = password;
// };

// user9.prototype.printName = function () {
//   console.log(this.name);
// };

// const admin = function (name, password) {
//   this.name = name;
//   this.password = password;
// };

// admin.prototype.stats = function () {
//   console.log("stats");
// };

// const Sonu = new admin("sonu", 2356);
// Sonu.stats();

// const user9 = function (name, password) {
//   this.name = name;
//   this.password = password;
// };

// user9.prototype.printName = function () {
//   console.log(this.name);
// };

// const admin = function (name, password, course) {
//   user9.call(this, name, password);
//   this.course = course;
//   console.log(this);
// };

// admin.prototype = Object.create(user9.prototype);
// admin.prototype.stats = function () {
//   console.log("stats");
// };

// const Sonu = new admin("sonu", 2356, "javascript");
// Sonu.stats();

// ES6

class user10 {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
  printName() {
    console.log(this.name);
    console.log(this.password);
  }
}

class admin extends user10 {
  constructor(name, password, course) {
    super(name, password);
    this.course = course;
    console.log(this);
  }
  stats() {
    console.log("stats ES6");
  }
}

const Rahul = new admin("Rahul", 877656, "React js");
Rahul.printName();
Rahul.stats();

// DOM

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(`latitude : `, position.coords.latitude);
      localStorage.setItem("latitude", position.coords.latitude);
      console.log(`longitude : `, position.coords.longitude);
    },
    (error) => {
      console.error(`Geolocation error : `, error.message);
    }
  );
} else {
  console.log("geolocation not found");
}

// web storage api
// local storage and session storage

// life span accessbility data

// local storage

// localStorage.setItem("key", "value");
// localStorage.getItem("key");
// localStorage.removeItem("key");
// localStorage.clear();
let latitude1 = localStorage.getItem("latitude");
console.log(`localStorage`, localStorage.getItem("latitude"));
console.log(`latitude1 : `, latitude1);

localStorage.removeItem("latitude");
console.log(`localStorage`, localStorage.getItem("latitude"));
console.log(`latitude1 : `, latitude1);

localStorage.clear();
console.log(`localStorage`, localStorage.getItem("latitude"));

sessionStorage.setItem("key", "value");
let getSession = sessionStorage.getItem("key");

sessionStorage.removeItem("key");
sessionStorage.clear();

// json -- javascript object notation

let data = {
  country: "india",
  state: "maharastra",
  major_Cities: [
    "Mumbai",
    "Pune",
    "Nagpur",
    "Nashik",
    "shambhaji nagar",
    "shirdi",
  ],
  address: {
    street: "City Vista",
    locality: "kharadi",
  },
};

// lightweight, textBased, language-independent
// datastructure --  object , array

// common use-- api, configuration file, data storage

// input---

// Debouncing
// function debounce(funct, delay) {
//   let timeout;
//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => funct.apply(this, args), delay);
//   };
// }

function delayPrint() {
  console.log(" Here delayPrint");
}

let timeDelay = setTimeout(delayPrint, 2000);
console.log("timeDelay : " + timeDelay);

// throttling

// function throtle(funct, limit) {
//   let throttlelimit;
//   return function (...args) {
//     if (!throttlelimit) {
//       funct.apply(this, args);
//       throttlelimit = true;
//     }
//     setTimeout(() => (throttlelimit = false), limit);
//   };
// }

//

function throtle(funct, delay) {
  let callLimit = 0;
  return function (...args) {
    const currentTime = new Date().getTime();
    console.log(currentTime);
    if (currentTime - callLimit < delay) {
      return;
    }
    callLimit = newColors;
    funct(...args);
  };
}

function printMessage(message) {
  console.log(message);
}

const throtlePrintMessage = throtle(printMessage, 5000);

throtlePrintMessage("hello throtling");
throtlePrintMessage("hello throtling second");

// nullish coalescing

let darkMode = null; // false  undefined --false
let normalMode = "NormalMode";

darkMode = "darkMode";
let defaultMode = darkMode ?? normalMode;

console.log(defaultMode);

let username;
let defaultName = "Guest";
username = "Avinash";

let displayName = username ?? defaultName;

console.log(displayName);

// if (undefined) {
//   console.log(true);
// } else console.log(false);

// optional chaining

let person4 = {
  profile: {
    name: "Swapnil",
    occupation: "Student",
    address: {
      street: "Street No. 5",
      locality: "Kharadi",
      city: "Pune",
    },
  },
};

// console.log(person4.profile.address.street);

let streetName;
if (
  person4 &&
  person4.profile &&
  person4.profile.address &&
  person4.profile.address.street
) {
  streetName = person4.profile.address.street;
} else {
  streetName = undefined;
}

console.log(streetName);

const streetNameOptional = person4.profile?.address?.street;
console.log(streetNameOptional);

// there is new something to learn about the git and github
// something changed in dom for commit to git

 main
