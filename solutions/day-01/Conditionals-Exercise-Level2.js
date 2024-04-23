/* 1. Write a code which can give grades to students according to theirs scores:
   - 80-100, A
   - 70-89, B
   - 60-69, C
   - 50-59, D
   - 0-49, F
*/

let grade = 100;
let finalGrade = '';

if (grade >= 90 &&  grade <= 100) finalGrade = "A";
else if (grade >= 70 &&  grade <= 89) finalGrade = "B";
else if (grade >= 50 &&  grade <= 69) finalGrade = "C";
else if (grade >= 50 &&  grade <= 59) finalGrade = "D";
else if (grade >= 0 &&  grade <= 49) finalGrade = "F";
else console.log("Grade should have a value from 0 to 100");

finalGrade && console.log(`Your final grade is: ${finalGrade}`);



/* 2. Check if the season is Autumn, Winter, Spring or Summer.
   If the user input is :
   - September, October or November, the season is Autumn.
   - December, January or February, the season is Winter.
   - March, April or May, the season is Spring
   - June, July or August, the season is Summer
*/


const autumn = ['September', 'October', 'November'];
const winter = ['December', 'January', 'February'];
const spring = ['March', 'April', 'May'];
const summer = ['June', 'July', 'August'];

let month = "July";
let season = '';

autumn.includes(month)
? season = 'autumn'
: winter.includes(month)
? season = 'winter'
: spring.includes(month)
? season = 'spring'
: summer.includes(month)
? season = 'summer'
: console.log("Please provide valid month");

console.log(`The season is ${season}.`)


/* 3. Check if a day is weekend day or a working day. Your script will take day as an input.

```sh
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
```
*/

const dayInput = 'fRiDaY';
const workingDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
const weekEnds = ['saturday', 'sunday'];

if (workingDays.includes(dayInput.toLowerCase())) {
    console.log(`${dayInput.charAt(0).toUpperCase() + dayInput.toLowerCase().slice(1)} is a working day.`)
} else {
    console.log(`${dayInput.charAt(0).toUpperCase() + dayInput.toLowerCase().slice(1)} is a weekend.`)
}