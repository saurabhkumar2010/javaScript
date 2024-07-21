let score = "hitesh"                              

//console.log(typeof score);   //string  
//console.log(typeof(score));  //string

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);  //number        
// console.log(valueInNumber);          //NaN


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"                           

// let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);    //true 

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33
// console.log(someNumber);
// console.log(typeof (someNumber));

let stringNumber = String(someNumber)
// console.log(stringNumber);          //33
// console.log(typeof stringNumber);   // string             

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);  //12
// console.log(1 + "2");   //12
// console.log("1" + 2 + 2);  //122 
// console.log(1 + 2 + "2");   //32   // jha se string mil jati hai baki sab string consider hoti hai 

// console.log( (3 + 4) * 5 % 3);   //don't write messy code like this 

// console.log(+true);   //Bad practice 
// console.log(+"");     //Bad prctice1

let num1, num2, num3

num1 = num2 = num3 = 2 + 2  //bad practice 

let gameCounter = 100                    
++gameCounter;    //preincrement                
console.log(gameCounter);                  

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

console.log