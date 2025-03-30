// Find prime numbers from 2 to n

let limit = prompt("Input an upper limit: ");

nextPrime: for (let i = 2; i <= limit; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    alert(i);
}