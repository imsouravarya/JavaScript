
//assigning 100 as number
const balance = new Number(100)
console.log(balance);



//it will retuen a string, but the actual value of a
//will remain as a number
let a = 100
console.log(a.toString());
console.log(typeof a);


//finding length of a string
let s = "dfghjkdghkjlcgvhjbk"
console.log(s.length);


//convert zeroes to readable format
let tokens = 10000000000000000
console.log(tokens.toLocaleString("en-IN"));



//MAX VALUE AND MIN VALUE
let test = [12,33,22,11,43,543]
console.table([Math.min(...test), Math.max(...test)]);


//round ceil and floor
let x = 4.2
let b = 4.6
let c = 2.9
console.log(Math.round(x));
console.log(Math.ceil(b));
console.log(Math.floor(c));




