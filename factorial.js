function factorial(num) {
    if (num === 0) {
        return 1;
    }
    let fac = 1;
    for (let i = 1; i <= num; i++) {
        fac *= i;
    }
    return fac;
}

module.exports = factorial;
