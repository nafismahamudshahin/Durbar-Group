function convertToCamelCase(sentence) {
    // TODO: Implement this function
    const ans = sentence
        .trim().toLowerCase().split(/\s+/).map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1));

    return ans.join("");

}