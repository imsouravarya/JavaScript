 //IIFE QUICE FUNCTION CALL
 //to remove the pollution of GLOBAL SCOPE

 (function dataB(){
    console.log("db connected");
    
 })();


 //PASSING PARAMETERS WITH IIFE

 ((namee) => {
    console.log(`DB connected ${namee}`);
    
 })("mrBeast")

