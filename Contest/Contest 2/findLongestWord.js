function findLongestWord(sentence) {
    // TODO: Implement this function
    let words = sentence.split(" ");
    let longestWord = "";

    for (const word of words) {
        const newWord = word.replace(/[^a-zA-Z0-9]/g, "");
        if (newWord.length > longestWord.length) {
            longestWord = newWord;
        }
    }

    return longestWord;
}