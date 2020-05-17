/*
/p takes unicode property or symbol as an argument
L = letter
N = number
S = symbol
*/

//pattern = /\p{unicode property}/

let string1 = "This is my U+1F600 Tell me how i look  U+1F600";
// console.log(string1.match(/\p{L}/g))
//null 

// console.log(string1.match(/\p{L}/gu));
/*
[
  'T', 'h', 'i', 's', 'i', 's',
  'm', 'y', 'U', 'F', 'T', 'e',
  'l', 'l', 'm', 'e', 'h', 'o',
  'w', 'i', 'l', 'o', 'o', 'k',
  'U', 'F'
]
*/

// console.log(string1.match(/\p{S}/gu));
//[ '+', '+' ]


// let found = "I found $300"
// console.log(found.match(/\p{Sc}/gu));
//[ '$' ]

