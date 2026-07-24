//OUTER LOOP AND INNER LOOP


for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value ${i}`)

        for (let j = 0; j < 10; j++) {
            console.log(`Inner loop value ${j}`)
            
        }
    
    
}


//BREAK AND CONTINUE


//B R E A K

for (let i = 0; i < 20; i++) {
    if (i == 5) {

        console.log(` 5 has been detected`);
        break;
        
        
    }
    console.log(`the value is ${i}`);
    
    
}


// C O N T I N U E
for (let i = 0; i < 20; i++) {
    if (i == 5) {

        console.log(` 5 has been detected`);
        continue;
        
        
    }
    console.log(`the value is ${i}`);
    
    
}

