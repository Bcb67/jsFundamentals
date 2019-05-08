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