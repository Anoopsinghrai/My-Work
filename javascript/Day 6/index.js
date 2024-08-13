
//1
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  console.log(countries)
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  console.log(webTechs)
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
  
  console.log(mernStack);


//Iterate 0 to 10 using for loop, do the same using while and do while loop

for (let a = 0; a < 10; a++) {
  console.log("India");
}

let a = 0;
while (a <= 10) {
  console.log("Hello World");
  a++;
}

let a = 0;
do {
  console.log("Anoop Singh");
  i++;
} while (a <= 10);

//3
//Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let a = 10; a >= 0; a--) {
  console.log("Anoop Singh");
}

let a = 10;
while (a > 0) {
  console.log("Anoop Singh");
  a--;
}

let a = 10;
do {
  console.log("Anoop Singh");
  a--;
} while (a > 0);

//4
//Iterate 0 to n using for loop
for (let a = 1; a <= 5; a++) {
  console.log("".repeat);
}

//5
//Use for loop to iterate from 0 to 100 and print only prime numbers

for (let a = 2; a <= 100; a++) {
  let primenumber = true;
  for (let b = 2; b <= Math.sqrt(a); b++) {
    if (a % b === 0) {
      primenumber = false;
      break;
    }
  }
  if (primenumber) {
    console.log(a);
  }
}

//6
//Use for loop to iterate from 0 to 100 and print only even numbers

let a = 1;
while (a <= 100) {
  if (a % 2 == 0) {
    console.log(a);
  }
  a++;
}

//7
//Use for loop to iterate from 0 to 100 and print only odd numbers
for (let a = 0; a <= 100; a++) {
  if (a % 2 !== 0) {
    console.log(a);
  }
}

//8
//Use for loop to iterate from 0 to 100 and print the sum of all numbers.
//The sum of all numbers from 0 to 100 is 5050.

let sum = 0;

for (let a = 0; a <= 100; a++) {
  sum += a;
}

console.log("The sum of all numbers from 0 to 100 is:", sum);
