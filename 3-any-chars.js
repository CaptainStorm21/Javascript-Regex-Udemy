/*
1st char can be any character 
2nd char should be "h" & then rest of letters
*/

/*
    / .h\w+
*/

let str = "this is what that is. That's twig thyme";
let ptrn = /.h\w+/g;
console.log(str.match(ptrn))
// [ 'this', 'what', 'that', 'That', 'thyme' ]

/*
(.) - t, w, t (any character)
(h): - 2nd character
(\w+): the rest of chars
*/

