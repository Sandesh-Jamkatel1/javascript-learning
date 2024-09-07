//primitive data types store in stack and call by value
let myYoutubename = "SandeshJamkatel.com"
let anothername = myYoutubename
anothername = "JamkatelSandesh.com"
console.log(myYoutubename)
console.log(anothername)
//not-primitive call by refernces
let user={
    name:"Sandesh",
    address:"Hetauda,17"
};
console.log(user.name);
let anotheruser=user;
anotheruser.name="Sugham";
console.log(anotheruser.name)
console.log(user.name)