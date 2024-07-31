let fruits = ["apple", "strawberry", "cherry", "orange"];

//TODO Variable can work as index
let one = 1;
console.log(fruits);
console.log(fruits[3]);
console.log([one])


//updating array data
fruits[1] = "blueberries";
console.log(fruits);

//Adding new item to an array
let officeCharacters = ["Michael ", "Jim", "Dwight"];
console.log(officeCharacters);

//.push = addds new data at the end of the array
officeCharacters.push("Andy");
console.log(officeCharacters)

//.pop = remove the last item in the array
officeCharacters.pop();
console.log(officeCharacters);

//.unshift = Adds a new item to the front of the array
officeCharacters.unshift("Dwight");
console.log(officeCharacters);

//.shift = removes the first item in the array
officeCharacters.shift();
console.log(officeCharacters);

//.length = gives us total number of items in a array
console.log(officeCharacters.length);



//! Access Array Elements
//TODO Define an array of items = ;
let items = ["apple", "banana", "cherry", "date", "elderberry"];

//TODO Access specific elements
let firstItem = items[0];
let thirdItem = items[2];
let lastItem = items[4];// let lastItem = items[items.length -1];


//* Output the results
console.log("Items: " + items);
console.log("First Item: " + firstItem);
console.log("Third Item: " + thirdItem);
console.log("Last Item: " + lastItem);


//! List of Favorite Movies
let movies = ["Friday", "The Matrix", "Bad Boys", "Waterboy"];

//TODO Define an array of favorite movies

let firstMovie = movies[0];
let secondMovie = movies[1];
let thridMovie = movies[2];
let lastMovie = movies[3];

//* Output each movie individually
console.log("First Movie: " + movies[0]);
console.log("Second Movie: " + movies[1]);
console.log("Third Movie: " + movies[2]);
console.log("Fourth Movie: " + movies[3]);


//!Sum of Array Elements
//TODO Define an array of numbers
let numbers = [22, 13, 56, 33, 29];

//TODO Calculate sum of the numbers
let sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];

//*Output the result
console.log(sum);

//!Concatenate Strings in an Array
//TODO Define an array of strings
let strings = ["Hello, How are you", "I'm on my way to study,", "Can you help me with this project?"]
//TODO Concatenate the strings
//* Output the result
console.log(`${strings[0]} Chris`)
console.log(`${strings[1]} so I'll talk to you later`)
console.log(`${strings[2]} please and thank you!`)


//!Update Array Elements

//TODO Define an array of items
let colors = ["red", "blue", "green", "yellow", "purple"];

//TODO  Update
//? green to cyan
colors[2] = "cyan";
colors.pop();
colors.push("orange")

//* Output the results
console.log(colors);

//Random numbers
let rng = Math.floor(Math.random() * Math.floor(colors.length))

//? purple to orange
colors[4] = "orange"

//* Output the results
console.log(colors[rng])

//! Condtions
let boo = false;
console.log(boo);

/* 
"==" - "is equal to"
*/
let bar = 4 == 5 - 1;

console.log(bar);

let boo2 = "4"
let boo3 = 4
let boo4 = "four"
console.log(boo2 == boo3);
//!TRUE
//Strictly Equals to "==="

console.log(boo2 === boo3);
//!FALSE
//Not equal to "!="

console.log(boo3 != boo4);
//!TRUE

//Greater than ">"
console.log(boo3 > 6);
//?TRUE

//Less than or equal to "<="
console.log(boo3 <= 4);
//?TRUE

//Greater than or equal to ">="
console.log(boo3 >= 5);
//?False

//Logical Operators

// AND = "&&"
console.log("Double Ampersans: " + (4 == 4 && 3 == 3))

// OR = "||"
console.log("DOUBLE lines: " + 4 == 4 || 3 == 3);

// NOT = "!"
console.log("NOT: " + (!false));

// If Structure
if (boo3 == 4) {
    console.log("hey I'm number 4!");
};

//If Else Structure
let amHungry = true;

if(!amHungry) {
    console.log("lets's eat! I want Chicken Nuggets"); 
} else {
    console.log("Lets's keep coding! Yay!!!");
};

//Else If Structure
let howHungry = 75;

if (amHungry === true && howHungry >= 75) {
    console.log("I'm so hungry I can eat a horse.")
} 
else if (amHungry === true && howHungry >= 25) {
    console.log("I'm hungry enough to eat Cheeze-Its")
} 
else if(amHungry === false && howHungry) {
    console.log("I'm depressed!")
} 
else {
    console.log("I'm not that hungry dude.");
};

//Switch Statements
switch (amHungry == true) {
    case howHungry >= 75: 
        console.log("I'm so hungry I can eat a horse.")
        break;
    case howHungry >= 25:
        console.log("I'm hungry enough to eat Cheez-Its")
        break;
    default:
        console.log("I just wanna eat to eat!")
}