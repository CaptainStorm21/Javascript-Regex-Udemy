// let str = "FirstName, Surname";
// let ptrn = /(\w+), (?:\w+)/;
// let newStr = str.replace(ptrn, "$2 $1");
// console.log(newStr);

// let str = "1234-4567";
// let ptrn = /\d+-\d+/g;
// console.log(ptrn.exec(str));

let str = "FirstName, Surname";
let ptrn = /(?<fname>\w+), (?<sname>\w+)/;
let grpVal = str.match(ptrn).groups;
console.log(grpVal);
console.log(grpVal.fname);