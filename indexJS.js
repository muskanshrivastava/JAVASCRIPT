//  It is not compulsory to end statement with semi-colon(;), but it is recommended to put it at the end
// JAVASRIPT allows both double and single quotes strings

// 1. Ways to print in JAVASRIPT
// --------------------------------------
//console.log("Hello World");   MOSTLY USED
//document.write("Hello World")
// alert("ME")
// console.write("Hello World")


// 2. JAVASCRIPT console API
// --------------------------------------
/*
console.log("Hello World", 4 + 6, "Another log");
console.warn("THis is warning");
console.error("This is an error");
*/


//  3. JAVASRIPT Variables
// ---------------------------------------

//  Variables - Conainers to store data values
// 'var' is used to declare variables

// INTEGER Datatype

var num = 32
var num1 = 50
// console.log("Sum of 32 and 50 : ", num + num1)



//  4. Data Types in JAVASRIPT
//  ---------------------------------------

// STRING Datatype

var str1 = "This is a string"
// console.log(str1)


// FLOAT Datatype

var float1 = 20.15
// console.log(float1)

// OBJECT datatype (It is lke a dictionary containes key-value pair)
var marks = {
    muskan: 88,
    uditya: 90,
    karan: 90.4
}
//console.log(marks)

//  BOOLEAN datatype
var a = true;
var b = false;

//console.log(a, b)

// UNDEFINED datatype - variables which are not initialized by some values
var und;
//console.log(undefined)
//console.log(und)

// NULL datatype - variables which contain nothing
var n = null;
//console.log(n);

/* 
    At a very high, there are 2 datatypes in JAVASRIPT -
    1. Primitive data types: undefined, numbers, string, null, boolean, symbol
    2. Reference data types: arrays, objects
*/

// ARRAYS datatype
var arr = [1, 2, 3, 'string', 4, 5]
//console.log(arr)
//console.log(arr[3])

//  4. ARITHMTIC OPERATORS in JAVASRIPT
//  ----------------------------------------------

var a = 15
var b = 20
/*
console.log("Sum : ", a+b)
console.log("Subtraction : ", a-b)
console.log("Multiplication : ", a*b)
console.log("Division : ", a/b)
*/

// ASSIGNMENT OPERATORS
var c = b
c += 2
//console.log(c)

// COMPARISON OPERATOR
var x = 50
var y = 30
/*
console.log(x == y)
console.log(x >= y)
console.log(x <= y)
console.log(x != y)
*/

// LOGICAL AND OPERATOR
/*
console.log(true && true)
console.log(true && false)
console.log(false && false)
*/

// LOGICAL OR OPERATOR
/*
console.log(true || false)
console.log(false || false)
*/

// LOGICAL NOT OPERATOR
/*
console.log(!false)
console.log(!true)
*/


// 5. FUNCTIONS IN JAVASCRIPT
// ---------------------------------------
// "function" keyword is used to define functions in javascript

function avg(n1, n2) {
    return (n1 + n2) / 2
}

d1 = avg(12, 13)
d2 = avg(20, 30)

//console.log(d1,d2)


// 6. CONDITIONALS IN JAVASCRIPT
// ------------------------------------------

//age = 4

// Single IF statement

/*
if (age >= 18){
    console.log("You are not a kid");
}

// IF-ELSE Statement
if (age >= 18){
    console.log("You are not a kid");
}
else {
    console.log("You are a kid");
}

*/

// IF-ELSE Ladder statement

/*
age = 26

if (age >=50){
    console.log("You are not a kid");
}

else if (age >= 32){
    console.log("You are Young");
}
else if (age >= 18){
    console.log("You are Adult");
}
else {
    console.log("You are a kid");
}
*/

// 7.  TAKE USER INPUT
// -----------------------------------------
/*
var name = window.prompt("Enter your name : ")
console.log("Your name is", name)
*/


// 8. FOR LOOP IN JAVASRIPT
// -------------------------------------------

var arr = [1, 2, 3, 4, 5, 6, 7]
/*
console.log(arr)
for (var i = 0; i < arr.length; i++)
{
    console.log(arr[i])
}
*/

// FOR-EACH LOOP

/*
arr.forEach(function(element) {
    console.log(element)
})
*/


// 9. WHILE LOOP IN JAVASRIPT
// -------------------------------------------
// Here "let" is also used to declare and define variables,  but the scope of that variable will only be inside a code block.
/*
let j = 0;

while (j < arr.length) {
    console.log(arr[j]);
    j++;
}
*/

// 10. DO-WHILE LOOP IN JAVASRIPT
// -------------------------------------------
/*
let i = 0;
do {
    console.log(arr[i]);
    i++;
}while(i < arr.length)
*/

// 11. CONTROL STATEMENTS
// -------------------------------------------
// BREAK

/*
for (var i = 0; i < arr.length; i++)
{
    if (i == 2)
        break;
    console.log(arr[i])
}
*/


// CONTINUE

/*
for (var i = 0; i < arr.length; i++)
{
    if (i%2)
        continue;
    console.log(arr[i]);
}
*/

let myArr = ["Panda", "Teddy", 15, true, null]

// 12. ARRAY METHODS
// ---------------------------------------------

// ARRAY LENGTH
// console.log(myArr.length)

// pop() - TO REMOVE LAST ELEMENT OF ARRAY. pop() will print the removed element on console
// myArr.pop()
//console.log( myArr)

// push(element) - TO ADD AN ELEMENT AT THE LAST.
// myArr.push('Uditya')
// console.log(myArr)

// shift() - TO REMOVE FIRST ELEMENT OF THE ARRAY
// myArr.shift()
// console.log(myArr)

// unshift(element) - TO ADD ELEMENT AT THE START OF THE ARRAY
// myArr.unshift('Java')
// console.log(myArr)

// If we use unshift() and push() with console.log then these functions will return the length of the updated array

// console.log(myArr.unshift())
// console.log(myArr.push())


// 13. STRING METHODS
// -------------------------------------------------