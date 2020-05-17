/*
Let str = "....";
search all words;
w[any character]n
*/

let str = "I wonder wen it's windy and wandy";
let ptrn = /w.n\w+/g;
console.log(str.match(ptrn))
/*
[wonder]
[ 'windy', 'wandy' ]
[ 'wonder', 'windy', 'wandy' ]
*/

// \n is not treated as a character
let str_hi = "I am w\nndering if w\nning"
let ptrn_1 = /w.n\w+/gs;
console.log(str_hi.match(ptrn_1));
// ["w\nndering", "w\nning"];



