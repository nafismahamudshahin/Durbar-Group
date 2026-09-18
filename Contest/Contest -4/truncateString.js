function truncateString(str, maxLength) {
    // TODO: Implement this function
    let len = str.length;
    if (len <= maxLength) {
        return str;
    }
    if (maxLength <= 3) {
        return "...";
    }
    return `${str.slice(0, maxLength - 3)}...`;
}


console.log(truncateString("Hello world, this is a long string", 10))
// Expected output: "Hello w..."

console.log(truncateString("Short text", 15))
console.log(truncateString("Short text", 3))
// Expected output: "Short text"