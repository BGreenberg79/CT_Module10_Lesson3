// Task 1 Obtain String Length

let string1 = "The first NFL Superbowl was contested on January, 15th 1967 in Los Angeles, California.";
let lengthString1 = string1.length;
console.log(lengthString1);
// Uses .length method to get string length then display in console.log

// Task 2 Converting Cases

let string2 = "The Green Bay Packers beat the Kansas City Chiefs 35-10.";
let upperCaseString2 = string2.toUpperCase();
let lowerCaseString2 = string2.toLowerCase();
console.log(upperCaseString2);
console.log(lowerCaseString2);
// Converted a second string to upper and lower case before displaying both in console.log

// Task 3 Extracting Substrings 

let string3 = "The Chiefs were led by Coach Hank Stram and Quarterback Len Dawson, while the Packers were led by Coach Vince Lombardi and Quarterback Bart Starr" 
let substringString3 = string3.substring(0,66);
console.log(substringString3);
// Demonstrated the use of substring method by extracting and then displaying the entirety of the string before the comma using a start and end index

// Task 4 Splitting Strings

let string4 = "The halftime show for Superbowl I featured trumpeteer Al Hirt, and marching bands from Grambling State and University of Arizona";
let wordArray = string4.split(" ");
console.log(wordArray);
// Demonstrated the use of the split method using the " " space bar as a delimiter