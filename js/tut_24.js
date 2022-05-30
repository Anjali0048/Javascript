let today = new Date();
// console.logs(today);       // type object

let otherDate = new Date('8-4-2003 04:54:08')
otherDate = new Date('april 08 2022 04:54:08')
console.log(otherDate);

let a = otherDate.getDay()
a = otherDate.getDate()
a = otherDate.getMinutes()
a = otherDate.getSeconds()
a = otherDate.getHours()
a = otherDate.getTime()
a = otherDate.getMilliseconds()
console.log(a);

otherDate.setMonth(11)
otherDate.setDate(18)
otherDate.setFullYear(2018)
otherDate.setHours(2)
otherDate.setMinutes(25)
console.log(otherDate);

