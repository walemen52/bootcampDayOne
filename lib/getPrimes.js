let getPrimes = (n) => {
    let sieve = [];
    let d = [];
    let z = [];
    primeNumbers = [];
    for (d = 2; d <= n; ++d) {
        if (!sieve[d]) {
            primeNumbers.push(d);
            for (z = d << 1; z <= n; z += d) {
                sieve[z] = true;
            }
        }
    }
    return primeNumbers;
}