function compressCharacters(str) {
    // TODO: Implement this function
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let l = 1;
        while (str[i] == str[i + 1]) {
            l++;
            i++;
        }
        result += `${str[i]}${l >= 2 ? l : ""}`;
    }
    return result;
}


console.log(compressCharacters("aaabbc"))
// Expected output: "a3b2c"

console.log(compressCharacters("hello"))
// Expected output: "he2llo"