/*shallow copy shares same reference point
means changes will be reflected to original data


deep copy shares different reference point
means changes will not be reflected to original data

*/



const arr = [22,33,44,55,6]

console.log(arr.pop());
console.log(arr.push(21));
console.log(arr.unshift("hii"));

console.log(arr);



//splice and slice

let arry = [1,2,3,4,4,5,2,3,4,9]

console.log(arry.slice(1,6));
console.log(arry.splice(2,6));


//concat

let aliens = ["spidermonkey", "waybig", "diamond head"]
let characters = ["ben", "gwen", "kevin"]

let heroTime = aliens.concat(characters);

console.log(heroTime);





//spread operator
let colorss = ["blue", "green", "red"]
let cities = ["jaipur", "mumbai", "faridabad"]


let ssp = [...colorss, ...cities]

console.log(ssp);





//from
console.log(Array.from("unndertaker"));
