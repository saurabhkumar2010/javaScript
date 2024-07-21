//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100    //number 
const scoreValue = 100.3  // number there is no concept float and int like c++ & java

const isLoggedIn = false    // boolean
const outsideTemp = null   //object 
let userEmail;             // undefined   

const id = Symbol('123')     //symbol
const anotherId = Symbol('123')  //symbol

console.log(id === anotherId);   //false     

// const bigNumber = 3456543576654356754n   //BigInt



// Reference (Non primitive)

// Array, Objects, Functions
// important topic :- object and browser events                                

//Array  
const heros = ["shaktiman", "naagraj", "doga"]; 



// object 
let myObj = {
    name: "hitesh",
    age: 22,
}                  


//function
const myFunction = function(){
    console.log("Hello world");
}    



 
console.log(typeof anotherId);     

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// stack (primitive), Heap (Non-primitive)

let myYoutubename = "hiteshchoudarydotcom"   //string (primitive)

let anothername = myYoutubename            // pas a copy of myYoutubename not refrence 
anothername = "chaiorcode"

console.log(myYoutubename)      // hiteshchoudarydotcom
console.log(anothername)        //chaiorcode

let userOne = {                             // object (Non-primitive)
    email: "user@google.com",
    upi: "user@ybl"

}            

let userTwo = userOne              // pass refrence not copy 

userTwo.email = "hiteshchoudary@google.com"

console.log(userOne.email);          
console.log(userTwo.email);    