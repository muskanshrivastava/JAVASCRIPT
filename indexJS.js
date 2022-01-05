//  It is not compulsory to end statement with semi-colon(;), but it is recommended to put it at the end
// JAVASRIPT allows both double and single quotes strings

// ------------------------------------- 1. Ways to print in JAVASRIPT -----------------------------------------------

//console.log("Hello World");   MOSTLY USED
//document.write("Hello World")
// alert("ME")
// console.write("Hello World")

// ------------------------------------ 2. JAVASCRIPT console API ----------------------------------------------------

/*
console.log("Hello World", 4 + 6, "Another log");
console.warn("THis is warning");
console.error("This is an error");
*/

// ---------------------------------------  3. JAVASRIPT Variables ---------------------------------------------------
// ---------------------------------------

//  Variables - Conainers to store data values
// 'var' is used to declare variables

// INTEGER Datatype
// ---------------------------------------------------------------
var num = 32
var num1 = 50
// console.log("Sum of 32 and 50 : ", num + num1)


// -------------------------------------  4. Data Types in JAVASRIPT -------------------------------------------------

// STRING Datatype
// ---------------------------------------------------------------
var str1 = "This is a string"
// console.log(str1)


// FLOAT Datatype
// ---------------------------------------------------------------
var float1 = 20.15
// console.log(float1)

// OBJECT datatype (It is lke a dictionary containes key-value pair)
// ----------------------------------------------------------------------------
var marks = {
    muskan: 88,
    uditya: 90,
    karan: 90.4
}
//console.log(marks)

//  BOOLEAN datatype
// ---------------------------------------------------------------
var a = true;
var b = false;

//console.log(a, b)

// UNDEFINED datatype - variables which are not initialized by some values
// ------------------------------------------------------------------------------
var und;
//console.log(undefined)
//console.log(und)

// NULL datatype - variables which contain nothing
// ---------------------------------------------------------------
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

// --------------------------------------- 5. ARITHMTIC OPERATORS in JAVASRIPT ---------------------------------------

var a = 15
var b = 20
/*
console.log("Sum : ", a+b)
console.log("Subtraction : ", a-b)
console.log("Multiplication : ", a*b)
console.log("Division : ", a/b)
*/

// ASSIGNMENT OPERATORS
// ---------------------------------------------------------------
var c = b
c += 2
//console.log(c)

// COMPARISON OPERATOR
// ---------------------------------------------------------------
var x = 50
var y = 30
/*
console.log(x == y)
console.log(x >= y)
console.log(x <= y)
console.log(x != y)
*/

// LOGICAL AND OPERATOR
// ---------------------------------------------------------------
/*
console.log(true && true)
console.log(true && false)
console.log(false && false)
*/

// LOGICAL OR OPERATOR
// ---------------------------------------------------------------
/*
console.log(true || false)
console.log(false || false)
*/

// LOGICAL NOT OPERATOR
// ---------------------------------------------------------------
/*
console.log(!false)
console.log(!true)
*/

// ---------------------------------------- 6. FUNCTIONS IN JAVASCRIPT -----------------------------------------------

// "function" keyword is used to define functions in javascript

function avg(n1, n2) {
    return (n1 + n2) / 2
}

d1 = avg(12, 13)
d2 = avg(20, 30)

//console.log(d1,d2)

// ----------------------------------  7. CONDITIONALS IN JAVASCRIPT -------------------------------------------------

//age = 4

// Single IF statement
// ---------------------------------------------------------------
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
// ---------------------------------------------------------------
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

// ------------------------------------------- 8. FOR LOOP IN JAVASRIPT ----------------------------------------------


var arr = [1, 2, 3, 4, 5, 6, 7]
/*
console.log(arr)
for (var i = 0; i < arr.length; i++)
{
    console.log(arr[i])
}
*/

// FOR-EACH LOOP
// ---------------------------------------------------------------
/*
arr.forEach(function(element) {
    console.log(element)
})
*/

// ------------------------------------- 9. WHILE LOOP IN JAVASRIPT --------------------------------------------------

// Here "let" is also used to declare and define variables,  but the scope of that variable will only be inside a code block.
/*
let j = 0;

while (j < arr.length) {
    console.log(arr[j]);
    j++;
}
*/
// -------------------------------------- 10. DO-WHILE LOOP IN JAVASRIPT ---------------------------------------------

/*
let i = 0;
do {
    console.log(arr[i]);
    i++;
}while(i < arr.length)
*/

// ----------------------------------- 11. CONTROL STATEMENTS IN JAVASCRIPT ------------------------------------------

// BREAK
// ---------

/*
for (var i = 0; i < arr.length; i++)
{
    if (i == 2)
        break;
    console.log(arr[i])
}
*/
// ---------------------------------------------------------------

// CONTINUE
// -----------
/*
for (var i = 0; i < arr.length; i++)
{
    if (i%2)
        continue;
    console.log(arr[i]);
}
*/

// ------------------------------------ 12. ARRAY METHODS IN JAVASCRIPT ----------------------------------------------

let myArr = ["Panda", "Teddy", 15, true, null]

// ARRAY LENGTH
// ******************
// console.log(myArr.length)
// ---------------------------------------------------------------

// pop() - TO REMOVE LAST ELEMENT OF ARRAY. pop() will print the removed element on console
// *******************************************************************************************
// myArr.pop()
//console.log( myArr)
// ---------------------------------------------------------------

// push(element) - TO ADD AN ELEMENT AT THE LAST.
// ***************************************************
// myArr.push('Uditya')
// console.log(myArr)
// ---------------------------------------------------------------

// shift() - TO REMOVE FIRST ELEMENT OF THE ARRAY
// ***************************************************
// myArr.shift()
// console.log(myArr)
// ---------------------------------------------------------------

// unshift(element) - TO ADD ELEMENT AT THE START OF THE ARRAY
// **************************************************************
// myArr.unshift('Java')
// console.log(myArr)
// ---------------------------------------------------------------

// If we use unshift() and push() with console.log then these functions will return the length of the updated array

// console.log(myArr.unshift())
// console.log(myArr.push())

// --------------------------------------- 13. STRING METHODS IN JAVASCRIPT ------------------------------------------

// LENGTH of string
// *********************
let str = "Muskan Shrivastava"
// console.log("Length of String by length method : ",str.length)
// ---------------------------------------------------------------

// indexOf(substring) - It will return the index of first character of the first occurence of substring
// *****************************************************************************************************

// str = "Hello! This is the tutorial of JavaScript"
// console.log("Index of first occurence of SubString by indexOf()  : ",str.indexOf("JavaScript"))
// ---------------------------------------------------------------

// lastIndexOf(substring) - It will return the index of first character of the last occurence of substring
// **********************************************************************************************************

// str = "Hello! Hello! Hello! This is the tutorial of JavaScript"
// console.log("Index of last occurence of SubString by lastIndexOf()  : ",str.lastIndexOf("Hello"))
// ---------------------------------------------------------------

// slice(begin, end) - SLicing of a string
// ***************************************************

// str = "Hello! Hello! Hello! This is the tutorial of JavaScript"
// console.log("Slicing of a string by slice() : ",str.slice(0,6))
// -------------------------------------------------------------------

// replace(substring, newstring) - replace a first occurence of substring from a string
// *******************************************************************

// str = "This is the tutorial of JavaScript"
// console.log("Old String : ",str)
// console.log("Replacing a substring by replace() : ", str.replace('JavaScript', 'Web Development'))


// -------------------------------------- 14. DATES IN JAVASCRIPT ----------------------------------------------------

// Date() - Returns date
// **************************
//  'new' is used to create a new date

let myDate = new Date()
// console.log(myDate)

// getTime() -   Returns the date in seconds
// console.log(myDate.getTime())

// getFullYear() -   Returns the year
// console.log(myDate.getFullYear())

// getTime() -   Returns the day in integer
// console.log(myDate.getDay())

// getMinutes() -   Returns Minutes
// console.log(myDate.getMinutes())

// getHours() -   Returns Hours
// console.log(myDate.getHours())


// ------------------------------- 15. DOM (DOCUMENT OBJECT MODEL) MANIPULATION --------------------------------------

// document - This keyword is used to manipulate the HTML file

// METHODS IN DOM
//----------------------

// getElementById(HTML_Id_name) -  Returns the HTML ID named 'click' element
let eleID = document.getElementById('click');
// console.log(eleID)
// ----------------------------------------------------------------------

// getElementsByClassName(HTML_CLASS_Name) - Returns the list of HTML CLass named 'container' elements
let eleClass = document.getElementsByClassName('container')
// console.log(eleClass)
// ----------------------------------------------------------------------

// Changing the background of first container class
eleClass[0].style.background = 'skyblue';
eleClass[1].style.background = 'pink';
// ----------------------------------------------------------------------

// Adding classes into HTML file
// eleClass[0].classList.add('bg-primary')
// eleClass[0].classList.add('text-success')
// ----------------------------------------------------------------------

// Removing class from HTML file
// eleClass[0].classList.remove('text-success')
// ----------------------------------------------------------------------

//innerHTML -  Accessing the inner content of first container class
// console.log(eleClass[0].innerHTML);
// ----------------------------------------------------------------------

//innerText -  Accessing the inner text of first container class
// console.log(eleClass[0].innerText)
// ----------------------------------------------------------------------

// getElementsByTagName - 
let tn = document.getElementsByTagName('div')
// console.log(tn)
// ----------------------------------------------------------------------

// document.createElement('p') -  Creating a paragraph tag
createdElement = document.createElement('p')
// ----------------------------------------------------------------------

// createdElement.innerText -  Writing a text inside a created paragraph
createdElement.innerText = "This is a created para"
// ----------------------------------------------------------------------

// appendChild(new_child_name) - Adding child paragraph in the first div tag of HTML
tn[0].appendChild(createdElement);
// ----------------------------------------------------------------------

// Replacing old child with new chlid
createdElement2 = document.createElement('b')
createdElement2.innerText = "This is a created bold"

// replaceChild(new_child, old_child) -  Replacing the first child para to new child
tn[0].replaceChild(createdElement2, createdElement)
// ----------------------------------------------------------------------

// removeChild(element) - removes a child element
tn[0].removeChild(createdElement2)
// ----------------------------------------------------------------------

// SELECTING USING QUERY
// ***************************

// querySelector(element) - gives the query of first occurence of query
sel = document.querySelector('.container')
// console.log(sel)
// ----------------------------------------------------------------------

// querySelectorAll(element) - gives the Nodelist of query of all occurence of query
sel = document.querySelectorAll('.container')
// console.log(sel)


// ------------------------------------16. EVENTS IN JAVASCRIPT ------------------------------------------------------

// This function is invoked inside a button tag in HTML, which will be executed and print the below message whenever the button is clicked.
function clicked() {
    // console.log("The button is clicked")
}

// The below message will print whenever the document is loaded
window.onload = function () {
    // console.log("The document is loaded")
}
// -----------------------------------------------------------------------

// The below message will print whenever the first container is clicked, 'firstContainer' is the ID of first container class.
// 'click' is a function which whenever performed on first container then the message will be printed
firstContainer.addEventListener('click', function () {
    // console.log('FIrst COntainer is clicked')
})
// -----------------------------------------------------------------------

// whenever the curser hover on first container, the below message will be printed
firstContainer.addEventListener('mouseover', function () {
    // console.log('Mouse on Container')
})
// -----------------------------------------------------------------------

// whenever the curser get off of the first container, the below message will be printed
firstContainer.addEventListener('mouseout', function () {
    // console.log('Mouse out of the Container')
})
// -----------------------------------------------------------------------

// whenever we release the click on container, the below message will be printed
let prevHTML = document.querySelectorAll('.container')[1].innerHTML; 
firstContainer.addEventListener('mouseup', function () {
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    // console.log('Mouse up when clicked on  Container')
})
// -----------------------------------------------------------------------

// whenever we click on container (not released the click yet), the below message will be printed
firstContainer.addEventListener('mousedown', function () {
    document.querySelectorAll('.container')[1].innerHTML = '<b>WE HAVE CLICKED</b>'
    // console.log('Mouse down when clicked on  Container')
})
// -----------------------------------------------------------------------

// -------------------------------------- 17. ARROW FUNCTIONS IN JAVASCRIPT ------------------------------------------
// *******************
// function summ(a,b){
//     return a + b;
// }
// WE CAN WRITE ABOVE FUNCTION LIKE A FOLLOWING WAY -

summ = (a, b) => {
    return a + b;
}
// ---------------------------------- 18. SET TIMEOUT AND SET INTERVAL ------------------------------------------------

// 16. SET TIMEOUT AND SET INTEVAL
// ******************************
// SetTimeout - It has always a function as a first arguement and the second arguement will be the milliseconds in integer.
// ------------------------------

// logf = () => {
//     document.querySelectorAll('.container')[1].innerHTML = '<b>SET TIMEOUT FIRED</b>'
//     console.log("I am your log")
// }

// clr1 = setTimeout(logf, 2000);
// clearTimeout(clr1)              // TO stop the setTimeout()
// -----------------------------------------------------------------------

// SetInterval - When we want to do something repeatedly.
// ---------------------------------
// setInterval(logf, 2000)        // After every 2 seconds (2000 ms), logf will print the message.
 
// Use 'clearInterval(ele)' and 'clearTimeout(ele)' to stop the setTimeout and setInterval

// clr = setInterval(logf, 2000)           // 'clr contains the ID returned by setInterval()
// clearInterval(clr)                      // TO stop setInterval()


// --------------------------------- 19. LOCAL STORAGE IN JAVASCRIPT -------------------------------------------------

// Local Storage - It helps to store data in user's computer as a string.It stores data as a key-value pair.

// localStorage.setItem('name', 'Muskan')   // setItem(key,value) - to store data in local storage
// console.log(localStorage.getItem('name'))   // getItem(key) - to fetch value of the given key.
// console.log(localStorage)       // gives the dictionary
// localStorage.clear()            // clear() - to clear the data from localstorage
// console.log(localStorage)       // prints Storage{length :0}
// localStorage.removeItem('name')    // removeItem(key)  -  to remove item in the localStorage


// ------------------------------------------ 20. JSON IN JAVASCRIPT -------------------------------------------------

// JSON - JAVASCRIPT OBJECT NOTATION - which is used to exchange data as a string.
// JSON supports single quote string

obj = { name: "harry", length: 1, a:{this:"that"} }
jso = JSON.stringify(obj);      // converting obj into string
console.log(jso)
console.log('Type of obj JSON data : ', typeof 'jso')

parsed = JSON.parse(jso) // converting a string (jso) into an object datatye.
console.log( parsed)
console.log('Type of parsed string : ',typeof parsed)

// ----------------------------------------- 21. VERSIONS -----------------------------------------------------------

// ECMAScript - It is a standard which is maintaing JavaScript.

// ------------------------------------- 22. TEMPLATE LITERALS - BACKTICKS ------------------------------------------

// BACKTICKS -``
a = 34
console.log(` This is my ${a}`);       // a replaces with 34.