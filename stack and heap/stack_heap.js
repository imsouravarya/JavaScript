//PRIMITIVE (STACK)

let currentYear =  "Third"

let lastYear = currentYear

lastYear = "Fourth"

console.log(lastYear)
console.log(currentYear)



//NON-PRIMITIVE(HEAP)

let myDetails = {

    name: "jack",
    rollNumber: 12
}


let friendDetails = myDetails

myDetails.name = "Oggy"

console.log(myDetails);
console.log(friendDetails);



//In onject, use : not =




