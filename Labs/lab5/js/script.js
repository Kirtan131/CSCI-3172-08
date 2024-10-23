document.getElementById('calculateBtn').addEventListener('click', function() {

    const numbersInput = document.getElementById('numbers').value;

    // Built-in Function: `split(',')` and `map(Number)`
    // Reason: `split` is used to split the string input into an array of substrings where each number is separated by a comma.
    // Reason: `map` is used to transform the array of strings into an array of numbers.
    const numbersArray = numbersInput.split(',').map(Number); 
    let primeCount = 0; 
    let compositeCount = 0; 
    let neitherCount = 0;

    
    function isPrime(num) {
        if (num < 2) return false;

        // Built-in Function: `Math.sqrt()`
        // Reason: `Math.sqrt` returns the square root of a number to optimize prime number checking.
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    
    for (let i = 0; i < numbersArray.length; i++) {
        let num = numbersArray[i];
        if (num === 1) {
            neitherCount++;
        } else if (isPrime(num)) {
            primeCount++;
        } else if (num > 1) {
            compositeCount++;
        }
    }

    document.getElementById('primeCount').textContent = primeCount;
    document.getElementById('compositeCount').textContent = compositeCount;
    document.getElementById('neitherCount').textContent = neitherCount;
});    