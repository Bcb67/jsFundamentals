//IF ELSE
weather = 75;

if (weather < 70) {
    console.log('Wear a jacket')
} else {
    console.log('No jacket neccasary!')
};

/*IF ELSE SYNTAX
if (condition){
    logic
    console.log(logic)
}else{
console.log(error)
}*/

//Challenge

let name = 'Cody Blackwell';
if(name =='Cody Blackwell') {
    console.log('Hello my name is Cody Blakwell')
} else{
    console.log('Hello, what is your name?')
}

//Challenge 2 "the brain tickler"

let name = 'codY'
if(name == 'codY'){
    console.log('C' + 'o' + 'd' + 'y')
} else {
    console.log('codY')
}

let name = 'cOdY'

if (name[0] == name[0].toUpperCase()) {
    firstLetter = name [0] + name.slice(1).toLowercase()
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    console.log(otherLetters);
}

//ELSE IF

/* if (condition) {
    logic a
} else if (different condition) {
    logic b
} else if {
    logic c
} */

//Challenge

let age = 25;

if (age < 17) {
    console.log('Sorry, you are too young to do anything');
} else if (age <= 18) {
    console.log('Yay! You can vote');
} else if (age <= 21){
    console.log('Yay! You can drink!');
} else if (age <= 25){
    console.log('Yay! You can rent a car!');
};