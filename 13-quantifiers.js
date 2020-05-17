// *

let string1 = "Lorem ipsum dolor sit amet, consectetur abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Pri viderer tamquam ei. Vivendum intellegat et qui, ei denique consequuntur vix. Scripta periculis ei eam, te pro movet reformidans. Ex nam agam veri, dicunt efficiantur ad qui, ad legere adversarium sit. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Vivendum intellegat et qui, ei denique consequuntur vix. Vivendum intellegat et qui, ei denique consequuntur vix. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Eos verear percipit ex, eos ne eligendi inimicus. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Scripta periculis ei eam, te pro movet reformidans. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu";
let pattern1 = /w*/g;
// console.log(string1.match(pattern1))
//1157 more items - non exist

let pattern2 = /lo*/g;
// console.log(string1.match(pattern2));
/*
[
  'lo', 'lo', 'l', 'l', 'l',  'l',
  'l',  'lo', 'l', 'l', 'l',  'l',
  'lo', 'l',  'l', 'l', 'l',  'l',
  'l',  'l',  'l', 'l', 'l',  'l',
  'l',  'l',  'l', 'l', 'lo', 'lo',
  'l',  'l',  'l', 'l'
]
*/

let pattern3 = /is?/g;
// console.log(string1.match(pattern3));
//26 times


let string2 = "hello Hlamot";
let pattern4 = /he?l/g;
// console.log(string2.match(pattern4));
//[ 'hel' ]

let pattern5 = /he?l\w+/g;
// console.log(string2.match(pattern5));
//[ 'hello' ]

let stringHello = "hello hello hel ";
let pattern10 = /hel{2}o/g;
// console.log(stringHello.match(pattern10))
//[ 'hello', 'hello' ]

let stringGood = "good good gooooaaall goolood gooooal"
let pattern9 = /go{2,4}o/g;
// console.log(stringGood.match(pattern9));
//[ 'goooo', 'goooo' ]

let stringGood1 = "hello heeeelllllooooo helllllllo helo"
pattern7 = /hel{2,}o/g;
// console.log(stringGood1.match(pattern7));
//[ 'hello', 'helllllllo' ]



