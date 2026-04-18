// loops concept in JavaScript

// for loop
for (var x = 1; x <= 10; x++) {
  console.log(x);
}

// dry run
/**
 x                   condition          output
    1                   1<=10 true        1 
    2                   2<=10 true        2
    3                   3<=10 true        3
    4                   4<=10 true        4
    5                   5<=10 true        5
    6                   6<=10 true        6
    7                   7<=10 true        7
    8                   8<=10 true        8
    9                   9<=10 true        9
    10                  10<=10 true       10
    11                  11<=10 false      loop ends
 */
// we use for loops when we know how many times we want to execute a block of code.

// while loop

var filesize = 1024;
var currentfileDownloaded = 0;

while (currentfileDownloaded < filesize) {
  console.log("downloading file...");
  currentfileDownloaded += 256;
}

function getRandomNUmber(min, max) {
  return math.floor(Math.random() * (max - min + 1)) + min;
}

/*we use while loops when we don't know how many times we want to execute a block of code, but we want to continue until a certain condition is met.*/

// do while loop

var filesize = 1024;
var currentfileDownloaded = 0;

do {
    console.log("downloading file...");     
}
while (currentfileDownloaded < filesize) {
    currentfileDownloaded += 256;
}

/* we use do while loops when we want to execute a block of code at least once, and then continue executing it as long as a certain condition is met. */



// exercise concept in JavaScript
 // js engine scans the code and loads the function declarations and variable declarations into memory. This process is called hoisting. During hoisting, the function declarations are moved to the top of their scope, and the variable declarations are also moved to the top of their scope, but they are not initialized until the code is executed.

 // memory phase - os se jagh lo and registry done
 // code phase - os se jagh lo and code execute hona start hoga 

 //execution context  has two phase - memory phase and code phase
 // hoisting is the process of moving function declarations and variable declarations to the top of their scope during the memory phase of the execution context. This allows us to use functions and variables before they are declared in the code.