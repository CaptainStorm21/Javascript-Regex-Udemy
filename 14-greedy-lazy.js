let str = "JS is not 'ES6' and 'ES7'  new stuff";
let ptrn = /'.+'/g;
// console.log(str.match(ptrn))
//[ "'ES6' and 'ES7'" ]

// ? lazy quantifier
let ptrn1 = /'.+?'/g;
console.log(str.match(ptrn1));
//[ "'ES6'", "'ES7'" ]