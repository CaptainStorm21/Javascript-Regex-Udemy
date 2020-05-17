// allows multiline matching

let string1 =
  "And that no State, without its Consent, \n shall be deprived of it's equal Suffrage in the Constitution or Laws of the Union, \nSuffrage recommend to their Consideration such Measures as he shall take the following Oath or Affirmation: —“I do solemnly swear or affirm that I will faithfully execute the Office of Trust or Profit under the United States, and within every subsequent Term of ten Years, in such Manner as they shall by Law direct. If after such Reconsideration two thirds of both Houses shall be determined by Yeas and Nays, and the Senate, shall, before it become a Law, be presented to the President of the State Legislature. To Controversies between two or more who have equal Votes, the Senate and House of Representatives shall immediately chuse by Ballot one of them against Invasion. Provided that no Amendment which may be made prior to the Year One thousand eight hundred and eight, but a tax or duty may be imposed on such Importation, not exceeding ten dollars for each Person. And the Congress may at any time by Law make or alter such Regulations, except as to the State having Jurisdiction of the Crime. To define and punish Piracies and Felonies committed on the List the said House shall in any Manner affect the first and fourth Clauses in the Courts of Law, or Law impairing the Obligation of Contracts, or grant any Title of Nobility.";
// let pattern1 = m\g;
// console.log(string1.match(pattern1))

// console.log(string1.match(/Suffrage/))
//index 74

// console.log(string1.match(/Suffrage/g));
//[ 'Suffrage' ]

// console.log(string1.match(/Suffrage/gm));
// ["Suffrage", "Suffrage"];

let msg = `Hello from Mars
Hello from Moon
Hello from 3rd line`;

// console.log(msg.match(/^Hello/gm))
//[("Hello", "Hello", "Hello")];

let msg1= `
Hello 1
Hello 2
Hello 3
`
// console.log(msg1.match(/\d$/gm));
// ["1", "2", "3"];
