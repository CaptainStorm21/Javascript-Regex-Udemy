let string1 = "Welcome, your name is Alice, fox"
let pattern1 = /\w+(?=,)/g;
// console.log(string1.match(pattern1))
//[ 'Welcome', 'Alice' ]

let pattern2 = /\w+(?!=,)/g;
// console.log(string1.match(pattern2));
//[ 'Welcome', 'your', 'name', 'is', 'Alice', 'fox' ]

let pattern3 = /\w+(?!,)/g;
// console.log(string1.match(pattern3));
//[ 'Welcom', 'your', 'name', 'is', 'Alic', 'fox' ]

let pattern4 = /\w+(?!,|\?)\b/g;
// console.log(string1.match(pattern4));
//[ 'your', 'name', 'is', 'fox' ]

