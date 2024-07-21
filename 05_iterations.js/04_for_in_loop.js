const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"                 
}

for (const key in myObject) {           
    // console.log(`${key} is shortcut  for ${myObject[key]}`);  
}          
                    
const programming = ["js", "rb", "py", "java", "cpp"]  

for (const key in programming) {         
    // console.log(programming[key]);   
}

const greetings = "Hello world!"         
for (const greet in greetings) {  
    // console.log(`Char at ${greet}th index is ${greetings[greet]}`)                       
}

// const map = new Map()            
// map.set('IN', "India")                    
// map.set('USA', "United States of America")                              
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);       
// }           // for in loop is not aplicable on maps 