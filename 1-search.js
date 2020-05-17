let msg = "This is Case sensitive";
let pos = msg.search('Case');
console.log(pos);

// make a case insensitive 
//regexp ("pattern", "Flag or modifier")
//i = case insensitive
let insensitive = msg.search(/case/i);
console.log(insensitive);

let msg2 = "This is javascript class";
let ptrn = RegExp("javaScript", "i");
let find_in = msg2.search(ptrn);
console.log(find_in);

/*
i - case insensitive search
g - global match. it does not stop the search after first occurence
m - performs multiline search
s - allows(.) to match new line characters
u - switches to unicode pattern matching 
y = switches to sticky mode
*/

// Flag "g"
let message = "Welcome to Wild Wild West"
let pattern_g = message.match(/Wild/)
console.log(pattern_g)

/*
[
  'Wild',
  index: 11,
  input: 'Welcome to Wild Wild West',
  groups: undefined
]
*/

let pattern_global = message.match(/Wild/g)
console.log(pattern_global)
/*output [ 'Wild', 'Wild' ]*/

let message_multiple = "Welcome to Wild wild West"
let global_multiple_case = message_multiple.match(/wild/gi)
console.log(global_multiple_case);
/*[ 'Wild', 'wild' ]*/

