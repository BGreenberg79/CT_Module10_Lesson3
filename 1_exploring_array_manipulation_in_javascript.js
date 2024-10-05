// Task 1: Adding and Removing Elements

let musicalInstruments = ["Piano", "Violin", "Guitar", "Drums"];

function addInstrument(arr, instrument) {
    arr.push(instrument);
    return arr;
};
addInstrument(musicalInstruments, "Saxophone");
console.log(musicalInstruments);
// Function to add instrument to array using push method definition and then call

function removeLastInstrument(arr){
    arr.pop();
    return arr;
};
removeLastInstrument(musicalInstruments);
console.log(musicalInstruments);
// Function using pop method to remove the last instrument from the array

// Task 2 Sorting Arrays
let numbers = [2, 17, 7, 41, 79, 77];
numbers.sort((a,b) => a-b );
console.log(numbers);
/* Sorts the array numbers in ascending order. Uses arrow function subtracting b from a to ensure sort is done numerically
instead of javascrit interpreting our numbers as string 
*/

// Task 3 Applying Array Methods

let numbers2 = [15, 21, 42];
let doubledNumbers2 = numbers2.map(num => num * 2);
console.log(doubledNumbers2);
// Use map method to double an array of numbers

let filteredNumbers = numbers2.filter(num => num % 2 != 0);
console.log(filteredNumbers);
// Use filter method to filter out even numbers

let sumNumbers = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0,);
console.log(sumNumbers);
// Use reduce method to sum numbers in arra