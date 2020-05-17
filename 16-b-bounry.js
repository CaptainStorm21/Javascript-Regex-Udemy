let string1 = "testing a test to testify"
let pattern = /\btest\b /g;
// console.log(string1.match(pattern))
//test one separate word

let pattern1 = /\btest/g;
// console.log(string1.match(pattern1));
//[ 'test', 'test', 'test' ] - all words with test

let string2 = "testing your best test to testify";
let pattern2= /\est\b/g;
// console.log(string2.match(pattern2));
//[ 'est', 'est' ] - best test

let num1 = "34 3423 23423 23423423"
let patnum = /\b34/g;
console.log(num1.match(patnum));
//[ '34', '34' ]

let patnum1 = /\b\d\d\d\d\b/g;
console.log(num1.match(patnum1))
//[ '3423' ]

