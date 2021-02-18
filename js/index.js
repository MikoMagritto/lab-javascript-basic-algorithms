// Iteration 1: Names and Input
console.log("I'm ready")
var hacker1= "Michel"
var hacker2= "Karina"
console.log("The driver's name is "+ hacker1)
console.log("The navigator's name is "+ hacker2)

// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  
  } else if (hacker2.length > hacker1.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
  
  } else if (hacker2.length = hacker1.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`);
  
  }
  

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split('').join(' '));

var reversename = hacker1.split('');


var reversedArr = []
for(var i = reversename.length; i >= 0; i--) {
    reversedArr.push(reversename[i])
}

var reversedStr = reversedArr.join('')
console.log(reversedStr)