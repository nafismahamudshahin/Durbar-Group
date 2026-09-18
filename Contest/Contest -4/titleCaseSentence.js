function titleCaseSentence(str) {
    // TODO: Implement this function
    const words = str.trim().toLowerCase().split(" ");
    return words.filter(word => word !== "").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
}


console.log(titleCaseSentence("hello world"));
// Expected output: "Hello World"

console.log(titleCaseSentence("a short sentence"));
// Expected output: "A Short Sentence"

console.log(titleCaseSentence("  jAVAsCript    is    FUN  "));