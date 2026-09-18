function isAnagram(s1, s2) {
    // TODO: Implement this function
    let firstWordLetterCounts = {};
    let secondWordLetterCounts = {};

    for (const char of s1.toLowerCase()) {
        let code = char.charCodeAt(0);
        if (code >= 97 && code <= 122)
            if (firstWordLetterCounts[char]) {
                firstWordLetterCounts[char]++;
            } else {
                firstWordLetterCounts[char] = 1;
            }
    }

    for (const char of s2.toLowerCase()) {
        let code = char.charCodeAt(0);
        if (code >= 97 && code <= 122)
            if (secondWordLetterCounts[char]) {
                secondWordLetterCounts[char]++;
            } else {
                secondWordLetterCounts[char] = 1;
            }
    }
    if (Object.keys(firstWordLetterCounts).length !== Object.keys(secondWordLetterCounts).length) {
        return false;
    }

    for (const char in firstWordLetterCounts) {
        if (firstWordLetterCounts[char] !== secondWordLetterCounts[char]) {
            return false;
        }
    }
    return true;
}



console.log(isAnagram("listen", "silent"));
// => true

console.log(isAnagram("Hello", "world"));
// => false

console.log(isAnagram("A decimal point", "I'm a dot in place"));
// => true