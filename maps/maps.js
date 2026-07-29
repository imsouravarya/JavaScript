
/*
MAPS are iteratable
MAPS are class and to initialize class instance we need to use "new" keyword
objects are not iteratable
CLASS have multiple objects in them


MAIN advantage of class is, they can share same method in objects

*/

const map = new Map()

map.set('in', 'india');
map.set('hr', 'haryana');

console.log(map);



//for of
for (const [key, value] of map) {
    console.log(key, value);
    
}


//chaining

const aplha = [1,2,3,4,5,6,7,8,9,10]


const siri = aplha.map((si) => { return si*10})
                    .map((si)=> {return si+80})

console.log(siri);

