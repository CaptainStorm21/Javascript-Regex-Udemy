let msg = "h\nllo hillboy mister";
let result = msg.match(/h.l/g);
console.log(result)
//[ 'hil' ]
let result1= msg.match(/h.l/gs);
console.log(result1);
//[ 'h\nl', 'hil' ]



