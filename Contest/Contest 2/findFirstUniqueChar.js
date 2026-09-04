function findFirstUniqueChar(s) {
    // TODO: Implement this function
    let charCount = {};
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    return Object.keys(charCount).find(key => charCount[key] === 1) || -1;
}


console.log(findFirstUniqueChar("aabb"))
// Input: s = "aabbcdeff"

// Output: "c"