//Ternaries

//Ternaries are a shorthand version of an if else if statement

let x = 6

if (x < 0) {
    console.log("yes")
} else{
    console.log('no')
}

//Ternary

(x > 0) ? console.log('yes') : console.log('no');

//condition statement
if (x == 0) {
    console.log('Hello')
} else if (x<0) {
    console.log('Goodbye')
}else {
     console.log('hi')
 }

//ternery operator
let x = 6;
(x==0) ? console.log('Hello') : (x<0) ? console.log('hi') : console.log('Goodbye');

//Challenge

let age = 25;

(age<=25) ? console.log('Rent a car') : (age>=21) ? console.log('Yay! You can drink!') : (age>= 18) ? console.log('Yay! You can Vote!') : console.log('Too Young');

//Switch code made into Terneray Operation
let yep=-8;

(yep<0 && yep>-10) ? console.log('worked') : (yep>0) ? console.log("worked!!") : console.log('did not work');