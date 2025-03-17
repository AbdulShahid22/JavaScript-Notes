What is JavaScript?
JavaScript is a versatile and widely used programming language that plays a cruical role in web development.It enables the developer to create interactive and dynamic elements within webpages, enhancing the user experience by adding functionality that responds the user actions.

Console is a object and it has a lot of methods inside the console object.
Some of the methods of console are

1.  console.table
2.  console.log
3.  console.warn
4.  console.error

Javascript Comments

// single line comment
ctrl+forword or backward slash to comment a already written line

Variables
A quantity that can be changed during the execution of the progarm is called variable. It is a box used for storing the values inside it.

1. Var
2. Const
3. Let

Reserved keyword -> variable name -> type of value

Declared variable
let Name;

Assign Variable
let banana;
banana = 'banana';

Rules:

1. cannot use reserved keywords as variable names
2. Cannot uses spaces in between the variable names
3. cannot start with a digit or a number
4. Cannot uses dashes(-) between the variables

Conventions to use Variables

1. UPPERCASE to declare a variable
2. lowercase
3. kebab case (huxn_webdev)
4. JavaScript developers use Camel case.

Let Variable: Later in the code we can change the value of the variable

Const variable: When we declare the with const keyword we cannot the change the value during the execution.

var is function-scoped, meaning it is accessible throughout the entire function in which it is declared (or globally if declared outside any function). let, on the other hand, is block-scoped, meaning it is only accessible within the block (denoted by curly braces {}) where it is defined

Primitive Types

1. Number

typeof- is a reserved keywords where we can check the typeof a value stored in a variable

    let num = 10.2;
    console.log (typeof num);

Basic Maths
console.log(2+2);
console.log(2-2);
console.log(2/2);
console.log(2%2);
console.log(2 \*\*2); will give the power of the number

Increment Operator

let counter = 0;
counter++;
counter++;
counter++;
console.log(counter);

Decrement Operator

let counter = 0;
counter--;
counter--;
counter--;
console.log(counter);

Boolean- Is a value that can be either true or false.

NaN- Not a Number
let Number = 10;
console.log(Number + undefined); // This will return NaN

Falsy Values:

1. False
2. Null
3. Undefined
4. 0
5. -0
6. NaN
7. ' ', "", ``,(Empty quotes)

All the values other than this are truthy values.

Difference Between Null and Undefined

In JavaScript, both null and undefined represent the absence of a value, but they convey it in different ways.

Undefined: It signifies that a variable has been declared but has not been assigned a value.
Null: It is an assignment value, explicitly indicating that a variable has no value. It represents the intentional absence of an object value.

Comparision Operators

1.  Relational Operators
    1.  > Greater than
    2.  < Less than
    3.  > = greater than or equal to
    4.  <= less than or equal to

Examples:
console.log(10 > 10) //false
console.log(10 < 10) //false
console.log(10 >= 10) //true
console.log(10 <= 10) //true

2.  Equality Operators
    1. === strict equality (checks the type and value)
    2. !== strict non equality (checks the type and value both)
    3. == lose equality operator (value)
    4. != lose not equality operator (value)

Examples:
console.log(10 === 10) // true
console.log(10 === '10') // false
console.log(10 !== 10) // false
console.log(10 !== '10') // true
console.log(10 == 10) // true
console.log(10 == '10') // true

Strings
Whenever we are using text we are working with string datatype.

We can use single quotes, double quotes or back ticks.

If we use backticks to declare our strings we can write the text in multiple lines where as in single or double quotes we need to write everything in a single line.

let firstName = "Abdul"
let secondName = "Shahid'

1. Concatenation
   concat method allows us to join or merge two variables.
   Example:
   Let fullName = firstName.concat(secondName)
   console.log(fullName)

   or

   let fullName = firstName + secondName;
   console.log(fullName);

2. Append
   How to append new text to the exisiting text
   firstName += "something else"
   console.log(firstName);

3. Length
   console.log(firstName.length);

4. Cases
   console.log(firstname.toLowerCase());
   console.log(firstname.toUpperCase());

5. Slice: This method returns the particular part of the string
   console.log(firstname.slice(0,3)) // This return the output as Abu

6. Split and Join
   Split: It Splits the string into substings using the specified seperator and return them as an array(Basically it converts the strings to arrays.)
   Join: A string used to seperate one element of the array from the next in the resulting array. (Basically it converts the arrays to strings.)

   console.log(firstName.split("").join(""));

7. Includes
   Using this method we can check if a alphabpet exisit in a string, this method returns a boolean value.
   console.log(firstName.includes('c')); //This will return False as we dont have any c in the first name.

8. Trim
   This methods allows us to remove the spaces in the strings.
   console.log(firstName.trim());

Type Conversions:
Conversion of string of a number to a number.

let money="50";

money = parseInt(money);
money = +money;
money = Number(money);

console.log(money);
console.log(typeof money);

Conversion of number to a string.

let money=50;
money = money.toString();
moeny = String(money);

console.log(money);
console.log(typeof money);

Convert string to a decimal

let money="50.245";
money = parseFloat(money);
