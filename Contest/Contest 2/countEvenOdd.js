function countEvenOdd(numbers) {
    // TODO: Implement this function]
    let even = 0;
    let odd = 0;
    for (let num of numbers) {
        if (num % 2 == 0) {
            even++;
        } else {
            odd++;
        }
    }

    return { even, odd };
}