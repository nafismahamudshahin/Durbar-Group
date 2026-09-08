

// Strong: 
// The password has a length of 8 or more characters and contains at least one uppercase letter, one lowercase letter, one digit, and one special character (from !@#$%^&*).

// Medium: 
// The password has a length of 6 or more characters and satisfies at least two of the four character-type conditions (uppercase, lowercase, digit, special character).

// Weak: 
// Any password that does not meet the criteria for "Strong" or "Medium".

function classifyPassword(password) {
    // TODO
    const specilaChar = "!@#$%^&*";
    let digit = false;
    let upparcase = false;
    let lowerCase = false;
    let len = password.length;
    let includeSpecilaChar = false;

    for (const char of password) {
        if (!includeSpecilaChar) {
            includeSpecilaChar = specilaChar.includes(char)
        }
        let uniCode = char.codePointAt(0);
        if (uniCode >= 48 && uniCode <= 57) {
            digit = true;
        }
        if (uniCode >= 65 && uniCode <= 90) {
            upparcase = true;
        }
        if (uniCode >= 97 && uniCode <= 122) {
            lowerCase = true;
        }
    }
    // for strong:
    if (len >= 8 && upparcase && lowerCase && digit && includeSpecilaChar) {
        return "Strong";
    }
    // for medium:
    if (len >= 6 && [upparcase, lowerCase, digit, includeSpecilaChar].filter(s => s === true).length >= 2) {
        return "Medium";
    }

    return "Weak";
}


console.log(classifyPassword("Password1!"))
// Expected: "Strong"

console.log(classifyPassword("pass123"))
// Expected: "Medium"