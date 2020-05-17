function r(a, b, c) {
  return "at";
}
let str = "this method is working";
let newStr = str.replace(/is/g, r);
console.log(newStr);

let newString = str.replace("is", "AT");
console.log(newString);