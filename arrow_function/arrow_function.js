//USE OF "T H I S" KEYWORD

const twelfth = {
    naam: "Ram",
    stream: "science",

    greeting: function(){

        console.log(`Namaste! ${this.naam}`);
        }
}

twelfth.greeting()
twelfth.naam = "BATMAN"
twelfth.greeting()


//INSIDE BEOWSER THE THIS KEYWORD ANSWER IS WINDOW


//this will work
const tea = function(){
    let name = "SPIDERMAN"
    console.log(name);
    
}

tea()


//BUT THIS WILL NOT WORK
const teaa = function(){
    let name = "SPIDERMAN"
    console.log(this.name);
    
}

teaa()



//FUNCTION USING ARROW FUNCTION

const papaya = (num1, num2) => num1 + num2
console.log (papaya(2,null));



const papayaa = (num1, num2) => ({aura: 999})
console.log (papayaa(2,3));