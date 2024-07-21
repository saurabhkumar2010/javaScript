const accountId = 17082002 
let accountEmail = "hitesh@google.com" 
var accountPassword = "12345"
accountCity = "Jaipur" // Bad practice  
let accountState;     // when we don't initialize tha value in the variable then it stored undefined

// accountId = 2 // not allowed beacuse accountId is constant type that's why we can't update in  accountId

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope     
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])