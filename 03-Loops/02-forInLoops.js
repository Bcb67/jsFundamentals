//FOR IN LOOPS

//Great for iterating over values in an object
//The For in statement iterates over a specified variable over all the enumerable properties of an object

let student = {name: 'Peter', awesome: true, degree: 'Javascript', week: 1};
for(item in student) {
    console.log('item=>', item); //name, awesome, degree, week "KEYS"
    console.log('student[item]', student[item]); //
}

let dogArray = ['collie', 'pittbull', 'newfie', 'st bernard', 'dachshund'];
for(dog in dogArray){
    console.log(dog)
}

let catArray = ['tabby', 'british short haired', 'burmese', 'maine coon', 'rag doll'];
for(cat in catArray){
    console.log(cat)
}//NOT USED FOR ARRAYS, USED FOR OBJECTS

//Challenge: Write a forin loop that capitalizes the first letter of a student's name

//let studentName = 'cody';
//for(let n in studentName)
//    console.log(studentName.charAt(0).toUpperCase()); WRONG
//}

//CORRECT ANSWER
let studentName = 'cody';
let capName;
for(let n in studentName){
    if (n==0) {
        capName= studentName[n].toUpperCase();
    } else {
        capName+= studentName[n].toLowerCase()
    }
}
console.log(capName);

