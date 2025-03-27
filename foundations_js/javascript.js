// function add7(num) {
//     console.log(num + 7);
// }

// add7(7);

// let multiply = (i,y) => console.log(i * y);
// multiply(12,24);

// let capitalize = x => console.log(x.charAt(0).toUpperCase() + x.slice(1))
// capitalize("seven");

// function lastLetter(word) {
//     console.log(String(word).at(-1));
// }
// lastLetter("thsi is a longer sentence ending in z")

function fizzBuzz(limit) {
    for (let x = 1; x <= limit; x++) {
        if (x % 3 == 0 && x % 5 == 0){
            console.log('FizzBuzz');
        }
        else if (x % 3 == 0) {
            console.log("Fizz");
        }
        else if (x % 5 == 0) {
            console.log("Buzz")
        }
        else {
            console.log(x)
        }
        }
}

fizzBuzz(parseInt(prompt("Please enter a number you would like FizzBuzzed: ")))