let date = new Date()
//date is an object
console.log(date)
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toLocaleDateString())
console.log(typeof date)
let myCreatedDate = new Date("2024-08-7")
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())
let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))
let newDate = new Date()
console.log(newDate.getDay())
console.log(newDate.getMonth())
console.log(newDate.getMinutes())
console.log(newDate.getUTCMilliseconds())
newDate.toLocaleString('default',{
    weekday: "long",
    timeZone:'getUTCMilliseconds'
});
console.log(newDate.weekday)