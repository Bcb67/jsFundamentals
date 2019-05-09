//Length and others

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(long.length)

let colors = ['blue', 'green','yellow', 'red', 'orange', 'purple']
console.log(colors.length)
console.log(colors.toString())
let colors = ['blue', 'green','yellow', 'red', 'orange', 'purple']
console.log(typeof colors)
console.log(typeof colors.toString())

/* Challenge:
First check if you are wirking with an array.
Then flip the values within the array (what was in index 4 is now in 0,3,to 1, etc)
using a method onl, print the values of the newly arranged array
*/
 let arr = [1,2,3,4,5]
 console.log(arr instanceof Array);
 arr.splice(0,1,5)
 arr.splice(1,1,4)
 arr.splice(2,1,3)
 arr.splice(4,1,2)
 arr.splice(5,1,1)
 console.log(arr)