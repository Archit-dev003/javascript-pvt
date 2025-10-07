const score = 300
console.log(score);

const numscore = new Number(100.0942)
console.log(numscore);
console.log(numscore.toString().length); //converts into string [use () after the name of method]
console.log(numscore.toFixed(2)); // nums to show after decimal

console.log(numscore.toPrecision(4)); // takes round off the nums of digits mentioned [Ex: 123.09(4)==>123.1]

const value = 1000000000
console.log(value.toLocaleString()); //add commas btw the long num
console.log(value.toLocaleString('en-IN')); //coverts into indian local str

//************************ Maths *************************************

console.log(Math);
console.log(Math.abs(-3)); //coverts into absolute value i.e, -3 ==> 3 [not vice versa]
console.log(Math.round(3.9)); //gives round off
console.log(Math.ceil(4.1)); // if value is >4 [even 0.1] then op:5
console.log(Math.floor(4.1)); // if value is >5 then op: 4

console.log(Math.max(2,4,6,7,5));
console.log(Math.min(4,6,2,9,1));

const min = 11
const max = 20

console.log(Math.floor(Math.random()*(max-min)+1)+min);

