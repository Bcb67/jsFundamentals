// RETURNS

function capitalizeName(name) {
    let capName = '';
    for (let l in name) {
        if(l ==0) {
            capName += name[l].toUpperCase();
        }else {
            capName += name[l].toLowerCase();
        }
    }
    console.log(capName)
    return capName
}

const myName = capitalizeName('cOdY')
console.log(myName+ ' how are you doing?')

//Challenge
//make a tip calculator using a function
//have it RETURN the value
//capture that reurned value in a variable
//Print the variable

/*function tipAmount(tip) {
    let tipPercentage = '';   WRONG
    for(let billTotal in tip) {
        if(billTotal == 50) {
            tipPercentage /= billTotal.tipAmount(.20)
        } else{
            tipPercentage /= billTotal.tipAmount(.15) WRONG
        }
    }
    console.log(tipPercentage)
    return tipPercentage
}
const myTip = tipAmount(.20)
console.log(myTip + " Great service!!")
*/
function tipCalc(bill) {
    let tip = (bill * 0.2);
    return tip.toFixed(2);
}
let bill = 19.88
let totalTip = tipCalc(19.88);
//console.log(totalTip);
console.log(`If my bill is ${bill}, my tip will be ${totalTip}.`)

function checker(word) {
    let palindrone = '';
    for(let i in word)
    if (i === 0) {
      palindrone+=word[0] === word[3];
      palindrone+=word[1] === word[2];
    } else {
      console.log("This is not a palindrone.");
    }
    //write an if statement that evaluates if a string is the same backwards and forward. If it is the same, return the word back out. If it is not the same, return 'This is not a palindrone'. Use the function scafold provided
  return palindrone
  }
  const noon = checker('noon')