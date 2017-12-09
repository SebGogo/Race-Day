let raceNumber = Math.floor(Math.random()*1000);
let registeredEarly = true;
let runnerAge = '';

if (!registeredEarly) {
   raceNumber += 1000;
}
if (runnerAge > 18) {
  console.log(`You will be racing at 9:30am and your race number is ${raceNumber}`);
}
else if (runnerAge > 18 || registeredEarly) {
  console.log(`You will be racing at 11:00am and your race number is ${raceNumber}`);
}
else if (runnerAge < 18 && !registeredEarly) {
  console.log(`You will be racing at 12:30pm and your race number is ${raceNumber}`);
}
else if (runnerAge > 18 && !registeredEarly) {
  console.log(`You will be racing at 2:00pm and your race number is ${raceNumber}`);
}
else {
  console.log('Please see the registration desk');
}
