/**************
CALLING FUNCTIONS
************/

function hi(){
    console.log('HI')
};

hi();

//Challenge: Create a function that, when invoked, lists out the numbers 1-10

function hi(){
    for(let x=1; x <= 10; x++) {
    console.log(x);
    }
}
hi()

//Challenge: Given the array, create a function that lists out the values individually.
let arr = ["this", 'is', 'really', 'cool'];
function hi() {
    for(arr of arr) {
        console.log(arr);
    }
}

hi()

function checker(phrase) {
    let palindrone = "Madam im Adam";
    if (true) {
      console.log(palindrone);
    } else {
      console.log("This is not a palindrone.");
    }
    //write an if statement that evaluates if a string is the same backwards and forward. If it is the same, return the word back out. If it is not the same, return 'This is not a palindrone'. Use the function scafold provided
  }
  checker()
  module.exports = checker;
  