
// problem link : https://code-lab-ph.vercel.app/labs/code-lab/contests/dc-1/count-number-properties
function countNumberProperties(numbers: number[]): { even: number; odd: number; positive: number; negative: number } {
    // TODO: Implement this function
    let even = 0;
    let negative = 0;
    let odd = 0;
    let positive = 0;
    for (let number of numbers) {
        if (number % 2 === 0) {
            even++;
        }
        if (number % 2 !== 0) {
            odd++;
        }
        if (number > 0) {
            positive++;
        }
        if (number < 0) {
            negative++;
        }
    }
    return { even, odd, positive, negative };
}