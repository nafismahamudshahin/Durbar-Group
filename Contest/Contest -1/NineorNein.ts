// problem link: https://code-lab-ph.vercel.app/labs/code-lab/contests/dc-1/nine-or-nein
function checkMathOperationsForNine(a: number, b: number): string {
    // TODO: Implement this function
    let sum: number = a + b;
    let difference: number = a - b;
    let product: number = a * b;
    let quotient: number = a / b;
    if (sum === 9 || difference === 9 || product === 9 || quotient === 9) {
        return "Nine";
    }
    return "Nein";
}