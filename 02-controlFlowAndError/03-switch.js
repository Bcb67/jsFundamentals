// SWITCH

let friend ='Roger'

switch(friend) {
    case "Tom":
      console.log('Hey Tom! when are you going rick clibming?');
    break;
    case "Kenn":
      console.log('Hey Kenn! Wanna play Catan');
    break;
    case "Carolyn":
        console.log('Hey Carolyn, when are we playing DnD?');
    break;
    default:
      console.log(`I'm sorry, ${friend} but do I know you?`);
}

//String interpolation allows us to create a placeholder for the value of a variable that we choose to assign.

//Challenge

let dessert = ''

switch(dessert){
    case "Pie":
        console.log('Pie, pie, me oh my!');
    break;
    case "Cake":
        console.log('Cake is great!');
    break;
    case "Ice Cream":
        console.log('I scream for ice cream!');
    break;
    default:
        console.log('Not on the menu.');
}
//multiple conditions

let yep = -8;

switch(true) {
    case (yep < 0 && yep > -10):
        console.log('worked');
    break;
case (yep > 0):
    console.log('worked!');
break;
default:
    console.log(`did not work`);
}