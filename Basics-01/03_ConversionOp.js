//1)
let id = 12333
console.log(typeof id);

//2)
let id1 = "12333"
console.log(typeof id1);
let valueOfNum = Number(id1)
console.log(typeof valueOfNum);

//"12333" => 12333
//"123ab" => NaN
// true => 1 / false => 0

////////////////////////////Operation////////////////////////////////////

console.log(1 + "2");
console.log("1" + 2);

console.log(1 + 2 + "3"); //(Depends on the type of first datatype & then treat same to the other data in console, in this case [Num + Num + String])

console.log("1" + 2 + 1) //([String + String + String])

console.log(+true); //OP: 1
console.log(+""); //OP: 0




