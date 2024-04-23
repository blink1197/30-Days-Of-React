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
    'Kenya',
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]

// 1. Declare an _empty_ array;
const emptyArray = Array();
//console.log(emptyArray);

// 2. Declare an array with more than 5 number of elements
const myArray = [1, 2, 3, 4, 5, 6, 7];
//console.log(arrayWithMoreThan5Elements);

// 3. Find the length of your array
const lengthOfArray = myArray.length
//console.log(lengthOfArray);

// 4. Get the first item, the middle item and the last item of the arra
const firstItem = myArray[0];
const middleItem = myArray[Math.floor(lengthOfArray / 2)];
const lastItem = myArray[lengthOfArray - 1];
//console.log('First Item: ', firstItem);
//console.log('Middle Item: ', middleItem);
//console.log('Last Item: ', lastItem);

// 5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [1, 2, true, false, NaN, ['a', 'b'], {item: 3, id: 5}];
const lengthOfmixedDataTypes = mixedDataTypes.length;
// console.log(mixedDataTypes);
// console.log(lengthOfmixedDataTypes);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array using _console.log()_
// console.log(itCompanies);

// 8. Print the number of companies in the array
// console.log(itCompanies.length);

// 9. Print the first company, middle and last company
const firstCompany = itCompanies[0];
const middleCompany = itCompanies[Math.floor(lengthOfArray / 2)];
const lastCompany = itCompanies[lengthOfArray - 1];
//console.log('First Company: ', firstCompany);
//console.log('Middle Company: ', middleCompany);
//console.log('Last Company: ', lastCompany);

// 10. Print out each company
//console.log(itCompanies.join(" "));

// 11. Change each company name to uppercase one by one and print them out
//console.log(itCompanies.join(" ").toUpperCase());

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
//console.log(itCompanies.join(", "), "are big IT companies.");

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
const itCompany = "Netflix";
// if (itCompanies.includes(itCompany)) console.log(itCompany);
// else console.log(itCompany, "is not found");

// 14. Filter out companies which have more than one 'o' without the filter method
let companiesWithOs= [];
itCompanies.map(company => {
    let numOfOs = 0;
    company.split('').forEach(letter => letter.toLowerCase() === 'o' && numOfOs++);
    if (numOfOs > 1) companiesWithOs.push(company);
});
//console.log(companiesWithOs);

// 15. Sort the array using _sort()_ method
const sortedItCompanies = itCompanies.sort();
//console.log(sortedItCompanies);

// 16. Reverse the array using _reverse()_ method
const reverseSortedItCompanies = sortedItCompanies.reverse();
//console.log(reverseSortedItCompanies);

// 17. Slice out the first 3 companies from the array
const firstThreeCompanies = itCompanies.slice(0,3);
//console.log(firstThreeCompanies);

// 18. Slice out the last 3 companies from the array
const lastThreeCompanies = itCompanies.slice(itCompanies.length - 3, itCompanies.length + 1);
//console.log(lastThreeCompanies);

// 19. Slice out the middle IT company or companies from the array
//const middleCompanySliced = itCompanies.slice(Math.floor(itCompanies.length / 2)).shift();
//console.log(itCompanies);
//console.log(middleCompanySliced);

// 20. Remove the first IT company from the array
//const firstItCompany = itCompanies.shift();
//console.log(itCompanies);

// 21. Remove the middle IT company or companies from the array
//const middleItCompany = itCompanies.splice(Math.floor(lengthOfArray / 2), 1);
//console.log(itCompanies);

// 22. Remove the last IT company from the array
//const lastItCompany = itCompanies.pop();
//console.log(itCompanies);

// 23. Remove all IT companies
//const removedCompanies = itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);
