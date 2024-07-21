const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){    // for each loop take function callback, callback is a function which is passed to another function as an argument and in function callback there is no name of function     
    // console.log(val);
} )

coding.forEach( (item) => {
    // console.log(item);
} )

function printMe(item){
    console.log(item);      //give refrence of function not execute 
}

// coding.forEach(printMe)


coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);           
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python", 
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageFileName);
} )