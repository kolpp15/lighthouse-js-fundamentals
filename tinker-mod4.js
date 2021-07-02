// while loops start ---------------------------------------------------
var num = 99;

while (num >= 1) {
  if (num === 1) {
    console.log(num + " bottle of juice on the wall!" + num + " bottle of juice! Take one down, pass it around..." + (num-1) + " bottles of juice on the wall!");
  }
  else if (num === 2) {
    console.log(num + " bottles of juice on the wall!" + num + " bottles of juice! Take one down, pass it around..." + (num-1) + " bottle of juice on the wall!");
  }
  else {
    console.log(num + " bottles of juice on the wall!" + num + " bottles of juice! Take one down, pass it around..." + (num-1) + " bottles of juice on the wall!");
  }
  num = num -1;
}

var seconds = 60
while (seconds >=0) {
  if (seconds === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  }
  else if (seconds === 6) {
    console.log("Main engine start");
  }
  else if (seconds === 10) {
    console.log("Activate main engine hydrogen burnoff system");
  }
  else if (seconds === 16) {
    console.log("Activate launch pad sound suppression system");
  }
  else if (seconds === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  }
  else if (seconds === 50) {
    console.log("Oribter transfers from ground to internal power");
  }
  else {
    console.log("T-"+ seconds + " seconds");
  }
  seconds = seconds -1;
}
// while loops end ------------------------------------------------

// changing while to far loop--------------------------------------
var x = 9;
while (x >= 1) {
    console.log("hello " + x);
    x = x - 1;
}

for (x = 9; x >= 1; x--) {
  console.log("hello " + x);
}
// far loop end ----------------------------------------------------

// !12 solution --------------------------------------------------
let solution = 1;

for (let i = 1; i <= 12; i++) {
  solution *= i;
}
console.log(solution);
// !12 solution end -----------------------------------------------

// Nested Loop start -------------------------------------------
var row = 0;
var seat = 0;

for (row = 0; row < 26; row++) {
  for (seat = 0; seat < 100; seat++) {
    console.log(row + "-" + seat);
  }
}
// Nested loop done -------------------------------------------

// loopy assignment --------------------------------
for (let i = 100; i <= 200; i++){
  
  if (i % 3 === 0 && i % 4 === 0){
    console.log('LoopyLighthouse');
  } else if (i % 3 === 0){
    console.log('Loopy');
  } else if (i % 4 === 0){
    console.log('Lighthouse');
  } else {
    console.log(i);
  }
}
//---------------------------------------------------

// for..of loop example ------------------------------
let data = [1,2,3,4];
for(let val of data){
  console.log(val);
}

let name = 'brian';
for(let character of name){ 
  console.log(character);
}
// for..of loop END ---------------------------------

// function example 1--------------------------------
function sayHello() {
  var message = "Hello!"
  return message;
}
console.log(sayHello());
// example 1 end ------------------------------------

// loop function example ----------------------------
var sound = "" ;
function laugh(num) {
  for (var x = 0 ; x < num ; x++) {
    sound = sound + "ha" ;
  }
  sound = sound + "!";
  return sound;
}
console.log(laugh(3)) ;
// loop function end --------------------------------

//loop function example 2 ---------------------------
function isPrime(integer) {
  for(var x = 2; x < integer; x++) {
    if(integer % x === 0) {
      console.log(integer + " is divisble by " + x);
      return false;
    }
  }
  return true;
}
isPrime(49);
// loop example 2 end --------------------------------

//using return values -----------------------------
function addTen(x) {
  return x + 10;
}

function divideByThree(y) { //passes the value of 12 as an argument
  return y / 3;
}

var result = addTen(2);
console.log(divideByThree(result));
//return values end --------------------------------

//build triangle function --------------------------
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}
function buildTriangle(length) {
  var triangle = "";
  
  var lineNumber = 1;
  for (lineNumber = 1; lineNumber<=length; lineNumber++) { 
    triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
}
console.log(buildTriangle(10));
//end build triangle function------------------------

//anonymous function hahaha!----------------------
var sound = "";

var laugh = function(num) {
  for (x = 0; x < num; x++) {
    sound = sound + "ha";
  }
  sound = sound + "!";
  return sound;
}
console.log(laugh(3));
//anonymous function end---------------------------

//named function boohoo!---------------------------
var cry = function myFunction (){
  var sound = "boohoo!";
  return sound;
};
console.log(cry());
//named function end-------------------------------

//inline function example--------------------------
// emotions() function definition
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
emotions ("happy", function(num) {
  var sound = ""; // Local variable
  //Iterate
  for (var i = 0 ; i < num ; i++) {
      sound = sound + "ha" ;  
  }
  sound = sound +"!"; 
  return sound; 
});
//inline example done-------------------------------

/* chooseStations(stations) function that takes in an 
array of possible voting stations and then only returns 
the names of the stations that are appropriate*/

// Good stations have at least 20 capacity
// Stations can be schools OR community centres
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations (stations) {
  const goodStations = []
   
  for (const station of stations) {
    const capacity = station[1]

    if (capacity >= 20) {

      const type = station[2]

      if (type === "school" || type === "community centre") {
        goodStations.push(station[0])
      }
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));
// chooseStation done -------------------------------------

//move north south east west function --------------------------------------
const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

function finalPosition(moves) {
  const position = [0,0];

  for (const move of moves){
    if (move == 'east'){
      position[0] += 1;
    }else if (move == 'west'){
      position[0] -= 1;
    }else if (move == 'north'){
      position[1] += 1;
    }else{
      position[1] -= 1;
    }
  }
  return position;
}
console.log(finalPosition(moves));
//move function end--------------------------------------------------------

//ageCaclulator sample-------------------------------------------------
function ageCalculator(name, yearOfBirth, currentYear){
  return name + " is " + (currentYear-yearOfBirth) + " years old.";
}

console.log(ageCalculator("Brian", 1990, 2021));
console.log(ageCalculator("Jenny", 1993, 2021));
console.log(ageCalculator("Jun", 1994, 2021));
console.log(ageCalculator("Jisoo", 1997, 2021));
//ageCalculator end----------------------------------------------------

//howManyHundreds example----------------------------------------------
function howManyHundreds(num){
  return Math.floor((num / 100));
}


console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
//nowManyHundreds done--------------------------------------------------

//calculate area sample ------------------------------------------------
function calculateRectangleArea (length, width){
  if (length <= 0 || width <= 0){
    return undefined;
  } else {
    return length * width;
  }
}

function calculateTriangleArea (base, height) {
  if (base <= 0 || height <= 0){
    return undefined;
  } else {
    return base * height / 2;
  }
}

function calculateCircleArea (radius) {
  if (radius <= 0){
    return undefined;
  } else {
    return Math.PI * (radius * radius);
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
//area calculation end--------------------------------------------------

//array name list sample -----------------------------------------------
var udaciFamily = ["Julia", "James", "Brian"];
for (var index = 0; index<udaciFamily.length; index++){
    console.log(udaciFamily[index]);
}
//array name end-------------------------------------------------------

//create array based on list of variables------------------------------
var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = new Array(captain, second, pilot, companion, mercenary, mechanic);

console.log(crew);
//create array done ----------------------------------------------------

//add by loop sample #1 --------------------------------------------------
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}
//add loop done----------------------------------------------------------

//add by forEach loop sample #2 ----------------------------------------
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

function printDonuts(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
}
donuts.forEach(PrintDonuts);
//forEach sample #2 end----------------------------------------------------

//forEach loop inline sample #3 ------------------------------------------
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});
//forEach loop inline done----------------------------------------------

//map() sample #1 -------------------------------------------------------
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});
console.log(improvedDonuts);
//map() sample #1 done-----------------------------------------------------

//map() sample #2 --------------------------------------------------------
var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

var totals = bills.map(function(bill){
  bill = bill * 1.15;
  return Number(bill.toFixed(2));
})
console.log(totals);
//map() sample #2 done ---------------------------------------------------

//forEach loop w/ divisible--------------------------------------------
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function(element, index){
  if(element%3===0){
      test[index]=test[index]+100;
  }
});
console.log(test);
//divisible end---------------------------------------------------------

//display each donut loop to loop each row sample----------------------
var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

for (var row = 0; row < donutBox.length; row++) {
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}
//loop to loop each row done--------------------------------------------

//numbers array to even and odd --------------------------------------
var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (var row = 0; row < numbers.length; row++) {

  for (var column = 0; column < numbers[row].length; column++) {
    if(numbers[row][column]%2===0)
      numbers[row][column] = "even";
    else 
      numbers[row][column] = "odd";
    }
  }
console.log(numbers);
//numbers to even odd end --------------------------------------------

// while to for loop sample ------------------------------------------
let i = 0;
while (array[i] + step <= end){
  array.push(array[i] + step);
  i++;
} 
return array;

for (let i = 0; array[i] + step <= end; i++)
  array.push(array[i] + step);
  return array;
//while to for sample end--------------------------------------------

// looping - range sample (start, end, step)-------------------------
function range (start, end, step){
  const array = [];

  if (start === undefined || end === undefined || step === undefined){
    return array;
  } else if (start > end){
    return array;
  } else if (step <= 0){
    return array;
  } else {
    
    array[0] = start;
    
    for (let i = 0; array[i] + step <= end; i++)
      array.push(array[i] + step);
      return array;
  }
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
// looping - range sample end-------------------------------------------

//last index of sample-----------------------------------------
function lastIndexOf (array, value) {
  for (let i = array.length; i >=0; i--){
    if (!array.includes(value)) {
      return -1;
    } else if (array[i] === value){
      return i;
    }
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
//last index of sample end--------------------------------------

//concatenate arrays sample------------------------------------
function concat (array1, array2) {
  let newArray = [];
  let i = 0;

  for (i = 0; i < array1.length; i++){
    newArray[i] = array1[i];
  }
  let j = 0;

  for (j = 0; j < array2.length; j++){
    newArray[i + j] = array2[j];
  }

  return newArray;
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);
//concatenate arrays end-----------------------------------------

//objects: umbrella open/close sample ---------------------------
var umbrella = {
  color: "pink",
  isOpen: false,
  open: function() {
      if (umbrella.isOpen === true) {
          return "The umbrella is already opened!";
      } else {
          umbrella.isOpen = true;
          return "Julia opens the umbrella!";
      }
  },
  close: function() {
    if (umbrella.isOpen === true) {
      umbrella.isOpen = false;
      return "Julia closes the umbrella!";
    }else {
      return "The umbrella is already closed!";
    }
  }
};
console.log(umbrella.close());
//objects: umbrella sample end------------------------------------

//smartGarbage adding numbers sample------------------------------

function smartGarbage (trash, bins) {

  if (trash === 'waste'){
    bins.waste ++;
  } else if (trash === 'recycling'){
    bins.recycling ++;
  } else if (trash === 'compost'){
    bins.compost ++;
  }
  return bins;
  }
  
  //call
  console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
  //smartGarbage end----------------------------------------------

  //car speed recording sample-----------------------------------
  function carPassing(cars, speed){

    cars.push({
      time: Date.now(),
      speed: speed
    })
    return cars;
  }
  
  const cars = [
    {
      time: 1568329654807,
      speed: 40,
    },
    {
      time: 1568329821632,
      speed: 42,
    },
    {
      time: 1568331115463,
      speed: 35
    }
  ]
  
  const speed = 38
  
  console.log(carPassing(cars, speed));
  //car speed sample end----------------------------------------

  //vege winner sample---------------------------
  const vegetables = [
    {
      submitter: 'Old Man Franklin',
      redness: 10,
      plumpness: 5
    },
    {
      submitter: 'Sally Tomato-Grower',
      redness: 2,
      plumpness: 8
    },
    {
      submitter: 'Hamid Hamidson',
      redness: 4,
      plumpness: 3
    }
  ]
  
  const metric = 'redness';
  
  const judgeVegetable = function(vegetables, metric) {
    let maxPoints = 0;
    let winner;
  
    for (let i = 0; i < vegetables.length; i++){
  
      if (vegetables[i][metric] > maxPoints){
        maxPoints = vegetables[i][metric];
        winner = vegetables[i]['subitter'];
      }
    }
    return winner;
  };
  
  judgeVegetable(vegetables, metric);  
  //vege sample end-----------------------------------