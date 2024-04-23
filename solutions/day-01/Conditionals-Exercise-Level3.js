/*1. Write a program which tells the number of days in a month.

```sh
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
```

// 2. Write a program which tells the number of days in a month, now consider leap year.
*/

const inputMonth = "February";
const isLeapYear = false;
const daysOfMonth = [
    {
        month: "january",
        days: 31
    },
    {
        month: "february",
        days: 28,
        daysLeapYear: 29
    },
    {
        month: "march",
        days: 31
    },
    {
        month: "april",
        days: 30
    },
    {
        month: "may",
        days: 31
    },
    {
        month: "june",
        days: 30
    },
    {
        month: "july",
        days: 31
    },
    {
        month: "august",
        days: 31
    },
    {
        month: "september",
        days: 30
    },
    {
        month: "october",
        days: 31
    },
    {
        month: "november",
        days: 30
    },
    {
        month: "december",
        days: 31
    }
]

let days;

days = daysOfMonth.find(month => month.month === inputMonth.toLowerCase());

if (days) {
    console.log(`${inputMonth.charAt(0).toUpperCase() + inputMonth.toLowerCase().slice(1)} has ${isLeapYear ? days.daysLeapYear : days.days} days.`)
} else {
    console.log(`${inputMonth} is not a valid month.`);
}

