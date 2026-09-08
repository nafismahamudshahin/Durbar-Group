

function isPalindrome(str) {
    // TODO: Implement this function
    const chars = str.split("");
    let filteredChars = "";
    for (const char of chars) {
        let uniCode = char.codePointAt(0);
        if (uniCode >= 48 && uniCode <= 57) {
            filteredChars = filteredChars + char;
        }
        if (uniCode >= 65 && uniCode <= 90) {
            filteredChars = filteredChars + char;
        }
        if (uniCode >= 97 && uniCode <= 122) {
            filteredChars = filteredChars + char;
        }
    }
    const previous = filteredChars.toLowerCase();
    const afterRevese = filteredChars.toLowerCase().split("").reverse().join("");
    return previous === afterRevese;
}


console.log(isPalindrome("madam"))
// => true

console.log(isPalindrome("A man, a plan, a canal: Panama"))
// => true

console.log(isPalindrome("hello"))
// => false