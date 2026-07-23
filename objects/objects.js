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
    console.log(`hello ${this.name}` )
}

console.log(user1.greeting());





//OBJECT ASSIGN
 const target = { a: 1, b: 6}
 const source = { b: 7, c: 9}

 const ret = Object.assign(target, source)
 console.log(ret);


 //but use spread operator mostly



 //key values of objets

 const instaUsers = [{
    name: "member1",
    id: 101,
    isLoggedIn: true
 },
 {
    name: "member2",
    id: 102,
    isLoggedIn: true
 },
 {
    name: "member3",
    id: 103,
    isLoggedIn: true
 }]

console.log(Object.keys(instaUsers));   
                



 




