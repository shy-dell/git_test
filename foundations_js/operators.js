// Important to note that the ONLY binary operator that deals in strings is '+'
// Therefore, it will convert all operands / arguments AFTER a string in an addition / concatenation statement
// REMINDER: Numbers are numbers, not Integers in JS

console.log(2 + "1") //we expect "21"

console.log(2 + 2 + "1") // here we expect 41 b/c the numbers are added first

// Now here's a different example, since the string is leading we convert all following to str and concat
console.log("1" + 2 + 2) // 122 NOT 14

// Once again, '+' is the only operator that uses strings, so using '-' converts to numbers
console.log("2" - 1) //1 not 21

// WHAT DOES THE UNARY + DO?
// Unary + will convert the operand to a number
// Does the same thing as Number(...) but more shorthand
let x = "1";
let y = 1;
let z = -3;
let a = true;
let b = "";

console.log(+x); // 1
console.log(typeof +y); // number
console.log(+z); // -3
console.log(+a); // 1
console.log(+b);// 0

console.log(+x + +a); // this gives us 2, as both are converted to numbers
// Why are unary pluses added before the binary in the above? PRECEDENCE

// OPERATOR PRCEDENCE
// Unary take higher precedence than binary rules
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence


// ASSIGNMENT
// Assignment is also an operator with a very low precedence priority of 2
// therefore when we assign a variable the calculations are done first

let assign = 2 * 2 + 1;
console.log(assign);

// chaining assignments evaluate from right to left
let one, two, three;
one = two = three = 2 + 2;
console.log(one);
console.log(two);
console.log(three); // should all be the same

// modify in place with "operator-equals"
let n = 2;
n += 3;
console.log(n); // 5
n *= 5;
console.log(n); // now 25

// Increment and decrement
// WARNING: Can only be applied to variables, so 4++ gives an error
n++;
console.log(n); //now 26
n--;
console.log(n); //now 25 again

// BITWISE Operators
// AND (&)
// OR (|)
// XOR (^)
// NOT (~)
// LEFT SHIFT (<<)
// RIGHT SHIFT (>>)
// ZERO-FILL RIGHT SHIFT (>>>)

// COMMA - allows us to evaluate multiple expressions (see one, two, three above)

// == is equal to
// === is equal value AND equal type
// != NOT equal to
// !== not equal value or not equal type

// " " and ' ' serve the same function
// `` are "Template Literals" and are used similar to an f-string in python
// e.g., `Hello, ${name}`