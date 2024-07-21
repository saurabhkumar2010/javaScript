function SetUsername(username){
    //complex DB calls
    this.username = username;
    console.log("called");
}  

function createUser(username, email, password){
    SetUsername.call(this,username);  // to hold the reference we use (.call){call pass the current execution context to another function}

   
    this.email = email
    this.password = password
}    

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai); 