function reverseEachWord(str: string): string {
    // TODO: Implement this function
    return str.split(" ").map(word => {
        return word.split("").reverse().join("");
    }).join(" ");
}
// Input: str = "Hello World"

// Output: "olleH dlroW"
