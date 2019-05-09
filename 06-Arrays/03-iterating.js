//Iterating

//forEach() method that executes a function once for each array element

forEach('currentValue', 'the index', 'the entire array');

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

//food.forEach(f=> {console.log(f)})
//food.forEach((f, number)=>{console.log(number, f)})

food.forEach((f, number, array)=> {console.log(f, number, array)})

let foodFunction = () => {
    for (f in food) {
        console.log(f),
        console.log(food[f]),
        console.log(food)
    }
}
foodFunction();

/*Challenge:
Create a list (with an array) of movies
use .forEach() to list your movies
add antoher movie at the end
and replace one of your existing movies with another one
*/

let movies = ['Big Lebowski', 'Finding Nemo', 'Bad Boys', 'Blow', 'Pineapple Express']

movies.splice(1, 1, 'Get Him to the Greek')
movies.push('Avengers')
movies.forEach((movies =>{console.log(movies)}))