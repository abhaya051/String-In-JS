// Strings (Normally We Learn About Strings In Data Types)

// How To Write A Strings (Both Is Correct Method Of Write A Strings)
// let a = "Mahi";
// let b = "Mohan";
// console.log(a, b);

// How To Know About String Length
// let a = "Kavya";
// console.log(a.length);

// String Indices [0],[1],[2]....etc
// let a = "Kavya";
// console.log(a[0]);

// Template Literals in JS (A way to have embedded expressions in strings Also it is Special Types Of String)
// let sent = `This Is My Red Pen`; (Using By Backtick)
// console.log(sent);

// Why Use Template Literal e.g
// let obj = {
//   brand: "Zara",
//   price: 5800,
// };
// console.log("The Price Of", obj.brand, "Shirt Is", obj.price, "Ruppes");
// console.log(`The Price Of ${obj.brand} Shirt Is ${obj.price} Rupees`);
// The Above Method Is Wrong because in Above We Can Write Strings and Object Again And Again

// You Can Also Use /n and
// let Name = "Rohan\nMohan"; //Br Tag in js
// console.log(Name);

// String Interpolation
// To create strings by doing substitution of placeholders
// In Template Literals We Can Write ${Expression} This Is Called String Interpolation

// String Methods in JS------------------------------------->>>>>>>>>>>>>>>>>>>>
// These are built-in functions to manipulate a string

// Upper Case()
// let str = "Mohit";
// console.log(str.toUpperCase());

// Lower Case()
// let str = "Mohit";
// console.log(str.toLowerCase());

// str.trim( ) // removes whitespaces Front And Back
// let str = "         Mohan Kumar        ";
// console.log(str.trim());

//str.slice(start, end?) // returns part of string
// let str = "JavaScript";
// console.log(str.slice(1, 3));

// str1.concat(str2); // joins str2 with str1
// let str1 = "Java";
// let str2 = "Script";
// console.log(str1.concat(str2));

// str.replace( searchVal, newVal )
// let str1 = "Java Script";
// console.log(str1.replace("Java Script", "Type Script"));

// str.charAt( idx )
// let str1 = "Java Script";
// console.log(str1.charAt(0));

// Note String Is Immutable (This Will Not Change )
// let str1 = "Java Script";
// console.log(str1[0]);
// str1[0] = "H";
// console.log(str1);
