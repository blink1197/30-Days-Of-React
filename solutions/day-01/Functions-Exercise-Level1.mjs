// 1. Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}


// 2. Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(num1, num2) {
    return num1 + num2;
}

// 3. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
function areaOfCircle(r) {
    return Math.PI * r * r;
}

// 4. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
function convertCelciusToFahrenheit(degCelcius) {
    return (degCelcius * (9 / 5)) + 32;
}

/* 5. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
    - The same groups apply to both men and women.
    - Underweight: BMI is less than 18.5
    - Normal weight: BMI is 18.5 to 24.9
    - Overweight: BMI is 25 to 29.9
    - Obese: BMI is 30 or more
*/
function calculateBMI(weightInKilogram, heightInMeters) {
    const bmi = weightInKilogram / (heightInMeters * heightInMeters);
    const roundedBMI = bmi.toFixed(1); // 1 decimal place

    if (bmi < 18.5) return `BMI: ${bmi} - Underweight`;
    else if (bmi >= 18.5 && bmi < 24.9) return `BMI: ${bmi} - Normal weight`;
    else if (bmi >= 24.9 && bmi < 29.9) return `BMI: ${bmi} - Overweight`;
    else return `BMI: ${bmi} - Obese`;
}

//6. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
    // Normalize input (make lowercase for flexible matching)
    month = month.toLowerCase();

    if (["september", "october", "november"].includes(month)) {
        return "Autumn";
    } else if (["december", "january", "february"].includes(month)) {
        return "Winter";
    } else if (["march", "april", "may"].includes(month)) {
        return "Spring";
    } else if (["june", "july", "august"].includes(month)) {
        return "Summer";
    } else {
        return "Invalid month";
    }
}