//--LEVEL1--


//1
//toUpperCase() Method
 
var str="Hello World";
console.log(str.toUpperCase());

  //2
let string = 'Hello World';
console.log(string.toLowerCase()) ;    // javascript

 //3
let countries = 'India, Russia, Usa, Srilanka,  Nepal'
console.log(countries.split(', ')); //  ["India", "Russia", "Usa", "Srilanka", "and Nepal"]
 

//4
let a = 'Anoop'
console.log(a.repeat(10)) // [AnoopAnoopAnoopAnoopAnoopAnoopAnoopAnoopAnoopAnoop]

//--LEVEL2--

//1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

//2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

//3
let num=parseFloat('9.8');
if (num !== 10) {
    num=10;
}
console.log(num); 


//4

let randomNum = Math.floor(Math.random()*100);
console.log(randomNum)

 //--LEVEL3--

 //1
 let lv='Love is the best thing in this world. Some found their love and some are still looking for their love. Count the number of word love in this sentence'
        let count=0;
        let words = lv.split(' ');
        for(let i=0;i<words.length;i++){
            if(words[i].toLowerCase() === 'love'){
                count++;
            }
        }
        console.log(count);


  //2
 const text = 'total annual income of the person by extracting the numbers from the following text. He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month';

 const numbers = text.match(/\d+/g).map(Number);


 const monthlySalary = numbers[0];  
 const annualBonus = numbers[1];    
 const monthlyCourses = numbers[2]; 

 const annualSalary = monthlySalary * 12;
 const annualCourses = monthlyCourses * 12;
 const totalAnnualIncome = annualSalary + annualBonus + annualCourses;
 console.log(`Total annual income: ${totalAnnualIncome} euro`);