//For Loops

/*
A loop is a programming tool that repeats a set of instructions until a specified condition is met.
Has 3 parameters, have to tell it where to start and where to stop, and by what incriments
*/

const vactionSpot = (['Florence','Copenhagen','Istanbul']);

console.log(vactionSpot[0]);
console.log(vacationSpot[1]);
console.log(vacationSpot[2]);

//Types of loops
/*
For statement
Do while statements
while statement
labeled statement
break statement
continue statement
For in statement
For of statement
*/
// initialization; stopping condition; iteration statement
for (let i=0; i<10; i++) {
    console.log(i);
}

//Challenge-> count to 20 from 0 by 2

for (let i=0; i<21; i+=2) {
    console.log(i);
}
//Challenge-> count from 10 down to 0, by 1

for (i = 10; i>=0; i--){
    console.log(i)
}

//challenge -> use a for loop, count from 0, going down by 2's to -24

for(i = 0; i>= -24; i-=2){
    console.log(i);
}

//Challenge-> using a for loop, go through a name and dispay each letter individually

let name = 'cody'
for(p=0; p < name.length; p++) {
    console.log(name[p])
}

//Challenge: Make a loop where you add up all the number from 1 to 50 (should equal 1275)
let sum=0;
for(i=1;i<=50; i++) {
    sum = sum + i
}
console.log(sum)