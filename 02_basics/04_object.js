// const tinderUser = new Object()    //Singlenton Object            
const tinderUser = {}                   //Non-Singlenton Object            

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false  

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {                          // Nesting of Objects
        userfullname: {   
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}                   
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}   

// const obj3 = { obj1, obj2 }  
// const obj3 = Object.assign({}, obj1, obj2, obj4)


// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// Array of objects 
const users = [
    {
        id: 1,
        email: "h1@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },
    {
        id: 3,
        email: "h3@gmail.com"  
    },
]

// console.log(users[1].email)

// console.log(tinderUser);   

// console.log(Object.keys(tinderUser)); 
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",         
    price: "999",  
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course      //object de-structure 

// console.log(courseInstructor);
console.log(instructor); 

// {
//     "name": "hitesh", 
//     "coursename": "js in hindi",
//     "price": "free"    
// }

[
    {},
    {},
    {}
]