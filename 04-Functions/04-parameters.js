//Parameters
//ex
function hi(parameter1, parameter2){
    console.log(parameter1, parameter2)
    console.log('hi');
}

function pet(animal) {
    console.log(`i have a ${animal} for a pet.`);
}

pet('cat');
pet('dog');
pet('turtle');
pet('DRAGON');
pet('rock');

//Challenge: Write a function that tkes two parameters:
//One parameter is for a first name,
//The other parameter is for a last name;
//Have them come together in a variable inside the function.
//console.log 'Hello, my name is Ingeborg Slegers'
//Call your function

function myName(firstName, lastName){
    let fullName=firstName + ' ' + lastName;
    console.log(`Hello, my name is ${fullName}.`)
}
myName('slim','shady');