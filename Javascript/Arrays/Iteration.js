<!-- mostly used  -->
Array forEach
Array map()
Array flatMap()
Array filter()
Array reduce()
Array reduceRight()

<!-- less use  -->
Array some()
Array from()
Array keys()
Array entries()
Array with()
Array Spread (...)

See Also:
Basic Array Methods
Array Search Methods
Array Sort Methods	Array every()

<!-- https://www.w3schools.com/js/js_array_iteration.asp -->


//forEach
//The forEach() method calls a function (a callback function) once for each array element.
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}



const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value + "<br>";
}

//t Array map()....when you need to create array new with certain pattern specifically
// JavaScript Array map()
// The map() method creates a new array by performing a function on each array element.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.

// This example multiplies each array value by 2:
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}



const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}


//The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
const myArr = [1, 2, 3, 4, 5,6];
const newArr = myArr.flatMap(x => [x, x * 10]);
document.getElementById("demo").innerHTML = newArr;
//1,10,2,20,3,30,4,40,5,50,6,60
