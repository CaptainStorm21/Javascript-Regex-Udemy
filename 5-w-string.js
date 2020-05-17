/*
\w return all characters
A-Z
a-z
0-9
*/

let str = "welcome to monte_carlo! san-rafael in europe!!!!";
let ptrn = /\w/g;
console.log(str.match(ptrn));
// string outputs each word as a letter exclusing ! and &
let ptrn1 = /\w+/g;
//returns a sentence as individual word
console.log(str.match(ptrn1));
//[ 'welcome', 'to', 'monte_carlo', 'san', 'rafael', 'in', 'europe' ]

//  \W finds the other characters
let str1 = "Welcome to Paris! This is France."
let pattern1 = /\W/g;
console.log(str1.match(pattern1));
//finds period, space, exclamaintion mark




