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
    let palindrone = 'noon';
    for(let i in 'noon'){
    if (i == 0) {
      word[0] == word[3];
      word[1] == word[2];
    } else {
      console.log("This is not a palindrone.");
    }
    //write an if statement that evaluates if a string is the same backwards and forward. If it is the same, return the word back out. If it is not the same, return 'This is not a palindrone'. Use the function scafold provided
  console.log(palindrone)
    return palindrone
  }
}
  const noon = checker('noon')



  const instructors = [
    { first: "Autumn", last: "Henderson", language: "JS", powerLevel: 200 },
    { first: "Alecx", last: "Moritz", language: "JS", powerLevel: 176 },
    { first: "David", last: "Whitt", language: "JS", powerLevel: 198 },
    { first: "Tyler", last: "Shelton", language: "JS", powerLevel: 234 },
    { first: "Ingeborg", last: "Slegers", language: "JS", powerLevel: 182 },
    { first: "Zachary", last: "Maynard", language: "JS", powerLevel: 167 }
  ];
  //Use the array provided for each challenge. If you dont know how to use these array methods, look them up on MDN or
  //another sight. CONSOLE LOG THE ANSWER.
  
  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who have a powerlevel over 175.
 /* let over175;
  const result = instructors.filter(instructors=> instructors.powerLevel > 175)
  console.log(result);
  */
  // Array.prototype.map()
  // 2. Give us an array of the instructors' first and last names
  let firstAndLast=console.log(Object.values(instructors[first[last]]))
  
  // Array.prototype.sort()
  // 3. Sort the instructors by powerlevel, highest to lowest
  let ordered;
  
  // Array.prototype.reduce()
  // 4. What is the cumulative power level of all of the instructors?
  let reduced;
  
  // 5. What is the average powerlevel of the instructors.
  let average;
  
  const people = [
    "Beck, Mary",
    "Becker, Heather",
    "Beckett, Emily",
    "Beddoes, Chris",
    "Beecher, Alex",
    "Beethoven, Nikki",
    "Begin, Jac",
    "Belloc, Abi",
    "Bellow, Chris",
    "Benchley, Doug",
    "Benenson, Sean",
    "Ben-Gurion, Jon",
    "Benjamin, Megan",
    "Benn, Robin",
    "Bennington, Sean",
    "Benson, Scott",
    "Bent, Silas",
    "Bentsen, Lloyd",
    "Berger, Ric",
    "Bergman, Ingmar",
    "Berio, Luciano",
    "Berle, Milton",
    "Berlin, Irving",
    "Berne, Eric",
    "Bernhard, Sandra",
    "Berra, Yogi",
    "Berry, Halle",
    "Berry, Wendell",
    "Bethea, Erin",
    "Bevan, Aneurin",
    "Bevel, Ken",
    "Biden, Joseph",
    "Bierce, Ambrose",
    "Biko, Steve",
    "Billings, Josh",
    "Biondo, Frank",
    "Birrell, Augustine",
    "Black, Elk",
    "Blair, Robert",
    "Blair, Tony",
    "Blake, William"
  ];
  // 6. sort Exercise
  // Sort the people alphabetically by last name
  let sorted;
  