let string1 = "Dr.Java + Mr. Script here";
let pattern1 =/(?<=Dr.)\w+/g;
// console.log(string1.match(pattern1));
//[ 'Java' ]

let string2 = "I played 10 times for $50"
let pattern2 = /(?<=\$)\w+/g;
// console.log(string2.match(pattern2));
//[ '50' ]

let pattern3 = /(?<!\$)\d+/g;
// console.log(string2.match(pattern3));
//[ '10', '0' ]


 let pattern4 = /\b(?<!\$)\d+/g;
// console.log(string2.match(pattern4));
// ["10"];
