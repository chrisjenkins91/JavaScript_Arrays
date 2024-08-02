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

/*
!THESE ARE THE ONLY FALSY VALUES
- false
- 0
- -0
- 0n
- ""
- '' (empty strings)
- null
- undefined
- Nan

*/


//If Else Structure
let amHungry = "";

if(amHungry) {
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

//!CONDITION PROBLEMS

//! Favorite Fruit Checker
//TODO Define a variable of favorite fruits
//? SET array favFruit = [];
let favFruits = ["grapes", "apples", "cantelope", "strawberries", "pomegranite"]

//TODO Define a variable for the fruit to check
//? Set string checker = ""
let checker = "";

//* Check if the fruit is in the array and output the result

if (checker == favFruits[0] || checker == favFruits[1] || checker == favFruits[2] || checker == favFruits[3] || checker == favFruits[4]) {
    console.log(`This is my favorite fruit!.`)
} else {
    console.log(`This is not my favorite fruit.`);
};

//!Grade Categorizer
//TODO Define a variable for the grade
debugger
let mygrade = "1";

//TODO Categorize the grade
let grade = ["A", "B", "C", "D", "F"]
    
//* output the result
if (mygrade >= 90 && mygrade <= 100) {
    console.log(`Awesome I made an ${grade[0]}`)

} else if (mygrade <= 89 && mygrade >= 80) {
    console.log(`That good that I made a ${grade[1]} on my test`)
} else if (mygrade <= 79 && mygrade >= 70) {
    console.log("I'm glad that I at least passed with a " + grade[2])
} else {
    console.log("I failed the test smh.")
}


//! Day of the Week Checker
//TODO Define an array of days of the week
//? SET array weekDays = []
let weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
let weekEnds = ["saturday", "sunday"]

//TODO Define a variable for the day to check
//? SET string day "monday";
let dayChecker = "saturday";

//TODO Check if the day is a weekday or weekend
//? IF statement?
//? Conditions: 
//? -  Day of a week
//? -  weekends: "saturday" || "sunday"
//? - weekdays: "monday" || "tuesday"|| "wednesday || "thursday" || "friday"
//* output the result

if (dayChecker == weekDays[0] || dayChecker == weekDays[1] || dayChecker == weekDays[2] || dayChecker == weekDays[3] || dayChecker == weekDays[4]) {
    console.log("i can't wait til the weekend!")
} else {
    console.log("Thank God it's the weekend")
}

//* Switch Case
debugger
switch(dayChecker) {
    case weekEnds[0]:
        console.log("It's the weekend");
        break;
    case weekDays[1]:
        console.log("It's the weekday");
        break;
    default:
        console.log("This day doesnt exist.");
};

//! Temperature Checker
//TODO Define a variable for the temperature
let farenheit = "0";

//TODO Categorize the temperature
//* output the result

if (farenheit >= 90) {
    console.log("Its really hot outside")
} else if (farenheit >= 75 && farenheit <= 89) {
    console.log("Its feel pretty good outside today?")
} else if (farenheit <= 74 && farenheit >= 65) {
    console.log("its a little chilly outside today")
} else {
    console.log("Its really really freezing outside")
};

//! Number Sign Checker
//TODO Define a variable for the number
let num = "4";
//TODO Check the sign of the number
//* ouput the result
if (num > 0) {
    console.log("This is a positive number")
} else {
    console.log("This is a negative number")
};


