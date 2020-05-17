//exec() method
//search and called on regular expression pattern

let str = "not easy otherwise to touch hot water";
let pattern = /ot/;
// console.log(str.match(pattern));
/*
[
  'ot',
  index: 1,
  input: 'not easy otherwise to touch hot water',
  groups: undefined
]
*/
// console.log(pattern.exec(str));
/*
[
  'ot',
  index: 1,
  input: 'not easy otherwise to touch hot water',
  groups: undefined
]
*/
let pattern1 = /ot/g;
// console.log(pattern1.exec(str));
// console.log(pattern1.exec(str));
// console.log(pattern1.exec(str));
// console.log(pattern1.exec(str));


//lastindex property returns the index from which the next search wll begin
// console.log(pattern1.lastIndex);
// console.log(pattern1.exec(str));
// console.log(pattern1.lastIndex);
// console.log(pattern1.exec(str));
// console.log(pattern1.lastIndex);
// console.log(pattern1.exec(str));

// pattern1.lastIndex = 3;
// console.log(pattern1.lastIndex);
// console.log(pattern1.exec(str));
// console.log(pattern1.lastIndex);
// console.log(pattern1.exec(str));
// console.log(pattern1.lastIndex);
// console.log(pattern1.exec(str));
// starts at index 3

let pattern2 = /\w+/g;
// console.log(pattern2.exec(str));
/*
[
  'not',
  index: 0,
  input: 'not easy otherwise to touch hot water',
  groups: undefined
]
*/
// console.log(pattern2.exec(str));
/*
  'easy',
  index: 4,
  input: 'not easy otherwise to touch hot water',
  groups: undefined
]
*/

pattern2.lastIndex = 3;
// console.log(pattern2.exec(str));
/*
[
  'easy',
  index: 4,
  input: 'not easy otherwise to touch hot water',
  groups: undefined
]
*/

//begin a search at 3 --
//output is null
//y -sticky --- fixed start point
let pattern3 = /\w+/gy;
pattern3.lastIndex = 3;
console.log(pattern3.exec(str));
//null

