let str = "this is how it is!";
let ptrn = /is/g;
ptrn.lastIndex = 0;
// console.log(ptrn.exec(str));
// console.log("lastIndex:" + ptrn.lastIndex);
// console.log(ptrn.exec(str));

// /g allows next search
// lastIndex stores 1st find then adds another with 2nd call

let result = " ";

while (result!= null) {
    console.log("lastIndex :" + ptrn.lastIndex);
    result = ptrn.exec(str);
    console.log(result);
}