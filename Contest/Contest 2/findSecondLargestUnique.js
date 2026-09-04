function findSecondLargestUnique(numbers) {
    // TODO: Implement this function
    const uniqueNumbers = [...new Set(numbers)];

    if (uniqueNumbers.length < 2) {
        return null;
    }

    uniqueNumbers.sort((a, b) => b - a);

    return uniqueNumbers[1];
}