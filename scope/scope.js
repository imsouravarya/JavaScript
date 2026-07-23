//BLOCK SCOPE AND GLOBAL SCOPE



function valueOFa(alpha){


    return `the value of a is ${alpha}`
}
console.log(valueOFa(22));






//if; block and global scope
 let a = 300
 if(true){
    console.log(`INNER VALUE OF A IS`, 10);
    
 }
 console.log(a);


 //NESTED FUNCTIONS

 function one() {
    const yourname = "Gian"

    function two(){
        const myname = "sunio"
        console.log(myname);
    }
    two()
    console.log(yourname)
 }
 one()
 
