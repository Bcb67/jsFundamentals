//Arrow Functions

//Normal
function coffe() {
    console.log('coffee is good');
}

//Fat Arrow
let coffee = () => {
    console.log('fat arrow coffee');
}
coffee();
//Concise Body
//Concise bodies do not need paranthesis. Unless you have more than one parameter
//Return is implied 'ie' built in
let apples = x=> console.log(`There are ${x} apples.`);
apples(10);
//Two parameters
let apples = (x,y) => console.log(`There are ${x} apples and ${y} pears.`);
apples(10,5);

//Block Body
let apples = (x) => {console.log(`There are ${x} apples.`);
}
apples(10);