//searches for white space
// space between chars
// tab character \t
// carrage return character -r
// a new line character - \n
// a vertical tab feed character \f

let string1 = "wecome to paris.  \n Paris\tcapital of France"
let pattern1 = /\s/g;
console.log(string1.match(pattern1))

let pattern2 = /\S/g;
console.log(string1.match(pattern2));
//excludes whte space

let pattern3 = /[\n\t]/g;
// let pattern3 = /\n/g
console.log(string1.match(pattern3));
// [ '\n', '\t' ]

