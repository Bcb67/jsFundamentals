// Scope

// Javascript has function scope.
// Scope determines the accessability of these variables.
//Variables defined inside a function are not accessible from outside the function.

//Local and Global Scope

let x = 12

function scope() {
    let x = 33
    console.log(x);
}
scope();
console.log(x);


function coffee() {
    x=33
    console.log(x);
}
coffee()
console.log(x);

// Var vs Let
//var
var x = 12

function scope() {
    var x=33
    if (true){
        var x=45;
        console.log(x);
    }
    console.log(x);
}

scope()
console.log(x);
//let

function scope() {
    let x=33
    if (true){
        let x=45;
        console.log(x);
    }
    console.log(x);
}

scope()
console.log(x);
//const

function scope() {
    const x=33
    if (true){
        const x=45;
        console.log(x);
    }
    console.log(x);
}

scope()