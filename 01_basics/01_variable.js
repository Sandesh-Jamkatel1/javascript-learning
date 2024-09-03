const accountId = 144553
let accountEmail = "sandesh@google.com"
var accountPassword = "12345"
accountCity = "Hetauda"

// accountId = 2 //not allowed
accountEmail = "jamkatelsandesh5@gmail.com"
accountPassword = "Sandesh123"
accountCity = "Ktm"
let accountState;
/*
using var is not good idea because of issue blocked scope and functional scope
*/
console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountState])
