function convertTemperature(value, unit) {
    // TODO: Implement the temperature conversion
    if (unit === "C") {
        return Math.round(((value * (9 / 5)) + 32) * 100) / 100;
    }
    return Math.round((value - 32) * (5 / 9) * 100) / 100;
}

console.log(convertTemperature(0, 'C'));
// Expected output: 32

console.log(convertTemperature(32, 'F'));
// Expected output: 0