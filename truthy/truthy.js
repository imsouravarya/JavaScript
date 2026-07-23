 //falsy value

 //false, 0, -0, bigInt 0n, "", null, undefined, NaN

 //truthy value

 // "0", "false", " ",[],{}, function(){}




 //checck if object is empty

 const emptObj = {}

 if (Object.keys(emptObj).length === 0){
    console.log("object is empty");
    
 }





 //NULLISH COALESCING OPERATOR
 let lol ;

 lol = undefined ?? 11
 console.log(lol);



 //TERNIARY OPERATOR

 const tert = 100

 tert > 10 ? console.log("amount is big") : console.log("amount is not big");
 ;
 
 