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



 