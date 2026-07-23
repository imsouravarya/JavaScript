//Object FETCH METHOD
const course = {
    courseName: "JAVASCRIPT",
    price: 999,
    mode: "online"
}

/*To fetch the vale directly from Object */
console.log(course.price);

//fetch object entity via shorter name method
//DESTRUCTURING OF OBJECT
let {courseName: name} = course
console.log(name);

