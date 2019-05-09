//Arrays

//Arrays are an object. They are a container that can hold multiple datatypes.
//Has [ ] brackets
//Great for lists

let students = ['Sebastion', 'Eric', 'Micheal', 16, 74, false, ['Nick', 'Charles', 'Ethan']]

//console.log(typeof students);
//console.log(students instanceof Array);
console.log(students[1])
console.log(students[6][1])

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
//food.push('Pizza') //adds pizza to the end of the array
//food.splice(1, 1, 'Bananas')
//food.splice(2, 0, 'Sweet Potato Pie')// first parameter is the index within the array, 2nd is the number of items i am wanting to remove 3rd name of item you want to add in/replace in the array

//food.pop(); //removes the last item in my array
//food.shift(); //removes first item in my array
food.unshift('Muffin', 'Apples'); //adds elements to the front of the array
console.log(food)



for(f in food) {
    console.log(food [f]);
    //console.log(f)
}
