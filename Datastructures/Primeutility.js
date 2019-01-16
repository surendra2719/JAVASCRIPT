var readline = require('readline-sync');

module.exports = {

isPrime(number) {
    if (number == 0 || number == 1) {
        return false;
    }
    for (let index = 2; index < number; index++) {
        if (number % index == 0) {
            return false;
        }

    }
    return true;
}
}