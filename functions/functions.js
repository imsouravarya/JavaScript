//main purpose is, we can create a function and call the copy of function anytime


function sayBatman(){

    console.log("B");
    console.log("A");
    console.log("T");
    console.log("M");
    console.log("A");
    console.log("N");
    
}

sayBatman()


//HERE num1 and num2 are PARAMETERS
function twosum(num1, num2){
    console.log(num1 + num2);
    
}
//here 5,2 are ARGUEMENTS
twosum(5,2)



//RETURN LOGGEDIN USER USING FUNCTION
function loginUserMessage(username){
    return `${username} has just loggedIn`
}

console.log(loginUserMessage("BATMAN"));



//USING REST OPERATOR IN FUNCTIONS

function restOpt(...all){
    return all

}
console.log(restOpt(44,33,22))


