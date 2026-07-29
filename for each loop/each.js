//for each loop


const test = ["qa", "qw", "ee", "uj"]

test.forEach( function (val){
    console.log(val);
    
})



//fetching object value of array


const wwe = [

    {
        wrestler: "JohnCena",
        titles: 17
    },

    {
        wrestler: "RandyOrton",
        titles: 14
    },

    {
        wrestler: "tripleH",
        titles: 15
    }
]


wwe.forEach( function (item) {
    console.log(item.wrestler);
    
})