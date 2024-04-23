import countries from "./countries.mjs";


/*1. The following is an array of 10 students ages:
   `js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] ` - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use _abs()_ method
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortedAge = ages.sort();
const minAge = sortedAge[0];
const maxAge = sortedAge[sortedAge.length - 1];
console.log(sortedAge);
console.log("Min Age:", minAge);
console.log("Max Age:", maxAge);


// 2.Slice the first ten countries from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)

const firstTenCountries = countries.slice(0, 10);
//console.log(firstTenCountries);

// 3. Find the middle country(ies) in the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)

let middleCountries = [];
if (countries.length % 2 === 0) {
   countries.slice(countries.length/2 - 1, countries.length/2 + 1).map(country => middleCountries.push(country));
} else {
   middleCountries.push(countries[Math.floor(countries.length/2)]);
}
//console.log(countries);
//console.log(middleCountries);


// 4. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let firstHalfCountries = [];
let secondHandCountries = [];
if (countries.length % 2 === 0) {
   firstHalfCountries = countries.splice(0,Math.floor(countries.length / 2));
   secondHandCountries = countries;
} else {
   console.log(Math.floor(countries.length / 2));
   firstHalfCountries = countries.splice(0,Math.ceil(countries.length / 2));
   secondHandCountries = countries;
}

//console.log(firstHalfCountries);
//console.log(secondHandCountries);