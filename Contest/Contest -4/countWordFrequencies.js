function countWordFrequencies(sentence) {
    // TODO: Implement this function
    const words = sentence.toLowerCase().split(/\s+/)
        .map(word => word.replace(/[^a-z0-9]/g, ""))
        .filter(word => word != "");
    let wordCounter = {};
    for (const word of words) {
        if (wordCounter[word]) {
            wordCounter[word]++;
        } else {
            wordCounter[word] = 1;
        }
    }
    return wordCounter;
}


console.log(countWordFrequencies("Hello world, hello!"));
// Expected output:
// {"hello": 2, "world": 1}

countWordFrequencies("The quick brown fox jumps over the lazy dog.");
// Expected output:
// {"the": 2, "quick": 1, "brown": 1, "fox": 1, "jumps": 1, "over": 1, "lazy": 1, "dog": 1}