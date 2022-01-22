const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;

const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay;
console.log(`There are ${secondsPerDay} seconds in a day.`);

const userAge = prompt("How old are you?");

const weeksAlive = userAge * weeksPerYear;
const daysAlive = weeksAlive * daysPerWeek;
const hoursAlive = daysAlive * hoursPerDay;
const minsAlive = hoursAlive * minsPerHour;
const secsAlive = minsAlive * secondsPerDay;

console.log(`You've been alive for ${weeksAlive} weeks.
             You've been alive for ${daysAlive} days.
             You've been alive for ${hoursAlive} hours.
             You've been alive for ${minsAlive} minutes.
             You've been alive for ${secsAlive} seconds.`);
