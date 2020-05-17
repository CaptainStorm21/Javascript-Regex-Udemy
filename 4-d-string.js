//

let str = "I teach HTML5, CSS3, React16.8+, Angular8+ ";
// let ptrn =/\d/;
let ptrn = /\d/g;
console.log(str.match(ptrn))

/*
    [
    '5',
    index: 12,
    input: 'I teach HTML5, CSS3, React16.8+, Angular8+ ',
    groups: undefined
    ]
*/

// g - flag returns digits individually
// [ '5', '3', '1', '6', '8', '8' ]


// \D
//searches for non-digit values
let classes = " HTML5, CSS3, React16.8+, Angular8+";
let ptrn_1 = /\D/g;
console.log(classes.match(ptrn_1))
/*
[
  ' ', 'H', 'T', 'M', 'L', ',',
  ' ', 'C', 'S', 'S', ',', ' ',
  'R', 'e', 'a', 'c', 't', '.',
  '+', ',', ' ', 'A', 'n', 'g',
  'u', 'l', 'a', 'r', '+'
]
*/


