function DNA(dnaString) {
    let processedDNA = [];

    for (let letter of dnaString) {
        if (letter === 'C') {
            processedDNA.push(letter);
        } else if (letter === 'T') {
            processedDNA.push(letter);
        } else if (letter === 'A') {
            processedDNA.push(letter);
        } else if (letter === 'G') {
            processedDNA.push(letter);
        }
    }
    return processedDNA.join("");
}

module.exports = DNA;