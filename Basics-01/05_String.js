let name = "joy"
let gamecount = 33
console.log("The game count of" + joy + "is " + gamecount);  // not efficient way
console.log(`The game count of ${name} is ${gamecount}`); // efficient way


const Gamertag = String('Joyboy-33')
console.log(Gamertag[0]);  // char at 0

console.log(Gamertag.toUpperCase());  // Convert everything into upper case

console.log(Gamertag.charAt(2));  // char at 2nd index

console.log(Gamertag.indexOf("y"));  // index num of y

const newString = Gamertag.substring(0,3)  // takes char index 0 to 3

console.log(newString);


const anString = Gamertag.slice(-9,3)
console.log(anString);

const Gamernew = String("   Joy Boy  ")  // op: [Joy Boy]
console.log(Gamernew.trim());      

const url = "https://joyboy.com/hi%33goo"

console.log(url.replace("%33", "_"));  // replace 1st from the 2nd
console.log(url.includes("Joy")); //  checks either the string is present in the refered data

