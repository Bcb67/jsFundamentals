//variables
//variable are containers for storing data values (words, sentences, numbers, objects, etc);

var a = 1;
var b = 2;
console.log(a+b);

/* Notes:

1.a variable must begin with a letter, underscore, or dollar sign
2. numbers may follow the above characters, but cannot come first.
3. Javascript is case sensitive -- hello and Hello are different variables
4. Variables must be identified with unique names.

*/

var x;
console.log('Declaration:', x)
x=10;
console.log('Initialization 1', x)
x=33;
console.log('Initialization', x)
var y = 'hello';
console.log('Both: ', x, y)

// Var, Let, and Const;

//Var = old keyword

//Let = new keyword

//Const = New keyowrd(declares unchangeable variables)

var today = 'great!';
const elevenFifty = 'Wonderful';
console.log(today, elevenFifty);

today = 'lovely';
console.log(today, elevenFifty);

elevenFifty = 'super';
console.log(today, elevenFifty);
//doesnt work, already a const assigned to elevenFifty