console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: "Lloyd",
  lastName: "Prock",
  hasSiblings: true,
  shoeCount: 8 * 2,
  favThreeFoods: ["Pasta", "Sushi", "Potatoes"]
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
const fullName = `${me.firstName} ${me.lastName}`;
console.log("My full name is:", fullName);

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log("My first favorite food is:", me.favThreeFoods[0]);
console.log("My last favorite food is:", me.favThreeFoods[me.favThreeFoods.length - 1]); // LP - making it scalable regardless of array length

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log("Currently I have", me.shoeCount, "shoes.");
me.shoeCount += 1;
console.log("After my recent purchase, I now have", me.shoeCount, "shoes!")

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = "Blue";
console.log("My favorite color is:", me.favoriteColor);

//Personal Stretch Goal with Constructor Functions

function People(first, last, siblings, shoes, favFoods, favColor) {
  this.firstName = first;
  this.lastName = last;
  this.hasSiblings = siblings;
  this.shoeCount = shoes;
  this.favThreeFoods = favFoods;
  this.favoriteColor = favColor;
  this.fullName = `${first} ${last}`;
}

const myself = new People("Lloyd", "Prock", true, 16, ["Steak", "Pasta", "Candy"]);
const someoneElse = new People("Benjamin", "Jackson", false, 2, [], "Red");
console.log("My constructed full name is", myself.fullName);
console.log("Someone Elses constructed full name is:", someoneElse.fullName);
console.log("My favorite color should be undefined:", myself.favoriteColor);
console.log("Someone else should not have any favorite foods:", someoneElse.favThreeFoods);
