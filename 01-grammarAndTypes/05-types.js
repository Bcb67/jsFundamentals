// Types
//1.Booleans
let on = true
console.log(on)

let off = false;
console.log(off);
//2.Null
//empty value, empty container (not 0, not undefined)
let empty = null
console.log(empty);

//3. Undefined
//no value assigned
let undef = undefined;
console.log(undef);

let grass;
console.log(grass);

//4.Numbers
let degrees= 90;
console.log(degrees);
let precise = 999999999999999
console.log(precise);
let rounded = 9999999999999999
console.log(rounded);

let notQuite = 0.2+0.1
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

//5.Strings
//Strings are any value within quotes
let stringOne = "double quotes";
let stringTwo = 'singe quotes';
console.log(stringOne , stringTwo);

let first = 1050 + 100; //additions
let second = '1050' + '100'; //concatnation
console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

let third = 1050 + '100';
console.log(third);
console.log(typeof third);


//Challenge!!
/*
First Name
Last Name
houseNumber
aptNumber
street
city
state
zipcode

Set each variable to its respective type.

cons.log you whole address (with the space between variable).
*/
let firstName = "Cody";
let lastName = "Blackwell";
let houseNumber = 2977
let street = "Kings Court";
let city = "Carmel";
let state = "Indiana";
let zipCode = 46032;

console.log(firstName, lastName + ',', houseNumber , street + ',', city + ',', state , zipCode);

//6. Objects
//A collection of key-value pairings
//Hold multiple data types
//Denotes by { }
//Has keys and values (ex. color (key): 'blue' (value), separated with a colon.)
//Each key is separated with a comma.

let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true
};

console.log(burritosNow);
console.log(typeof burritosNow);

//Arrays
//Arrays are great for lists
//Denotes by [ ]
//Has values ('blue', 'green', 'yellow') separated by commas.

let burritos = ['large', 4, true];
console.log(burritos);

console.log(typeof burritos);

