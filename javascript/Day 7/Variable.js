//1
//Declare a function fullName and it print out your full name.

function fullName() {
    console.log("Anoop Singh Rai");
}
fullName();

//2
//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName, lastName) {
    return firstName + lastName;
}
console.log(fullName("Anoop", "SinghRai"))

//3
//Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(a, b,) {
    return a + b;
}
 console.log(addNumbers(20,20,));

 //4
 //An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.


 function areaOfRectangle(length, width) {
    return length * width;
}
let length = 5;
let width = 10;
console.log("Area of the rectangle:", areaOfRectangle(length, width));

//5
//Write a function name rgbColorGenerator and it generates rgb colors.
//rgbColorGenerator()
//rgb(125,244,255)

function rgbColorGenerator() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
     let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}
console.log(rgbColorGenerator())

//6
//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(array) {
    for (let a = 0; a < array.length; a++) {
        console.log(array[a]);
    }
}
const myArray = [1, 2, 3, 4, 5];
printArray(myArray);

//7
// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
//showDateTime()
//08/01/2020 04:08

function showDateTime() {
    let now = new Date();
    let day = String(now.getDate()).padStart(2, '0');
    let month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    let year = now.getFullYear();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');

    return `${month}/${day}/${year} ${hours}:${minutes}`;
}

console.log(showDateTime());

//9
//Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
//console.log(reverseArray([1, 2, 3, 4, 5]))

function reverseArray(arr) {
    let reversedArr = [];
    for (let a = arr.length - 1; a >= 0; a--) {
        reversedArr.push(arr[a]);
    }
    return reversedArr;
}

console.log(reverseArray([1, 2, 3, 4, 5]))

//console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']
function reverseArray(arr) {
    let reversedArr = [];
    for (let a = arr.length - 1; a >= 0; a--) {
        reversedArr.push(arr[a]);
    }
    return reversedArr;
}

console.log(reverseArray(['A', 'B', 'C']));

//10
////Writ a function which generates a randomUserIp.
function randomUserIp() {
    return Array(4).fill(0).map(() => Math.floor(Math.random() * 256)).join('.');
}

const randomIp = randomUserIp();
console.log(randomIp)


//11
//Write a function which generates a randomMacAddress


