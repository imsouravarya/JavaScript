/*objects can be declared using literals and constructors
literal...non-singleton
constructor...singleton
*/


//TWO METHODS TO CALL AN OBJECT
const user1 = {

    name: "BATMAN",
    age: 50,
    location: "Germany",
}


console.log(user1.location);
console.log(user1["name"]);


//using GREETING
user1.greeting = function(){
    console.log(`hello ${this.name}`)
}

console.log(user1.greeting());




