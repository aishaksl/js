// DATE METHODS

/*
  new Date()             : Creates a new date object with current date and time

  toDateString()         : Returns only the date part as a readable string
  toTimeString()         : Returns only the time part as a readable string
  toLocaleDateString()   : Returns the date in local format
  toLocaleTimeString()   : Returns the time in local format

  getFullYear()          : Returns the 4-digit year
  getMonth()             : Returns the month (0 = January, 11 = December)
  getDate()              : Returns the day of the month (1–31)
  getDay()               : Returns the day of the week (0 = Sunday, 6 = Saturday)
  getHours()             : Returns the hour (0–23)
  getMinutes()           : Returns the minutes (0–59)
  getSeconds()           : Returns the seconds (0–59)
  getMilliseconds()      : Returns the milliseconds (0–999)
  getTime()              : Returns timestamp (milliseconds since Jan 1, 1970)

  setFullYear(y)         : Sets the year
  setMonth(m)            : Sets the month (0–11)
  setDate(d)             : Sets the day of the month
  setHours(h)            : Sets the hour (0–23)
  setMinutes(m)          : Sets the minutes
  setSeconds(s)          : Sets the seconds

  now()                  : Returns current timestamp
*/

let now = new Date(); // current date and time

console.log(now); // full date and time
console.log(now.toDateString()); // "Sat Jun 22 2025"
console.log(now.toTimeString()); // "13:48:52 GMT+0700..."
console.log(now.toLocaleDateString()); // local format date (e.g. "6/22/2025")
console.log(now.toLocaleTimeString()); // local format time (e.g. "1:48:52 PM")

console.log(now.getFullYear()); // 2025
console.log(now.getMonth()); // 5 (June — starts from 0)
console.log(now.getDate()); // 22 (day of the month)
console.log(now.getDay()); // 0 (Sunday)
console.log(now.getHours()); // 13 (1 PM)
console.log(now.getMinutes()); // current minutes
console.log(now.getSeconds()); // current seconds
console.log(now.getMilliseconds()); // current milliseconds
console.log(now.getTime()); // timestamp (ms since Jan 1, 1970)

// Setting date values : Bilgiyi degistirir / Yazar
now.setFullYear(2030);
now.setMonth(11); // December (months start from 0)
now.setDate(25); // 25th of the month
now.setHours(18); // 6 PM
now.setMinutes(30); // 30 minutes
now.setSeconds(0); // 0 seconds

console.log("Updated date:", now); // updated date and time

console.log("Current timestamp:", Date.now()); // timestamp of current moment

//  --------- Ways to Use new Date() ---------  //

// 1. Current date and time
let noww = new Date();
console.log("Current date and time:", now);

// 2. Create a date from a string
let dateFromString = new Date("2025-06-22");
console.log("Date from string:", dateFromString);

// 3. Create a date using numbers (year, monthIndex, day)
let dateFromNumbers = new Date(2025, 5, 22); // June 22, 2025
console.log("Date from numbers:", dateFromNumbers);

// 4. Create a date with full details (year, monthIndex, day, hour, minute, second)
let fullDate = new Date(2025, 11, 25, 10, 30, 0); // December 25, 2025 at 10:30:00
console.log("Full date with time:", fullDate);

// NOTE:
// - monthIndex starts at 0 (January is 0, December is 11)
// - If you provide fewer parameters, time will default to 00:00:00
