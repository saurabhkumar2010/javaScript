//question: doeas javascript really have classes?
/*
Yes, JavaScript does have classes. Introduced in ECMAScript 2015 (ES6), classes in JavaScript are a way to create objects using a template or blueprint. however,it's important to note that js is primarily a prototype based language, and its classes are primarily syntactic sugar over existing prototype-based inheritance mechanisims. in other words , it provides more familiar syntax for developers coming from class based laguge such as java or c++, but undergo it work somewhat differntly 
*/
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);            
    }

}


// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);




function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    // return this    //it is not compulsory
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11,false)
console.log(userOne); 
console.log(userOne.constructor);  //reference itself
console.log(userTwo); 