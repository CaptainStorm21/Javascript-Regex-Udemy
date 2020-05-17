//sets and ranges

let string1 = "I wonder why it's windy";
let pattern1 = /[i-o]/g;
// console.log(string1.match(pattern1))
//[ 'o', 'n', 'i', 'i', 'n' ]

let nums1 = "23 1231 23123 1";
let pattern = /[1-4]/g;
// console.log(nums1.match(pattern))
/*
[
  '2', '3', '1', '2',
  '3', '1', '2', '3',
  '1', '2', '3', '1'
]
*/



let string2 = "This is Wayne's World. The movie was released!";
let pattern2 = /[A-Z]/g;
// console.log(string2.match(pattern2));
// ["T", "W", "W", "T"];