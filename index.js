let variable = "welcome";
let user = "wania";
console.log("Full Name is: ", variable + " " + user);
//Template literals
console.log(`Full Name is: ${variable} ${user}`);
let variable1 = "Malik";
let variable2 = "Sayyam";
console.log("My full name is: ", variable1 + " " + variable2);
// Template literals
console.log(`My Full name is ${variable1} ${variable2}`);
//Type of variables
// let testvariable ="";
// console.log(typeof testvariable);
let a = 4;
let b = "8";
console.log(typeof a);
console.log(typeof b);
// Arithmetic operators
console.log(`Arithmetic operators`);
//1. Adding
let A = 5; // assigning =
let B = 13;
const add = A + B;
console.log(`${A}+${B}=${add}`); //concatination
//2. Subtracting
let C = 45;
let D = 27;
const Sub = C - D;
console.log(`${C}-${D}=${Sub}`);
//3. Multiply
let E = 8;
let F = 7;
const Multiply = E * F;
console.log(`${E}*${F}=${Multiply}`);
//4. Division
let G = 40;
let H = 5;
const div = G / H;
console.log(`${G}/${H}=${div}`);
//5. Exponentiation 
let m = 4;
let l = 5;
const expo = m ** l;
console.log(`${m}**${l}=${expo}`);
//6. Modulus mean jo remainder rah jata wo print karwa dyta ha
let o = 10;
let p = 3;
const mod = o % p;
console.log(`${o}%${p}=${mod}`);
//Assignment Operators are to asssign value to variable
console.log(`Assignment operators`);
let x = 1;
x += 5; // n= 1-5 = -4
console.log(x);
let n = 1;
n -= 5; // n= 1-5 = -4
console.log(n);
//Comparison operators are used to compare values of variables. for e.g
console.log(`Comparison operators`);
let y = 5;
console.log(y == 5);
console.log(y === 5);
console.log(y != 5);
console.log(y > 8);
console.log(y < 8);
console.log(y >= 8);
console.log(y <= 8);
console.log(`Comparison operators`);
let n1 = 4;
let n2 = 4;
console.log(n1 == n2);
//  Logical operator are used to combine multiple conditions in one
console.log(`Logical operators`);
let o1 = 4;
let o2 = 6;
let w1 = 5;
let w2 = 3;
console.log(o1 > o2 && w1 < w2); //fasle & false = false
// In And Operator both value will true than answer will come true other wise false. Its symbol is &&.
console.log(o1 > o2 || w1 > w2); //fasle || true = true
// In OR Operator only one value will true than answer will come true . Its symbol is ||.
console.log(!(o1 < 10)); //true = false
// In Not operation if value comes true, its changes into false. Its symbol is !.
//For loop
//Table of 12
const multiple = 12;
for (let i = 1; i <= 10; i++) {
    const result = multiple * i;
    console.log(`${multiple}*${i}=${result}`);
}
const userName = prompt('What is your name?');
console.log(`Hello, ${userName}!`);
export {};
