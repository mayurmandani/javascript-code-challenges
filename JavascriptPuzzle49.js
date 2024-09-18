/* 
Temporal API for Date and Time Handling ES15 feature 
The Temporal API provides a modernized approach to managing dates and times, 
solving many issues present in the traditional Date object.  
*/

const now = Temporal.Now.plainDateISO();
const nextMonth = now.add({ months: 1});

// Current date
console.log(now.toString());

// Date one month from now
console.log(nextMonth.toString());

/* The Temporal API is particularly useful for internationalization and time zone management, 
offering accurate and easy date manipulation. */