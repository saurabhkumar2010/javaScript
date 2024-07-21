class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)  //here is no need of passing of "this" and no need of use of "call" keyword
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.addCourse();
chai.logMe()
const masalaChai = new User("masalaChai")  

// masalaChai.addCourse()   //masalaChai have no access of addcourse function because addcourse function define in Teacher and   Teacher inherit user not user inherit Teacher
masalaChai.logMe() 


console.log(chai === masalaChai);  //it gives false 
console.log(chai instanceof User);  //true                 
console.log(chai instanceof Teacher);  //true                 
console.log(masalaChai instanceof User);  //true                 
console.log(masalaChai instanceof  Teacher);  //false                 