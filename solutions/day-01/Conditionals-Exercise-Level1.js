/* 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

   ```sh
   Enter your age: 30
   You are old enough to drive.

   Enter your age:15
   You are left with 3 years to drive.
   ```
*/

const age = 17;

if (age >= 18) console.log("You are old enough to drive");
else console.log(`You are left with ${18 - age} ${18-age == 1 ? "year" : "years"} to drive.`);

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

const myAge = 27;
const yourAge = 27;

if (myAge > yourAge) {
    console.log(`I am ${myAge-yourAge} ${myAge-yourAge == 1 ? "year": "years"} older than you`);
} else if (yourAge > myAge) {
    console.log(`You are ${yourAge-myAge} ${yourAge-myAge == 1 ? "year": "years"} older than me`);
} else {
    console.log(`We are the same age`);
}

/* 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
[Im going to use ternary operator since I've already used If-else]

   - using if else
   - ternary operator.

   ```js
   let a = 4;
   let b = 3;
   ```

   ```sh
     4 is greater than 3
   ```

*/

let a = 6;
let b = 11;

a > b 
? console.log("a is greater than b")
: b > a 
? console.log("b is greater than a") 
: console.log("a and b are equal");



/* 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

   ```sh
   Enter a number: 2
   2 is an even number

   Enter a number: 9
   9 is is an odd number.
   ```
*/

let number = 24;

number % 2 === 0 
? console.log(`${number} is an even number`)
: console.log(`${number} is an odd number`);