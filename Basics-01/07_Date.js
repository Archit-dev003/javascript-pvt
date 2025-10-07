const myDate = new Date() 
console.log(myDate.toISOString()); //op: 2025-10-05T19:49:02.504Z
console.log(myDate.toJSON()); //op: 2025-10-05T19:49:02.504Z
console.log(myDate.toLocaleDateString());  //op: 6/10/2025
console.log(myDate.toLocaleString());  //op: 6/10/2025, 1:19:02 am
console.log(myDate.toString());  //op: Mon Oct 06 2025 01:19:02 GMT+0530 (India Standard Time)
console.log(typeof myDate); //op: Object

const newdate = new Date(2024,5,25)
console.log(newdate.toString());

const new2Date = new Date("01-03-2005")
console.log(new2Date.toLocaleString());

let timestamp = Date.now()
console.log(timestamp);

console.log(new2Date.getTime());

//for specific value [Note: indexing starts from 0]
console.log(new2Date.getDate());
console.log(new2Date.getFullYear());
console.log(new2Date.getMonth());
console.log(new2Date.getDay());

new2Date.toLocaleString('defaut',{    // Default ==> internationalization
    weekday: "long",
    day: "numeric"
})

