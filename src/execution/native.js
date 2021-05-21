function iterate(param) {
    let sum = 0;

    while (sum < 1000) {
        sum += param;
    }

    return sum;
}

module.exports = function makeTestFunction() {
    return iterate;
}
